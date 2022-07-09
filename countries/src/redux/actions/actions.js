import axios from "axios";

export const getCountries = () => {
  return async (dispatch) => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
};

export const getByName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    return dispatch({
      type: "GET_BY_NAME",
      payload: response.data,
    });
  };
};

export const getByRegion = (region) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    return dispatch({
      type: "GET_BY_REGION",
      payload: response.data,
    });
  };
};

export const clearAll = () => {
  return {
    type: "CLEAR_ALL",
  };
};
