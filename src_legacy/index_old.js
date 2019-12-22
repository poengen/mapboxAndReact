import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { loadMountains } from './map.js';

mapboxgl.accessToken =
  'pk.eyJ1IjoicG9lbmdlbiIsImEiOiJjazBiZHQyY3EwcXl5M2lwaXhlMXc4a29zIn0.QSXSFFJRHwXTsyYLYFIZ5w';

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
  lud(map) {
    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ 7.36, 62.4 ],
              },
              properties: {
                title: 'Midt imillå',
                icon: 'harbor',
              },
            },
          ],
        },
      },
      layout: {
        'icon-image': '{icon}-15',
        'text-field': '{title}',
        'text-font': [ 'Open Sans Semibold', 'Arial Unicode MS Bold' ],
        'text-offset': [ 0, 0.6 ],
        'text-anchor': 'top',
      },
    });
  }
  toHome() {
    this.state.map.setCenter([ 10.757933, 59.911491 ]);
    this.state.map.setZoom(11.6);
  }
  toCabin() {
    this.state.map.setCenter([ 7.4, 62.42 ]);
    this.state.map.setZoom(10);
  }
  componentDidMount() {
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
          <button onClick={() => this.lud(this.state.map)}>Load Route</button>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
