/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';
import *as WeChat from 'react-native-wechat'

// import Main from './src/views/tab1/route'
// import Main from './src/views/index'
import Main from './src/views/route'
// import Main from './src/views/demo/flux/i4'
// import Main from './src/views/demo/router-native-stack/t1'
// import Main from './src/views/demo/navigation/index'
// import Main from './src/views/demo/tabBarScreens/App'



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiVersion: 'waiting...',
            wxAppInstallUrl: 'waiting...',
            isWXAppSupportApi: 'waiting...',
            isWXAppInstalled: 'waiting...',
        };
    }
    async componentDidMount() {
        try {
            console.log('1');
            await WeChat.registerApp('wx6774c5df40c71cac');
            console.log('2');
            console.log('3');
            this.setState({
                apiVersion: await WeChat.getApiVersion(),
                wxAppInstallUrl: await WeChat.getWXAppInstallUrl(),
                isWXAppSupportApi: await WeChat.isWXAppSupportApi(),
                isWXAppInstalled: await WeChat.isWXAppInstalled()
            });
            console.log(this.state);
        } catch (e) {
            console.error(e);
        }
        console.log(WeChat);

    }
    render() {
        return (
            <View style={styles.container}>
                <Text>api版本：{this.state.apiVersion}</Text>
                <Text>微信注册url：{this.state.wxAppInstallUrl}</Text>
                <Text>是否支持api：{String(this.state.isWXAppSupportApi)}</Text>
                <Text>是否安装微信：{String(this.state.isWXAppInstalled)}</Text>
                <TouchableOpacity onPress={this._openWXApp}>
                    <Text>打开微信</Text>
                </TouchableOpacity>
            </View>
        );
    }
    async _openWXApp() {
        await WeChat.openWXApp();
    }



}

const styles = StyleSheet.create({


});
