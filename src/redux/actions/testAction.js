const SET_SUCCESS = "set_success";
const SET_NAME = "set_name";

const setSuccess = () => dispatch => {
  dispatch({
    type: SET_SUCCESS
  });
};
const setName = params => dispatch => {
  dispatch({
    type: SET_NAME,
    payload: { name: params }
  });
};

export { setName, setSuccess };

export const ACTION_HANDLERS = {
  [SET_SUCCESS]: (state, { payload }) => ({ ...state, isSuccess: "true" }),

  [SET_NAME]: (state, { payload }) => ({ ...state, ...payload })
};
