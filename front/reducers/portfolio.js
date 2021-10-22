import produce from "immer";

const initailState = {
  imgs: [],
  //
  st_listLoading: false,
  st_listDone: false,
  st_listError: null,
};
import axios from "axios";

export const IMG_LIST_REQUEST = "IMG_LIST_REQUEST";
export const IMG_LIST_SUCCESS = "IMG_LIST_SUCCESS";
export const IMG_LIST_FAILURE = "IMG_LIST_FAILURE";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case IMG_LIST_REQUEST:
        draft.st_listLoading = true;
        draft.st_listDone = false;
        draft.st_listError = null;
        break;
      case IMG_LIST_SUCCESS:
        draft.st_listLoading = false;
        draft.st_listDone = true;
        draft.st_listError = null;
        draft.imgs = action.data;
        break;
      case IMG_LIST_FAILURE:
        draft.st_listLoading = false;
        draft.st_listDone = false;
        draft.st_listError = action.data;
        break;
      default:
        break;
    }
  });

export default reducer;
