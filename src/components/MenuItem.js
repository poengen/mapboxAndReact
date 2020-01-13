import React from 'react';

class MenuItem extends React.Component {
  render() {
    return (
      <div>
        <div
          className="link item"
          onClick={this.props.onClick}
        >
          {this.props.itemName}
        </div>
      </div>
    );
  }
}

export default MenuItem;
