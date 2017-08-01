import React, { Component } from 'react'
import { AppState, View } from 'react-native'
import { Provider } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import store from './store'
import { loadMessages } from './actions/messages/subscribe'
import ChatRoom from './screens/ChatRoom'
import SignUp from './screens/SignUp'
import SignIn from './screens/SignIn'
import styles from './Tutorial.styles'

export default class Tutorial extends Component {
  state = {
    appState: AppState.currentState
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  componentWillMount() {
    AppState.removeEventListener('change', this._handleAppStateChange)
  }

  _handleAppStateChange = (nextAppState) => {
    console.log(nextAppState, this.state)
    if (this.state.appState.match(/inactive|bachground/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
      store.dispatch(loadMessages())
    }
    this.setState({appState: nextAppState})
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="signIn" component={SignIn} title="Sign In" initial={true} />
            <Scene key="signUp" component={SignUp} title="Sign Up" />
            <Scene key="chatRoom" component={ChatRoom} title="Chat Room" />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
