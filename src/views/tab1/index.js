import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import ImgCarousel from './top/img-carousel'
import LotteryNotice from './top/lottery-notice'
import Bar from './top/bar'
import LotteryList from './lottery-list/index'
import LukeyNumber from './below/lukey-number'
import HotMatch from './below/hot-match'


export default class Tab1 extends Component {
    static navigationOptions = {

        title: "购彩大厅",
        // tabBarVisible: false,
    }
    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props, "props is here");
        return (
            <ScrollView style={styles.container}>
                <ImgCarousel></ImgCarousel>
                <LotteryNotice/>
                <Bar></Bar>
                <LotteryList navigation={navigate}></LotteryList>
                <LukeyNumber/>
                <HotMatch></HotMatch>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

{/*<TouchableHighlight*/}
    {/*onPress={() => navigate("Shuangseqiu")}*/}
    {/*style={styles.button}>*/}
    {/*<Text*/}
        {/*style={styles.buttonText}>双色球</Text>*/}
{/*</TouchableHighlight>*/}






