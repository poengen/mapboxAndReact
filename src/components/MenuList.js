import React from 'react';
import MenuItem from './MenuItem';

class MenuList extends React.Component {
  render() {
    return (
      <div className="ui vertical inverted menu">
        <MenuItem
          itemName="Bøstølen"
          onClick={() => {
            this.props.onLocationChange('B');
          }}
        />
        <MenuItem
          itemName="Torshov"
          onClick={() => {
            this.props.onLocationChange('T');
          }}
        />
        <MenuItem
          itemName={this.props.athlete}
          onClick={() => {
            this.props.onGetAthlete();
          }}
        />
        <MenuItem
          itemName="Get Route"
          onClick={() => {
            this.props.onGetRoute();
          }}
        />
        <MenuItem
          itemName="Get Point"
          onClick={() => {
            this.props.onGetPoint();
          }}
        />
      </div>
    );
  }
}

export default MenuList;

/* Other menu options

// Show sidebar position
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
          </div>
        </div>

// Menu option 1
      <div>
        <div class="ui left visible inverted vertical menu sidebar">
          <a class="item">Bøstølen</a>
          <a class="item">Torshov</a>
        </div>
        <div class="pusher">My site actual content</div>
      </div>

// Menu option 2
      <div>
        <div class="ui vertical menu">
          <div class="link item">Bøstølen</div>
          <div class="link item">Torshov</div>
        </div>
        <div class="pusher">actual content</div>
      </div>

// Menu option 3
      <div>
        <div class="ui left visible inverted vertical menu sidebar">
          <select class="ui dropdown">
            <option value="">Location</option>
            <option value="1">Bøstølen</option>
            <option value="0">Torshov</option>
          </select>
        </div>
        <div class="pusher">My site actual content</div>
      </div>
*/
