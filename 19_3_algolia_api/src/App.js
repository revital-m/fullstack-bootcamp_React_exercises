import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Input from "./components/Input/Input";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [searchData, setSearchData] = useState("");
  const [userValue, setUserValue] = useState("hooks");
  const [isClickBtn, setIsClickBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${userValue}`
        );

        const filteredArr = res.data.hits.map((item) => {
          return {
            title: item.title,
            id: item.objectID,
            url: item.url,
          };
        });

        setIsLoading(false);
        setIsClickBtn(false);
        setSearchData(filteredArr);
      } catch (error) {
        setIsLoading(false);
        setIsClickBtn(false);
        setErrMsg(error.message);
      }
    };

    setIsLoading(true);
    getData();
  }, [isClickBtn]);

  const handleChange = (e) => {
    setUserValue(e.target.value);
  };

  const handleClick = () => {
    setIsClickBtn(true);
  };

  const displayList = () => {
    return searchData.map((item) => {
      return (
        <li key={item.id} className="list--item">
          <a className="list--link" href={item.url} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </li>
      );
    });
  };

  return (
    <div className="container">
      <Input
        labelName="Search"
        handleInputChange={handleChange}
        value={userValue}
        handleClick={handleClick}
      />
      {errMsg && <h1 className="errMsg">{errMsg}</h1>}
      {isLoading && <Spinner />}
      <ul>{searchData && displayList()}</ul>
    </div>
  );
}

export default App;
