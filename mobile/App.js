import React from 'react';
import DatabaseInit from './src/database/db-init';
import Home from './src/home/home.page';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    new DatabaseInit
    console.log("initialize database")
  }


  render() {
    return (
      <Home />
    );
  }
}