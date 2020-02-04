import { combineReducers } from 'redux';

const spoonReducer = (state = [], action) => {
	switch (action.type) {
		case 'SPOON_REDUCER':
			return action.payload;
		default:
			return state;
	}
};

const edamamReducer = (state = [], action) => {
	switch (action.type) {
		case 'EDAMAM_REDUCER':
			return action.payload;
		default:
			return state;
	}
};

const campbellsReducer = (state = [], action) => {
	switch (action.type) {
		case 'CAMPBELLS_REDUCER':
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	spoonReducer,
	edamamReducer,
	campbellsReducer
});