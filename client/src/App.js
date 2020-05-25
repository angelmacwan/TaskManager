import React from "react";
import "./App.css";
import "./Responsive.css";

import SidebarResponsive from "./Components/SidebarResponsive";
import Sidebar from "./Components/Sidebar";
import Todotile from "./Components/Todotile";

import Addtask from "./Components/Addtask";
import Login from "./Components/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: "taskList",
      data: [],
      dataInc: [],
      dataOng: [],
      Lable: [],
      LableInc: [],
      LableOng: [],
      User: "",
      loggedin: false,
      test: 0
    };
  }

  updateLogin = inUserName => {
    fetch("/api/todo")
      .then(res => res.json())
      .then(data => {
        let taskList = [];
        let category = [];

        for (let tasks of data) {
          if (tasks.user === inUserName) {
            taskList.push(tasks);
            if (!category.includes(tasks.lable)) category.push(tasks.lable);
          }
        }
        this.setState({
          loggedin: true,
          User: inUserName,
          data: taskList,
          Lable: category
        });

        // for reloading page elements
        this.setState({
          loggedin: 0
        });

        this.setState({
          loggedin: true
        });
      });
  };

  showAddTask() {
    let taskForm = document.querySelector(".Addtask");
    taskForm.classList.toggle("AddtaskShow");
  }

  logOut = () => {
    this.setState({
      loggedin: false,
      User: ""
    });
  };

  showIncomplete = () => {
    fetch("/api/todo")
      .then(res => res.json())
      .then(data => {
        let taskList = [];
        let category = [];

        for (let tasks of data) {
          if (tasks.user === this.state.User && tasks.status === "Incomplete") {
            taskList.push(tasks);
            if (!category.includes(tasks.lable)) category.push(tasks.lable);
          }
        }

        this.setState({
          loggedin: true,
          data: taskList,
          Lable: category,
          currentSection: "Incomplete"
        });

        // for reloading page elements
        this.setState({
          loggedin: 0
        });

        this.setState({
          loggedin: true
        });
      });
  };

  showTaskList = () => {
    fetch("/api/todo")
      .then(res => res.json())
      .then(data => {
        let taskList = [];
        let category = [];

        for (let tasks of data) {
          if (tasks.user === this.state.User) {
            taskList.push(tasks);
            if (!category.includes(tasks.lable)) category.push(tasks.lable);
          }
        }

        this.setState({
          loggedin: true,
          data: taskList,
          Lable: category,
          currentSection: "taskList"
        });

        // for reloading page elements
        this.setState({
          loggedin: 0
        });

        this.setState({
          loggedin: true
        });
      });
  };

  showOnGoing = () => {
    fetch("/api/todo")
      .then(res => res.json())
      .then(data => {
        let taskList = [];
        let category = [];

        for (let tasks of data) {
          if (tasks.user === this.state.User && tasks.status === "Ongoing") {
            taskList.push(tasks);
            if (!category.includes(tasks.lable)) category.push(tasks.lable);
          }
        }

        this.setState({
          loggedin: true,
          data: taskList,
          Lable: category,
          currentSection: "Ongoing"
        });

        // for reloading page elements
        this.setState({
          loggedin: 0
        });

        this.setState({
          loggedin: true
        });
      });
  };

  render() {
    if (!this.state.loggedin) {
      return <Login trigger={this.updateLogin} />;
    } else {
      return (
        <div className="App">
          <SidebarResponsive />
          <Sidebar
            addTask={this.showAddTask}
            UserLogout={this.logOut}
            showincomplete={this.showIncomplete}
            showTaskList={this.showTaskList}
            showOnGoing={this.showOnGoing}
          />
          <div className="workspace">
            <h1 id="greating"> Welcome {this.state.User} </h1>
            <div className="card-columns">
              {/*COMMENT*/}
              {/*COMMENT*/}
              {this.state.Lable.map((value, index) => {
                return (
                  <Todotile
                    key={index}
                    lable={value}
                    listItems={this.state.data}
                    updateAll={this.updateLogin}
                    username={this.state.User}
                  />
                );
              })}
              {/*COMMENT*/}
              {/*COMMENT*/}
            </div>
          </div>
          <Addtask currentuser={this.state.User} updateAll={this.updateLogin} />
        </div>
      );
    }
  }
}

export default App;
