import React from "react";

class SidebarResponsive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vis: false
    };
  }
  showMainSidebar = () => {
    let MainSideBar = document.querySelector(".sidebar");
    if (this.state.vis === true) {
      MainSideBar.style.transform = "translateX(-200%)";
    } else {
      MainSideBar.style.transform = "translateX(0)";
    }
    this.setState({vis: !this.state.vis});
  };
  render() {
    return (
      <div className="sidebarTogel">
        <button type="button" onClick={this.showMainSidebar}>
          <svg
            className="bi bi-justify"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  }
}

export default SidebarResponsive;
