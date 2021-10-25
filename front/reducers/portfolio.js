import produce from "immer";

const initailState = {
  imgs: [],
  createModal: false,
  previewPath: null,
  //
  st_listLoading: false,
  st_listDone: false,
  st_listError: null,
  //
  st_imgLoading: false,
  st_imgDone: false,
  st_imgError: null,
  //
  st_imgCreateLoading: false,
  st_imgCreateDone: false,
  st_imgCreateError: null,
};
import axios from "axios";

export const IMG_LIST_REQUEST = "IMG_LIST_REQUEST";
export const IMG_LIST_SUCCESS = "IMG_LIST_SUCCESS";
export const IMG_LIST_FAILURE = "IMG_LIST_FAILURE";
export const IMG_UPLOAD_REQUEST = "IMG_UPLOAD_REQUEST";
export const IMG_UPLOAD_SUCCESS = "IMG_UPLOAD_SUCCESS";
export const IMG_UPLOAD_FAILURE = "IMG_UPLOAD_FAILURE";
export const IMG_CREATE_REQUEST = "IMG_CREATE_REQUEST";
export const IMG_CREATE_SUCCESS = "IMG_CREATE_SUCCESS";
export const IMG_CREATE_FAILURE = "IMG_CREATE_FAILURE";

export const CREATE_MODAL_TOGGLE = "CREATE_MODAL_TOGGLE";

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

      case IMG_UPLOAD_REQUEST:
        draft.st_imgLoading = true;
        draft.st_imgDone = false;
        draft.st_imgError = null;
        break;
      case IMG_UPLOAD_SUCCESS:
        draft.st_imgLoading = false;
        draft.st_imgDone = true;
        draft.st_imgError = null;
        draft.previewPath = action.data;
        break;
      case IMG_UPLOAD_FAILURE:
        draft.st_imgLoading = false;
        draft.st_imgDone = false;
        draft.st_imgError = action.data;
        break;

      case IMG_CREATE_REQUEST:
        draft.st_imgCreateLoading = true;
        draft.st_imgCreateDone = false;
        draft.st_imgCreateError = null;
        break;
      case IMG_CREATE_SUCCESS:
        draft.st_imgCreateLoading = false;
        draft.st_imgCreateDone = true;
        draft.st_imgCreateError = null;
        draft.previewPath = null;
        draft.createModal = false;
        break;
      case IMG_CREATE_FAILURE:
        draft.st_imgCreateLoading = false;
        draft.st_imgCreateDone = false;
        draft.st_imgCreateError = action.data;
        break;

      case CREATE_MODAL_TOGGLE:
        draft.createModal = !draft.createModal;
        break;

      default:
        break;
    }
  });

export default reducer;
