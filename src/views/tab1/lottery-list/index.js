import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    Image

} from 'react-native';

import { NoticeBar, Icon,WhiteSpace } from 'antd-mobile';

import EachLottery from './each-lottery'


export default class LotteryList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const navigate = this.props.navigation;
        return (
            <View style={styles.container}>
                <WhiteSpace size="lg" />

                <EachLottery navigation={navigate}
                idname='Shuangseqiu'
                name='双色球'
                ></EachLottery>

                <EachLottery navigation={navigate}
                 idname='Pl3'
                 name='排列三'
                ></EachLottery>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        // height: 90,
        // paddingBottom: 100
    },


});
