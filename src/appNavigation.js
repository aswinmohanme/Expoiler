import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import TestComponentScreen from './screens/testComponentScreen';

// Use StackNavigator by Default
const AppNavigation = StackNavigator({
    TestComponentScreen: {screen: TestComponentScreen}
}, {
    navigationOptions:{
        header: null,
    }
});

export default AppNavigation;