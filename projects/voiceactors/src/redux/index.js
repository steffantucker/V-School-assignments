import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const MAL = "https://api.jikan.moe/v3/";

const initState = {
  type: null,
  queryType: null,
  result: []
};

// Split into 2 functions to provide a buffer between calls
// Still got a CORS issue when calling /anime/:id endpoint (bug?)
export const getAnime = id => {
  return function(dispatch) {
    axios
      .get(`https://vschool-cors.herokuapp.com?url=${MAL}anime/${id}/`)
      .then(anime => {
        const data = {
          title: anime.data.title_english,
          image: anime.data.image_url,
          description: anime.data.synopsis,
          airDate: anime.data.premiered
        };
        setTimeout(getAnime2, 1000, id, data, dispatch);
      })
      .catch(err => console.error(err));
  };
};

const getAnime2 = (id, data, dispatch) => {
  axios
    .get(`${MAL}anime/${id}/characters_staff`)
    .then(characters => {
      const d = {
        ...data,
        characters: characters.data.characters.map(v => {
          v.name = v.name
            .split(", ")
            .reverse()
            .join(" ");
          return v;
        })
      };
      dispatch({
        type: "SHOW_ANIME",
        data: d
      });
    })
    .catch(err => console.error(err));
};

export const search = (type, query) => {
  return function(dispatch) {
    axios
      .get(`${MAL}search/${type}?q=${query}`)
      .then(re =>
        dispatch({
          type: "SEARCH",
          queryType: type,
          results: re.data.results
        })
      )
      .catch(err => console.error(err));
  };
};

export const getCharacter = id => {
  return dispatch =>
    axios.get(`${MAL}character/${id}`).then(re => {
      const data = {
        name: re.data.name,
        description: re.data.about,
        image: re.data.image_url
      };
      const ids = re.data.voice_actors
        ? re.data.voice_actors.map(va => ({
            id: va.mal_id,
            language: va.language
          }))
        : "none";
      if (ids !== "none") setTimeout(getVAs, 2000, ids, dispatch);
      else data.voiceactors = "none";
      dispatch({
        type: "GET_CHARACTER",
        data
      });
    });
};

const getVAs = (ids, dispatch) => {
  const id = ids.shift();
  const roleids = [];

  axios
    .get(`${MAL}person/${id.id}`)
    .then(re => {
      re.data.voice_acting_roles.forEach(
        role =>
          roleids.indexOf(role.character.mal_id) === -1
            ? roleids.push(role.character.mal_id)
            : null
      );
      const roles = re.data.voice_acting_roles.filter(role => {
        if (roleids.indexOf(role.character.mal_id) !== -1) {
          roleids.splice(roleids.indexOf(role.character.mal_id), 1);
          return true;
        }
        return false;
      });
      const data = {
        name: `${re.data.name} - ${id.language}`,
        image: re.data.image_url,
        description: re.data.about,
        roles: roles
      };
      if (ids.length > 0) setTimeout(nextVA, 2000, ids, dispatch);
      dispatch({
        type: "FIRST_VA",
        data
      });
    })
    .catch(err => console.error(err));
};

const nextVA = (ids, dispatch) => {
  const id = ids.shift();
  const roleids = [];
  axios
    .get(`${MAL}person/${id.id}`)
    .then(re => {
      re.data.voice_acting_roles.forEach(
        role =>
          roleids.indexOf(role.character.mal_id) === -1
            ? roleids.push(role.character.mal_id)
            : null
      );
      const roles = re.data.voice_acting_roles.filter(role => {
        if (roleids.indexOf(role.character.mal_id) !== -1) {
          roleids.splice(roleids.indexOf(role.character.mal_id), 1);
          return true;
        }
        return false;
      });
      const data = {
        name: `${re.data.name} - ${id.language}`,
        image: re.data.image_url,
        description: re.data.about,
        roles: roles
      };
      if (ids.length > 0) {
        setTimeout(nextVA, 2000, ids, dispatch);
        dispatch({
          type: "ADD_VA",
          data
        });
      } else {
        dispatch({
          type: "LAST_VA",
          data
        });
      }
    })
    .catch(err => console.error(err));
};

const reducer = (prev = initState, action) => {
  let { type, queryType, results } = prev;
  switch (action.type) {
    case "SEARCH":
      queryType = action.queryType;
      switch (queryType) {
        case "anime":
          type = "anime";
          results = action.results.map(v => ({
            id: v.mal_id,
            title: v.title,
            img: v.image_url,
            type: v.type,
            score: v.score,
            description: v.description
          }));
          break;
        case "character":
          type = "character";
          results = action.results.map(v => {
            return {
              id: v.mal_id,
              name: v.name
                .split(", ")
                .reverse()
                .join(" "),
              img: v.image_url,
              anime: v.anime[0]
                ? v.anime[0].name
                : v.manga[0]
                  ? v.manga[0].name
                  : null,
              voiceActor: v.voice_actors
            };
          });
          break;
        default:
      }
      break;
    case "SHOW_ANIME":
      type = "character";
      queryType = null;
      results = action.data;
      break;
    case "GET_CHARACTER":
      type = "character";
      queryType = null;
      results = action.data;
      break;
    case "FIRST_VA":
      results = {
        name: results.name,
        description: results.description,
        image: results.image,
        voiceactors: [action.data],
        more: true
      };
      break;
    case "ADD_VA":
      results = {
        name: results.name,
        description: results.description,
        image: results.image,
        voiceactors: [...results.voiceactors, action.data]
      };
      break;
    case "LAST_VA":
      results = {
        name: results.name,
        description: results.description,
        image: results.image,
        voiceactors: [...results.voiceactors, action.data],
        more: false
      };
      break;
    default:
      type = null;
  }
  return { type, queryType, results };
};

export const clearTimers = () => {
  const t = setTimeout(";", 1000000);
  for (var i = 0; i < t; i++) {
    clearTimeout(i);
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
