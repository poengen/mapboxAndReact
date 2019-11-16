import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { loadMountains } from './map.js';

mapboxgl.accessToken = 'pk.eyJ1IjoicG9lbmdlbiIsImEiOiJjazBiZHQyY3EwcXl5M2lwaXhlMXc4a29zIn0.QSXSFFJRHwXTsyYLYFIZ5w';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 7.4,
      lat: 62.42,
      zoom: 10,
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/outdoors-v11', // 'mapbox://styles/mapbox/streets-v11',
      center: [ this.state.lng, this.state.lat ],
      zoom: this.state.zoom,
    });
    loadMountains(map);
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
