import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.value
    };
  }

  updateStatus = itemID => {
    const data = {ID: itemID};
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    fetch("/api/updatetodo", options);
    try {
      let btn = document.querySelector(`.${itemID}`);
      let btnval = btn.innerText;
      if (btnval === "Complete") {
        btn.id = "Incomplete";
        btn.innerText = "Incomplete";
      } else if (btnval === "Incomplete") {
        btn.id = "Ongoing";
        btn.innerText = "Ongoing";
      } else {
        btn.id = "Complete";
        btn.innerText = "Complete";
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <span className="list-group-item list-group-item-action">
        <div>
          {this.state.data.title}
          <br />
          <small>Added: {this.state.data.addedDate}</small>
          <br />
          <small>Deadline: {this.state.data.completeDate}</small>
        </div>

        <button
          className={this.state.data._id}
          id={this.state.data.status}
          onClick={() => {
            this.updateStatus(this.state.data._id);
          }}
        >
          {this.state.data.status}
        </button>
      </span>
    );
  }
}

export default ListItem;

// <span className="list-group-item list-group-item-action">
//   Dapibus ac facilisis in
//   <button className="btn btn-outline-success"> Ongoing </button>
// </span>
