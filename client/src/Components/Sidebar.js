import React from "react";

class Sidebar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="sidebar">
        <h2> TASKS </h2>
        <button className="btnSidebar" onClick={this.props.showTaskList}>
          <svg
            className="bi bi-card-text"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000 / svg "
          >
            <path
              fillRule="evenodd"
              d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8zm0 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
              clipRule="evenodd"
            />
          </svg>
          <br /> Task List
        </button>
        <button className="btnSidebar" onClick={this.props.showincomplete}>
          <svg
            className="bi bi-file"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000 / svg "
          >
            <path
              fillRule="evenodd"
              d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z"
              clipRule="evenodd"
            />
          </svg>
          <br /> Incomplete
        </button>
        <button className="btnSidebar" onClick={this.props.showOnGoing}>
          <svg
            className="bi bi-card-checklist"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000 / svg "
          >
            <path
              fillRule="evenodd"
              d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0zM7 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z"
              clipRule="evenodd"
            />
          </svg>
          <br /> Ongoing
        </button>
        <button className="btnSidebar" onClick={this.props.addTask}>
          <svg
            className="bi bi-file-plus"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000 / svg "
          >
            <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z" />
            <path
              fillRule="evenodd"
              d="M13.5 1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"
              clipRule="evenodd"
            />
          </svg>
          <br /> Add Task
        </button>
        <button className="btnSidebar" onClick={this.props.UserLogout}>
          <svg
            className="bi bi-arrow-bar-left"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.854 4.646a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708-.708L3.207 8l2.647-2.646a.5.5 0 000-.708z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M10 8a.5.5 0 00-.5-.5H3a.5.5 0 000 1h6.5A.5.5 0 0010 8zm2.5 6a.5.5 0 01-.5-.5v-11a.5.5 0 011 0v11a.5.5 0 01-.5.5z"
              clipRule="evenodd"
            />
          </svg>
          <br /> Logout
        </button>
      </div>
    );
  }
}

export default Sidebar;
