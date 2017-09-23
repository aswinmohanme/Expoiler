import React, { Component } from 'react';
import { Text } from 'react-native';
import { inject } from 'mobx-react';

@inject('rootStore')
class TestComponentScreen extends Component {
    constructor(props){
        super(props);

        this.rootStore = this.props.rootStore;
    }
    render() {
        return (
            <Text>{this.rootStore.testVar}</Text>
        );
    }
}

export default TestComponentScreen;