import React, { Component } from "react";

import Nav from '../Nav/Nav';
import Task from '../Task/Task';


class ToDo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      tasks: [
        {title:"Fregar los platos",desc:"Con fairy",date:"23/09/2021",status: "in progress"},
        {title:"Planchar",desc:"Con fairy",date:"23/09/2021",status: "completed"},
        {title:"Barrer",desc:"Con fairy",date:"23/09/2021",status: "in progress"},
        {title:"Recoger",desc:"Con fairy",date:"23/09/2021",status: "completed"}
      ],
    }
  }
  // Add new task to de List & erase de inputs
  addTask = (e) => {
    e.preventDefault()
    const title = e.target.elements.title.value;
    const desc = e.target.elements.desc.value;
    const date = e.target.elements.date.value;
    const status = "in progress"

    if (title && desc && date) {
      const task = { title, desc, date, status }
      this.setState({ data: task })

      const newTask = task
      this.setState({ tasks: [...this.state.tasks, newTask] })
    }
    e.target.elements.title.value = "";
    e.target.elements.desc.value = "";
    e.target.elements.date.value = "";
  }

  // Paint all status tasks Cards,
  paintAllTasks = () => {
    console.log(this.state.tasks)
    return this.state.tasks.map((task, i) => <Task info={task} key={i} done={() => this.moveToDone(i)} edit={() => this.editTask(i)}/>)
  }
  // Paint only status: "in progress"
  paintTasks = () => {
    const fill = this.state.tasks.filter((task)=> task.status == "in progress")
    console.log(fill)
    return fill.map((task, i) => <Task info={task} key={i} done={() => this.moveToDone(i)} edit={() => this.editTask(i)}/>)
    //const filteredData = this.state.tasks.filter((task, i) => task.status === "in progress"); 
  }

  //Fil de progress 
  filtered = () => {
    const fill = this.state.tasks.filter((task)=> task.status == "in progress")
    console.log(fill)
    return fill
  }


  // Change status => completed, by ID
  moveToDone = (i) => {
    const newList = this.state.tasks.filter((curr, x) => x !== i)
    console.log("La nueva lista:", newList);
    this.setState({ tasks: newList })
  }
  // Edit the task, by ID
  editTask = (i) => {
    const newList = this.state.tasks.filter((curr, x) => x !== i)
    console.log("La nueva lista:", newList);
    this.setState({ tasks: newList })
  }


  render() {
    return (
      <main>
        <Nav />
        <h1>
          To Do List
        </h1>
        <section>
        <form className="form" onSubmit={this.addTask} >
          <label>
            Título:
          <input className="form--input" type="text" name="title" placeholder="Introduce tarea"/>
          </label><br/>
          <label>
            Descripción:
          <input className="form--input" type="text" name="desc" placeholder="Descripcion..."/>
          </label><br/>
          <label>
            Fecha:
          <input className="form--input" type="date" name="date"/>
          </label><br/>
          <input className="form--submit" type="submit" value="ADD"/>
        </form><br/>
        <button onClick={this.paintAllTasks}>All </button>
        
        </section>
        
        <div>
          <h1>Task List:</h1>
          <article>
            {this.paintTasks()}
          </article>
        </div>

      </main>
    )
  }
}

export default ToDo;

//{this.paintTasks()}
