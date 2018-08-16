import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import List from './components/List'
import Project from './components/Project'
import { Note } from './components/Note'
import { store } from './redux/store'

const RootStack = createStackNavigator({
  List: {
    screen: List
  },
  Project: {
    screen: Project
  },
  Note: {
    screen: Note
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    )
  }
}