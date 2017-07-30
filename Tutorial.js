import React, { Component } from 'react';
import { View } from 'react-native';

import SignUp from './screens/SignUp';
import styles from './Tutorial.styles';

export default class Tutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}
