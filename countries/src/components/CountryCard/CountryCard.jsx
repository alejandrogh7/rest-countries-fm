import React from "react";
import { NavLink } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({ name, population, region, capital, flag, theme }) => {
  return (
    <div className={`country-${theme}-theme`}>
      <NavLink to={`/country/${name}`} className={`link-${theme}-theme`}>
        <div className="flag-container">
          <img src={flag} alt={`${name} flag`} />
        </div>
        <div className="details">
          <h3 className="name">{name}</h3>
          <p>
            Population: <span> {Intl.NumberFormat().format(population)}</span>
          </p>
          <p>
            Region: <span className="values"> {region}</span>
          </p>
          <p>
            Capital: <span className="values"> {capital}</span>
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default CountryCard;
