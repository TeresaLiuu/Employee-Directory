import React from 'react';
import './App.css';
// import API from './utils/API';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Container from './components/Container'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      lastSort: '',
      search: '',
      startDate: '1980-01-01',
      endDate: '1990-01-01',
    };
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Container />
      </div>
    );
  }

}

export default App;
