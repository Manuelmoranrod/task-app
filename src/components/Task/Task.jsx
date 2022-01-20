import React, { Component } from "react";


class Task extends Component {
  render() {
    const {title,desc,date,status} = this.props.info
    return (
      <section>
        <h3>Title: {title}</h3>
        <p>Description: {desc}</p>
        <p>DeadLine: {date}</p>
        <p>Status: {status}</p>
        <button onClick={this.props.done}>Done!</button>
        <button onClick={this.props.edit}>Edit</button>

      </section>
    )
  }
}

export default Task;
