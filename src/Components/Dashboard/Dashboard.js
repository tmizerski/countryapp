import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Country from "../Country/Country";

const Dashboard = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [region, setRegion] = useState("");

  const API_URL_ALL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(API_URL_ALL)
      .then((res) => res.json())
      .then((res) =>
        setCountriesData(
          res.map((res) => {
            return {
              name: res.name.common,
              population: res.population.toLocaleString(),
              region: res.region,
              capital: res.capital,
              flag: res.flags.png,
            };
          })
        )
      );
  }, [countriesData]);

  const handleFilterCountries = (e) => {
    setSearchFilter(e.target.value.toLowerCase().trim(" "));
  };

  const handleRegionFilter = (e) => {
    setRegion(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="searchModule-container">
        <input
          onChange={(e) => handleFilterCountries(e)}
          type="text"
          placeholder="Search for a country"
        />
        <select
          onChange={(e) => handleRegionFilter(e)}
          className="region"
          id="region"
        >
          <option value="">Filter by region</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <ul>
        {countriesData
          .filter((country) => {
            if (searchFilter === "" && !region) {
              return country;
            } else {
              return (
                country.name.toLowerCase().includes(searchFilter) &&
                (!region || country.region === region)
              );
            }
          })
          .map((country) => (
            <Link to={`/detail/:${country.name}`}>
              <Country
                key={country.name}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
              />
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Dashboard;
