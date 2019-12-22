import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';

class Index extends React.Component {
  state = { location: 'B' };

  render() {
    return (
      <div>
        <div className="ui vertical inverted menu">
          <div
            className="link item"
            onClick={() => {
              this.setState({ location: 'B' });
            }}
          >
            Bøstølen
          </div>
          <div
            className="link item"
            onClick={() => {
              this.setState({ location: 'T' });
            }}
          >
            Torshov
          </div>
        </div>
        <div className="pusher">
          <Map location={this.state.location} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector('#app'));

/*

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
