import React from "react";
import ListItem from "./ListItem";

class Todotile extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="list-group">
          <span className="list-group-item active todoHead">
            {this.props.lable}
          </span>

          {this.props.listItems.map((value, index) => {
            if (this.props.lable === value.lable) {
              return <ListItem key={index} value={value} />;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Todotile;
