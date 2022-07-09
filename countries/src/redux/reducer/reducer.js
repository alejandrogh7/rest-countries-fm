const initialState = {
  countries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "GET_BY_NAME":
      return {
        ...state,
        countries: action.payload,
      };
    case "GET_BY_REGION":
      return {
        ...state,
        countries: action.payload,
      };
    case "CLEAR_ALL":
      return {
        countries: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
