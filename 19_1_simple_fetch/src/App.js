import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDirector, setMovieDirector] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1/");

      setMovieTitle(data.title);
      setMovieDirector(data.director);
    };

    getData();
  }, []);

  return (
    <div className="container">
      <h1>{movieTitle}</h1>
      <h3>{movieDirector}</h3>
    </div>
  );
}

export default App;
