import React from 'react';
import mapboxgl from 'mapbox-gl';
import * as hytta from '../data/hytta_point.js';
import * as torshovparken from '../data/torshovparken_route.js';

mapboxgl.accessToken =
  'pk.eyJ1IjoicG9lbmdlbiIsImEiOiJjazQyaHBpbTgwMGhpM2txaXFjaGkxZHZhIn0.jNn4DBU-6Og93-B_NifxKA';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      lng: 7.4,
      lat: 62.42,
      zoom: 10,
      map: null,
    };
  }

  componentDidUpdate() {
    if (this.props.location === 'B') {
      this.state.map.setCenter([ 7.4, 62.42 ]);
      this.state.map.setZoom(10);
    }
    if (this.props.location === 'T') {
      this.state.map.setCenter([ 10.757933, 59.911491 ]);
      this.state.map.setZoom(11.6);
    }
    if (this.props.point) {
      this.state.map.addLayer(hytta);
    }
    if (this.props.route) {
      this.state.map.addLayer(torshovparken);
    }
  }

  componentDidMount() {
    this.setState({
      map: new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ this.state.lng, this.state.lat ],
        zoom: this.state.zoom,
      }),
    });
  }

  render() {
    return (
      <div>
        <div
          ref={(el) => (this.mapContainer = el)}
          className="mapContainer"
        />
      </div>
    );
  }
}

export default Map;
