import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { List } from 'antd-mobile';


const Item = List.Item;
const Brief = Item.Brief;

export default class NoticeList extends Component {
    // constructor() {
    // }
    render() {
        return (
            <View>
                <List renderHeader={() => '列表页'}>
                    <Item arrow="horizontal" multipleLine onClick={() => {}}>
                        双色球 <Brief>subtitle</Brief>
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}}>
                        大乐透 <Brief>subtitle</Brief>
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}}>
                        3D <Brief>subtitle</Brief>
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}}>
                        11选5 <Brief>subtitle</Brief>
                    </Item>
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({


});
