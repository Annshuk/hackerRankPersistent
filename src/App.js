import React, { Component } from 'react';
import API from './services/dateAPI';
import DateButton from './components/DateButton';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: '',
      isLoaded: false
    };
  }

  handleButtonClick = () => {
    API.getAPIResponse().then((res) => {
      if (res) {
        this.setState({ apiResponse: res.data, isLoaded: true })
      }
      return false;
    });
  }

  render() {
    const { apiResponse, isLoaded } = this.state;
    let data = ''
    if (isLoaded) {
      data = apiResponse
    }
    return (
      <div>
        <center><h1>Date API</h1></center>
        <center><DateButton handleDateClick={this.handleButtonClick} ></DateButton></center>
        <DateDisplay dateDisplay={data}></DateDisplay>
      </div>
    );
  }
}


export default App;
