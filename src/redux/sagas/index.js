import axios from 'axios';
import { all } from 'redux-saga/effects';
import { put, call, takeLatest } from 'redux-saga/effects';

//this function directs the dispatches that are called from the components
function* catchDispatch() {
	yield takeLatest('GET_SPOON', spoonApi);
	yield takeLatest('GET_EDAMAM', edamamApi);
	yield takeLatest('GET_CAMPBELLS', campbellsApi);
}

function* spoonApi(action) {
	try {
		const response = yield call(axios.get, `/api/spoon-recipes`, action.payload);
		yield put({ type: 'SPOON_REDUCER', payload: response.data });
	}
	catch (error) {
		console.log(`GET request to "/api/spoon-recipes" UNSUCCESSFUL: `, error);
	}
}

function* edamamApi(action) {
	try {
		const response = yield call(axios.get, `/api/edamam-recipes`, action.payload);
		yield put({ type: 'EDAMAM_REDUCER', payload: response.data });
	}
	catch (error) {
		console.log(`GET request to "/api/edamam-recipes" UNSUCCESSFUL: `, error);
	}
}

function* campbellsApi(action) {
	try {
		const response = yield call(axios.get, `/api/campbells-recipes`, action.payload);
		yield put({ type: 'CAMPBELLS_REDUCER', payload: response });
	}
	catch (error) {
		console.log(`GET request to "/api/campbells-recipes" UNSUCCESSFUL: `, error);
	}
}

// rootSaga is the primary saga
// It bundles up all of the other sagas then is imported by src/index.js
function* rootSaga() {
	yield all([
		catchDispatch()
	]);
}

export default rootSaga