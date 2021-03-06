import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import PersonalForm from './PersonalForm.js';
import LanguageSelector from './LanguageSelector.js';

class App extends Component {
  state = {
    data: null,
    language: 'English'
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  updateLanguage(newLanguage) {
    this.setState({language: newLanguage})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title mt-4">Make your booking, my friend</h1>
          <LanguageSelector {...this.state} updateLanguage={this.updateLanguage.bind(this)}  />
        </header>
        <div className="container-fluid">
          <PersonalForm {...this.state} />
          <p className="App-intro">{this.state.data}</p>
        </div>
      </div>
    );
  }
}

export default App;