import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Table from './components/containers/table.container';

export default class App extends Component {
  render(){
    return(
      <Provider store={this.props.store}>
        <Table />
      </Provider>
    )
  }
}
