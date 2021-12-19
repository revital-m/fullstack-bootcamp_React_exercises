import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Button from "./components/Button/Button";

class App extends Component {
  state = { randomJoke: "" , categoryArr: [], error: "", isLoading: false};

  getRandomJoke = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    this.setState({ randomJoke: response.data.value });
  };

  getRandomJokeByCategory = async (e) => {
    console.log(e.target.innerText);
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.innerText}`);
    this.setState({ randomJoke: response.data.value });
  };

  getCategory = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories');

    this.setState({isLoading: false , categoryArr: response.data});
  };


  createCategoryBtn = () => {
    return this.state.categoryArr.map((category,idx) => {
      return (
        <Button key={idx} categoryBtnClass="btn--category" handleClick={this.getRandomJokeByCategory} name={category} btnText={category}/>
      );
    })
  }


  componentDidMount = () => {
    this.setState({isLoading: true});
    this.getCategory();
  }

  render() {
    
    return (
    <div className="container" >
      <button className="btn" onClick={this.getRandomJoke}>Click to get a random joke</button>
      <h1>{this.state.randomJoke}</h1>
      {this.state.categoryArr.length && <h3>Choose a category:</h3>}
      <div className="btn__container--category">
        {this.state.categoryArr.length && this.createCategoryBtn()}
      </div>
    </div>
    );
  }
}

export default App;
