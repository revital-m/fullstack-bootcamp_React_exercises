import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Input from "./components/Input/Input";
import CountriesList from "./components/CountriesList/CountriesList";

function App() {
  const [countriesData, setCountriesData] = useState("");
  const [userValue, setUserValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      const countriesArr = data.map((country) => {
        return { name: country.name, id: country.numericCode };
      });

      setCountriesData(countriesArr);
    };

    getData();
  }, []);

  const handleChange = (e) => {
    setUserValue(e.target.value);
  };

  return (
    <div className="container">
      <Input
        labelName="Search"
        handleInputChange={handleChange}
        value={userValue}
      />
      {countriesData && (
        <CountriesList ListData={countriesData} userValue={userValue} />
      )}
    </div>
  );
}

export default App;
