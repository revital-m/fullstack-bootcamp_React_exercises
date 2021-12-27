import React, { Component } from "react";
import axios from "axios";
import AvatarList from "./components/AvatarList/AvatarList";
import Input from "./components/Input/Input";
import Spinner from "./components/Spinner/Spinner";
import "./App.css";

export default class App extends Component {
  state = {
    data: [],
    originalData: [],
    value: "",
    isLoading: false,
    isError: false,
    errMsg: "",
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    this.getData();
  }

  getData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=10");
      const dataLite = res.data.results.map((e) => {
        return {
          name: `${e.name.first} ${e.name.last}`,
          imgUrl: e.picture.medium,
          id: e.login.uuid,
        };
      });
      this.setState({
        data: dataLite,
        originalData: dataLite,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ isError: true, errMsg: error.massege });
    }
  };

  handleInput = ({ target: { value } }) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div className="container">
        <Input
          handleInput={this.handleInput}
          userValue={this.state.value}
          labelName="Search: "
        />
        {this.state.isError && <h1 className="errMsg">{this.state.errMsg}</h1>}
        {this.state.isLoading && <Spinner />}
        <AvatarList avatars={this.state.data} userValue={this.state.value} />
      </div>
    );
  }
}
