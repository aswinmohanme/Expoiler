import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

// Use StackNavigator by Default
const AppNavigation = StackNavigator({

}, {
    navigationOptions:{
        header: null,
    }
});

export default AppNavigation;