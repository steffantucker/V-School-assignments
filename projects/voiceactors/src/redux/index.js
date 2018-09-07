import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const MAL = "https://api.jikan.moe/v3/";

const initState = {
	type: null,
  queryType: null,
  result: []
};

export const getAnime = id => {
  return function(dispatch) {
    axios.all([
			axios.get(`https://vschool-cors.herokuapp.com?url=${MAL}anime/${id}/`),
      axios.get(`https://vschool-cors.herokuapp.com?url=${MAL}anime/${id}/characters_staff`)])
      .then(axios.spread((anime, characters) =>{
				const data = {
					title: anime.data.title_english,
					image: anime.data.image_url,
					description: anime.data.synopsis,
					airData: anime.data.premiered,
					characters: characters.data.characters
				}
        dispatch({
          type: "SHOW_ANIME",
          data
        })})
      )
      .catch(err => console.error(err));
  };
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

const reducer = (prev = initState, action) => {
  let { type, queryType, results } = prev;
  switch (action.type) {
    case "SEARCH":
      queryType = action.queryType;
      switch (queryType) {
				case "anime":
					type='anime';
          results = action.results.map(v => ({
            id: v.mal_id,
            title: v.title,
            img: v.image_url,
            type: v.type,
            score: v.score,
            description: v.description
          }));
          break;
        default:
      }
      break;
		case "SHOW_ANIME":
			type='character';
      queryType = null;
			results = action.data;
      break;
		default:
			type=null;
  }
  return { type, queryType, results };
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
