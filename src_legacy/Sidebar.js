import React from 'react';

const Sidebar = (props) => {
  return (
    <div>
      <div className="ui sidebar visible inverted vertical menu">
        <div className="ui basic blue button" onClick={props.onClick}>
          {props.location}
        </div>
      </div>
      <div className="pusher" />
    </div>
  );
};

export default Sidebar;
