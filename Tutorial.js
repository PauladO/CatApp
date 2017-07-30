import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import store from './store'
import SignUp from './screens/SignUp'
import SignIn from './screens/SignIn'
import styles from './Tutorial.styles'

export default class Tutorial extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="signIn" component={SignIn} title="Sign In" initial={true} />
            <Scene key="signUp" component={SignUp} title="Sign Up" />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
