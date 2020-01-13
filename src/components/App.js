import React from 'react';
import Map from './Map';
import MenuList from './MenuList';
// import strava from '../api/strava';

class App extends React.Component {
  state = {
    location: 'B',
    athleteName: 'getAthlete',
    point: false,
    route: false,
  };

  handleLocationChange = (location) => {
    this.setState({ location: location });
  };

  onGetAthlete = async () => {
    // const response = await strava.get('/athlete', {});
    // this.setState({ athleteName: response.data.firstname });
    this.setState({ athleteName: 'Pål Oskar (Mock)' });
    // console.log(response);
  };

  onGetRoute = async () => {
    this.state.route
      ? alert('route already plotted.')
      : this.setState({ route: true });
  };

  onGetPoint = async () => {
    this.state.point
      ? alert('point already plotted.')
      : this.setState({ point: true });
  };

  render() {
    return (
      <div>
        <MenuList
          onLocationChange={this.handleLocationChange}
          athlete={this.state.athleteName}
          onGetAthlete={this.onGetAthlete}
          onGetRoute={this.onGetRoute}
          onGetPoint={this.onGetPoint}
        />
        <Map
          location={this.state.location}
          point={this.state.point}
          route={this.state.route}
        />
      </div>
    );
  }
}

export default App;
