import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class LukeyNumber extends Component {
    // constructor() {
    // }
    render() {
        return (
            <View style={styles.container}>
                <WhiteSpace size="lg" />
                <Text>幸运号码</Text>
                <Button type="warning">投注2元</Button><WhiteSpace />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
