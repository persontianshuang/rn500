import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Tab3 extends Component {
    static navigationOptions = {
        title: "发现",
        // tabBarVisible: false,
    }
    render() {
        return (
            <View>
                <Text>我的彩票</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({


});
