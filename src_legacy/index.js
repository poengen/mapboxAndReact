import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import Sidebar from './Sidebar';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentLocation: 'B' };
  }

  handleClick() {
    this.setState({ currentLocation: 'T' });
    console.log('Handle Click');
  }

  render() {
    return (
      <div>
        <Map location={this.state.currentLocation} />
        <Sidebar location={this.state.currentLocation} onClick={() => this.handleClick()} />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
