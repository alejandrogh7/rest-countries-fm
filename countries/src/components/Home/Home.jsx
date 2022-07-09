import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, getCountries } from "../../redux/actions/actions";
import CountryCard from "../CountryCard/CountryCard.jsx";
import "./Home.css";

const Home = ({ theme }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getCountries());
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearAll());
      setIsLoading(true);
    };
  }, []);

  return (
    <>
      <main>
        <section className="searchbar">
          <SearchBar theme={theme} />
        </section>
        <section className="countries">
          {!isLoading &&
            countries?.map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.png}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  theme={theme}
                />
              );
            })}
        </section>
      </main>
    </>
  );
};

export default Home;
