import Routes from './Routes';
import React, { Component } from 'react'
import { Provider } from "react-redux"
import { configureStore } from "./shared/redux/store";
export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Routes {...this.props} />
      </Provider>
    )
  }
}
