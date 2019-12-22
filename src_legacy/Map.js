import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoicG9lbmdlbiIsImEiOiJjazQyaHBpbTgwMGhpM2txaXFjaGkxZHZhIn0.jNn4DBU-6Og93-B_NifxKA';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      lng: 10.4,
      lat: 19.42,
      zoom: 10,
      map: null,
    };
  }

  componentDidUpdate() {
    if (this.state.location === 'B') {
      console.log('Bøstølen');
      this.state.map.setCenter([ 7.4, 62.42 ]);
      this.state.map.setZoom(10);
    }
    if (this.state.location === 'T') {
      console.log('Torshov');
      this.state.map.setCenter([ 10.757933, 59.911491 ]);
      this.state.map.setZoom(11.6);
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
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Map;
