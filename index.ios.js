/**
 * @flow
 */
import React, {
  AppRegistry,
} from 'react-native';

import Login from './components/login';

const challengr = () => <Login/>;

AppRegistry.registerComponent('challengr', () => challengr);
