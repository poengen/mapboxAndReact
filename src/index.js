import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { loadMountains, myFunction } from './map.js';

mapboxgl.accessToken = 'pk.eyJ1IjoicG9lbmdlbiIsImEiOiJjazBiZHQyY3EwcXl5M2lwaXhlMXc4a29zIn0.QSXSFFJRHwXTsyYLYFIZ5w';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 7.4,
      lat: 62.42,
      zoom: 10,
      location1: 'Bøstølen',
      location2: 'Torshov',
      map: null,
    };
  }
  toHome() {
    this.state.map.setCenter([ 10.757933, 59.911491 ]);
    this.state.map.setZoom(11.6);
  }
  toCabin() {
    this.state.map.setCenter([ 7.4, 62.42 ]);
    this.state.map.setZoom(10);
  }
  afterMount() {
    this.state.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/outdoors-v11', // 'mapbox://styles/mapbox/streets-v11',
      center: [ this.state.lng, this.state.lat ],
      zoom: this.state.zoom,
    });
    loadMountains(this.state.map);
    this.state.map.on('move', () => {
      this.setState({
        lng: this.state.map.getCenter().lng.toFixed(4),
        lat: this.state.map.getCenter().lat.toFixed(4),
        zoom: this.state.map.getZoom().toFixed(2),
      });
    });
  }
  componentDidMount() {
    this.afterMount();
  }
  // this.setState({ lng: 10.757933, lat: 59.911491, zoom: 11.6 });
  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
          </div>
        </div>
        <div className="menu">
          <button onClick={() => this.toCabin()}>{this.state.location1}</button>
          <button onClick={() => this.toHome()}>{this.state.location2}</button>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
