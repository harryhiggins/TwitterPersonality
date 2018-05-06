import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Chart from './components/Chart';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getPersonalityProfile = this.getPersonalityProfile.bind(this);
    this.state = {
      value: '',
      loading: false,
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({loading: true});
    this.getPersonalityProfile();
    event.preventDefault();
  }

  getPersonalityProfile() {
    return fetch(`/api/twitter/${this.state.value}`)
    .then(response => response.json())
    .then(data => this.setState({
      profile: data,
      loading: false,
    }))
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <Header handleSubmit={(event) => { this.handleSubmit(event) }} handleChange={(event) => { this.handleChange(event) }} value={this.state.value}/>
        <div className="container">
        {this.state.loading && <h3>Loading...</h3>}
        {this.state.profile && <Chart profile={this.state.profile} />}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
