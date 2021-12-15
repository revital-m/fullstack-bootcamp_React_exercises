import React from "react";
import "./App.css";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = { count: 5 };

  hendleTimer = () => {
    setTimeout(() => {
      this.setState({ count: this.state.count - 1 });
    }, 1000);
  };

  showSppiner = () => {
    if (this.state.count) {
      return <Spinner />;
    } else {
      return <></>;
    }
  };

  componentDidMount() {
    this.hendleTimer();
  }

  componentDidUpdate() {
    if (this.state.count > 0) {
      this.hendleTimer();
    }
    this.showSppiner();
  }

  render() {
    return (
      <div className="box-container">
        <h1>Timer: {this.state.count}</h1>
        {this.showSppiner()}
      </div>
    );
  }
}

export default App;
