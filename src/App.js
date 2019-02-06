import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Headers';
import Form from './components/Form';
import Pollution from './components/Pollution';

const API_KEY = "d9e6fd75680b649a10400865ff5131c4dcc21857"

class App extends Component {
  state = {
    city: undefined,
    pollution: undefined,
  }

  getPollution = async (e) => {
    e.preventDefault();
    const city =  e.target.elements.city.value;
    const api_call = await fetch(`http://api.waqi.info/feed/${city}/?token=${API_KEY}`)
    const data = await api_call.json();
    try {
    this.setState({
      city: data.data.city.name,
      pollution: Number(data.data.aqi)
    })
  } catch (city) {
    this.setState({
      city: "Unknown City",
      pollution: "Unkown AQI"
    })
  }
  }


  render() {
    return (
      <div className="App">
      <div className='header-container'>
        <Header className='header-container' />
        </div>
        <div className='info-container'>
        <Form getPollution={this.getPollution} />
        <Pollution city={this.state.city} pollution={this.state.pollution} />
      </div>
      </div>
    );
  }
}

export default App;
