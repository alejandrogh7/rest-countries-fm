import React from "react";
import { CgSearch } from "react-icons/cg";
import { useDispatch } from "react-redux";
import {
  getByName,
  getCountries,
  getByRegion,
} from "../../redux/actions/actions.js";
import "./SearchBar.css";

const SearchBar = ({ theme }) => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e.target.value.trim() === "") return dispatch(getCountries());
    else return dispatch(getByName(e.target.value));
  };

  const handleSelect = (e) => {
    if (e.target.value === "") return dispatch(getCountries());
    else return dispatch(getByRegion(e.target.value));
  };

  return (
    <div className="inputs">
      <div className={`search-input-${theme}-theme`}>
        <CgSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search country..."
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div className={`select-region-${theme}-theme`}>
        <form>
          <select name="regions" onChange={(e) => handleSelect(e)}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
