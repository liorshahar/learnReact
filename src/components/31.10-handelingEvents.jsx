import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  /*
  -> 1) solution 
  constructor() {
    super(); //Component consrtuctor
    //here we have accsess to this
    this.handleIncrement = this.handleIncrement.bind(this);
  }
   */
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  /* 
  handleIncrement() {
    // this is undifined in this method why?
    // obj.method();
    // function();
    // strict mod

    console.log("Increment Clicked");
  } */

  //2) solution use the arrow function that inhirit the this keyword

  handleIncrement = () => {
    console.log("Increment Clicked ", this);
  };

  render() {
    // to wrap elements we can use <div> or <React.Fragment>
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
