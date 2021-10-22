import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  IMG_LIST_REQUEST,
  IMG_LIST_SUCCESS,
  IMG_LIST_FAILURE,
  //
} from "../reducers/portfolio";
import axios from "axios";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
function imgListAPI(data) {
  return axios.get(`/api/img/list`);
}

function* imgList(action) {
  try {
    const result = yield call(imgListAPI, action.data);

    yield put({
      type: IMG_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: IMG_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

/////////
function* watchImgList() {
  yield takeLatest(IMG_LIST_REQUEST, imgList);
}

export default function* portfolioSaga() {
  yield all([
    fork(watchImgList),
    //,
  ]);
}
