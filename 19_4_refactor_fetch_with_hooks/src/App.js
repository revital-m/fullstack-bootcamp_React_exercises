import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Spinner from "./components/Spinner/Spinner";
import Button from "./components/Button/Button";

function App() {
  const [categoryArr, setCategoryArr] = useState("");
  const [randomJoke, setRandomJoke] = useState("");
  const [func, setFunc] = useState("getCategory");
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [isClickBtn, setIsClickBtn] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = "";
        switch (func) {
          case "getCategory":
            res = await axios.get(
              "https://api.chucknorris.io/jokes/categories"
            );
            setCategoryArr(res.data);
          case "getRandomJoke":
            res = await axios.get("https://api.chucknorris.io/jokes/random");
            setRandomJoke(res.data.value);
            break;
          case "getRandomJokeByCategory":
            res = await axios.get("https://api.chucknorris.io/jokes/random");
            setRandomJoke(res.data.value);
            break;
          default:
            break;
        }

        setIsLoading(false);
        setIsClickBtn(false);
      } catch (error) {
        setIsLoading(false);
        setIsClickBtn(false);
        setErrMsg(error.message);
      }
    };

    setIsLoading(true);
    getData();
  }, [isClickBtn]);

  const createCategoryBtn = () => {
    return categoryArr.map((category, idx) => {
      return (
        <Button
          key={idx}
          categoryBtnClass="btn--category"
          handleClick={() => handleClick("getRandomJokeByCategory")}
          name={category}
          btnText={category}
        />
      );
    });
  };

  const handleClick = (chosenFunc) => {
    setFunc(chosenFunc);
    setIsClickBtn(true);
  };

  return (
    <div className="container">
      <button className="btn" onClick={() => handleClick("getRandomJoke")}>
        Click to get a random joke
      </button>
      {errMsg && <h1 className="errMsg">{errMsg}</h1>}
      {isLoading && <Spinner />}
      {!isLoading && <h1>{randomJoke}</h1>}
      {categoryArr && (
        <div className="category-container">
          <h2>Choose a category:</h2>
          <div className="btn__container--category">{createCategoryBtn()}</div>
        </div>
      )}
    </div>
  );
}

export default App;
