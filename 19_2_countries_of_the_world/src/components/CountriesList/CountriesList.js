import React, { useState, useEffect } from "react";
import "./CountriesList.css";

const CountriesList = ({ ListData, userValue }) => {
  const [countriesList, setCountriesList] = useState(ListData);
  const [searchValue, setSearchValue] = useState([userValue]);

  if (userValue !== searchValue) {
    setSearchValue(userValue);
  }

  useEffect(() => {
    const filteredList = filterData(ListData, userValue);
    setCountriesList(filteredList);
  }, [searchValue]);

  const filterData = (arrOfData, userInput) => {
    return arrOfData.filter((country) => {
      return country.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  const displayList = () => {
    return countriesList.map((country) => {
      return (
        <li key={country.id} className="list--item">
          {country.name}
        </li>
      );
    });
  };

  return <ul>{displayList()}</ul>;
};

export default CountriesList;
