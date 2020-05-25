import React from "react";

class Addtask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentuser
    };
  }

  hideAddTask() {
    let taskForm = document.querySelector(".Addtask");
    taskForm.classList.toggle("AddtaskShow");
  }
  SubmitTask = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    let Title = document.querySelector("#todoTitle").value;
    let Lable = document.querySelector("#todoLable").value;
    let cDate = document.querySelector("#todoCompleteDate").value;
    if (cDate === "") cDate = "#";
    const data = {
      user: this.props.currentuser,
      title: Title,
      lable: Lable,
      completeDate: cDate,
      addedDate: date,
      status: "Incomplete"
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    fetch("/api/addtodo", options);
    let taskForm = document.querySelector(".Addtask");
    taskForm.classList.toggle("AddtaskShow");
    document.querySelector("#todoTitle").value = "";
    document.querySelector("#todoLable").value = "";
    document.querySelector("#todoCompleteDate").value = "";

    window.setTimeout(() => {
      this.props.updateAll(this.props.currentuser);
    }, 300);
  };

  render() {
    return (
      <div className="Addtask">
        <div className="AddtaskForm">
          <form method="POST" action="/api/addtodo">
            <input
              type="text"
              className="form-control"
              id="todoTitle"
              placeholder="Title"
            />

            <input
              type="text"
              className="form-control"
              id="todoLable"
              placeholder="Lable"
            />

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="addDateToggle"
                onClick={() => {
                  document.querySelector(
                    "#todoCompleteDate"
                  ).disabled = !document.querySelector("#todoCompleteDate")
                    .disabled;
                }}
              />
              <label className="custom-control-label" htmlFor="addDateToggle">
                Add a Deadline
              </label>
            </div>
            <input
              type="date"
              className="form-control"
              id="todoCompleteDate"
              disabled
            />
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.SubmitTask}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={this.hideAddTask}
            >
              cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Addtask;
