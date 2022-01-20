import React, { Component } from "react";

//const {title,desc,date,status} = this.props.info

class Task extends Component {
  render() {
    return (
      <section>
        <h3>Title: {title}</h3>
        <p>Description: {desc}</p>
        <p>DeadLine: {date}</p>
        <p>Status: {status}</p>
        <button onClick={this.props.remove}>Done!</button>
        <button onClick={this.props.edit}>Edit</button>

      </section>
    )
  }
}

export default Task;
