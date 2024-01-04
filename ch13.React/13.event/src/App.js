import React from "react";
import Button from "./components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Button 
          onClick={this.handleClick} 
          isToggleOn={this.state.isToggleOn} 
      />
    );
  }
}

export default App;
