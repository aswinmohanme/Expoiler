import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';

import AppNavigation from './src/appNavigation';
import RootStore from './src/stores/rootStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider rootStore={RootStore}>
        <AppNavigation />
      </Provider>
    );
  }
}
