import { takeEvery, call, select, put } from "redux-saga/effects";
import es6promise from "es6-promise";

import actionTypes from "./actionTypes";
import actions from "./actions";
import { api, getFavorites, addFavorite, removeFavorite } from "-/src/services";

es6promise.polyfill();

function* pushFavorite(action) {
  const user = yield select(state => state.user);
  if (user.token) {
    yield call(addFavorite, action.productId);
  }
}
function* deleteFavorite(action) {
  const token = yield select(state => state.user.token);
  if (token) {
    yield call(removeFavorite, action.productId);
  }
}

function* setFavorites() {
  const { token } = yield select(state => state.user);
  if (!token) return;
  const { data: items } = yield call(getFavorites);
  const favoritesProducts = items.map(item => item.id);
  yield put(actions.favorites.set(favoritesProducts));
}
function* unsetFavorites() {
  yield put(actions.favorites.set([]));
}

function* rootSaga() {
  yield takeEvery(actionTypes.favorites.ADD, pushFavorite);
  yield takeEvery(actionTypes.favorites.REMOVE, deleteFavorite);
  yield takeEvery(actionTypes.user.LOGIN, setFavorites);
  yield takeEvery(actionTypes.user.LEAVE, unsetFavorites);
}

export default rootSaga;
