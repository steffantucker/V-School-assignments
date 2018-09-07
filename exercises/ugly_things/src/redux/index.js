import { createStore, combineReducers } from 'redux';
import uuidv4 from 'uuid';

const initState = {
  uglies: [
    {
      title: 'kitten',
      description: 'kitten',
      url: 'http:\\\\placekitten.com\\400\\400',
      id: 'd544ddc0-bd2c-41f6-99ef-b7aed73db051'
    },
    {
      title: 'kitten',
      description: 'kitten',
      url: 'http:\\\\placekitten.com\\500\\400',
      id: '5b5bbc6e-b934-446e-bc70-b69f64913432'
    }
  ],
  comments: [{
		id: uuidv4(),
		comment: "dat's cute",
		uglyId: 'd544ddc0-bd2c-41f6-99ef-b7aed73db051'
	}]
}

export const addUgly = (title, description, url) => ({ type: 'ADD_UGLY', new: {title, description, url}});
export const delUgly = id => ({ type: 'DELETE_UGLY', id });

export const addComment = (id, comment) => ({ type: 'ADD_COMMENT', comment, id })
export const delComment = commentId => ({ type: 'DELETE_COMMENT', commentId });

const uglyReducer = (prev = initState.uglies, action) => {
	switch(action.type) {
		case 'ADD_UGLY':
			console.log(prev);
			action.new.id = uuidv4();
			return [...prev, action.new];
		case 'DELETE_UGLY':
			return prev.filter(v => v.id !== action.id);
		default:
			return prev;
	}
}

const commentsReducer = (prev = initState.comments, action) => {
	switch(action.type) {
		case 'ADD_COMMENT':
			action.commentId = uuidv4();
			return [...prev, { id: action.commentId, comment: action.comment, uglyId: action.id }]
		case 'DELETE_COMMENT':
			return prev.filter(v => v.id !== action.commentId);
		case 'DELETE_UGLY':
			return prev.filter(v => v.uglyId !== action.id)
		default:
			return prev;
	}
}

const reducer = combineReducers({uglies: uglyReducer, comments: commentsReducer})
// const reducer = (prev, action) => {
// 	switch (action.type) {
// 		default: 
// 			return {uglies: uglyReducer(prev, action), comments: commentsReducer(prev, action)};
// 	}
// }

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());