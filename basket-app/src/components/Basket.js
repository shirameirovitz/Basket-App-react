import { useState } from "react";

export default class Basket extends React.Component {
   
    state = {
      counter: 0,
    };
    increase = () => {
      this.setState({ counter: this.state.increase + 1 });
    };
    render() {
      return (
        <ul className="groceries">
            <li>{this.state.counter!==0 ? this.props.name:""}</li>

        </ul>
      );
    }
  }
  
    




export default Basket;