let initialState = {
  personName: "",
  age: "",
};

const contactDetailsReducer = (state, action) => {
  switch (action.type) {
    case "SETCONTACT":
      console.log(action);
      return {
        ...state,
        personName: action.payload.name,
        age: action.payload.age,
      };
    case "CLEARCONTACT":
      return {
        ...initialState,
      };
    default:
      return {
        ...initialState,
      };
  }
};
export default contactDetailsReducer;
