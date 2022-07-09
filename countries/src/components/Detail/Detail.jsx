import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { getByName, clearAll } from "../../redux/actions/actions.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Loading/Loading.jsx";
import "./Detail.css";

const Detail = ({ theme }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [isLoading, setIsLoading] = useState(true);

  const { countryName } = useParams();

  useEffect(() => {
    dispatch(getByName(countryName));
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearAll());
      setIsLoading(true);
    };
  }, []);

  return (
    <div className="country-details">
      <NavLink to="/" className={`link-${theme}-theme`}>
        <button className={`back-${theme}-theme`}>
          <FiArrowLeft />
          Back
        </button>
      </NavLink>
      {countries.length === 0 ? <Loading theme={theme} /> : null}
      {!isLoading &&
        countries?.map((country, index) => {
          let namesC = Object.getOwnPropertyNames(country.currencies);
          let namesL = Object.getOwnPropertyNames(country.languages);
          return (
            <div className="country-details-body" key={index}>
              <div className="img-container">
                <img
                  src={country.flags.png}
                  alt={`${country.name.official} image`}
                  className="image"
                />
              </div>
              <div className={`info-${theme}-theme`}>
                <h2>{country.name.common}</h2>
                <div className="info-container">
                  <div className="left-info">
                    <p>
                      Official Name:{" "}
                      <span className={`values-${theme}-theme`}>
                        {country.name.official}
                      </span>
                    </p>
                    <p>
                      Population:{" "}
                      <span className={`values-${theme}-theme`}>
                        {Intl.NumberFormat().format(country.population)}
                      </span>
                    </p>
                    <p>
                      Region:{" "}
                      <span className={`values-${theme}-theme`}>
                        {country.region}
                      </span>
                    </p>
                    <p>
                      Sub Region:{" "}
                      <span className={`values-${theme}-theme`}>
                        {country.subregion}
                      </span>
                    </p>
                  </div>
                  <div className="rigth-info">
                    <p>
                      Capital:{" "}
                      <span className={`values-${theme}-theme`}>
                        {country.capital}
                      </span>
                    </p>
                    <p>
                      Top Level Domain:{" "}
                      <span className={`values-${theme}-theme`}>
                        {country.tld}
                      </span>
                    </p>
                    <p>
                      Currencies:{" "}
                      <span className={`values-${theme}-theme`}>
                        {namesC?.map(
                          (n) =>
                            Object.getOwnPropertyDescriptors(
                              country.currencies
                            )[n].value.name + " - "
                        )}
                      </span>
                    </p>
                    <p>
                      Languages:{" "}
                      <span className={`values-${theme}-theme`}>
                        {namesL?.map(
                          (n) =>
                            Object.getOwnPropertyDescriptors(country.languages)[
                              n
                            ].value + " - "
                        )}
                      </span>
                    </p>
                  </div>
                </div>
                Border Countries:
                <div className={`border-country-${theme}-theme`}>
                  <p>Test</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Detail;
