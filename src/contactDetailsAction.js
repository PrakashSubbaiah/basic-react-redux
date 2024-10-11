export const setContactDetails = () => (dispatch) => {
  console.log("get action");
  return dispatch({
    type: "SETCONTACT",
    payload: {
      name: "prakash",
      age: 18,
    },
  });
};

export const clearContactDetails = () => (dispatch) => {
  return dispatch({
    type: "CLEARCONTACT",
  });
};
