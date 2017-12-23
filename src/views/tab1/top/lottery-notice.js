import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { NoticeBar, Icon,WhiteSpace } from 'antd-mobile';

export default class LotteryNotice extends Component {
    // constructor() {
    // }
    render() {
        return (
            <View>

                    <NoticeBar marqueeProps={{ loop: true ,style: styles.notice}}>
                        恭喜【随波逐流】 投注大乐透喜获500元奖金
                        恭喜【千帆竞发】 投注双色球喜获900元奖金
                    </NoticeBar>
                    <WhiteSpace size="lg" />

                {/*<Text>开奖通知</Text>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    notice:{
        // backgroundColor: '#fff'
    }

});
