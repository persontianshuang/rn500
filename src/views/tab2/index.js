import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import NoticeList from './list/index'


export default class Tab2 extends Component {
    static navigationOptions = {
        title: "开奖公告",
        // tabBarVisible: false,
    }
    render() {
        return (
            <View>
                <Text>开奖公告</Text>
                <NoticeList></NoticeList>
            </View>
        );
    }
}

const styles = StyleSheet.create({


});
