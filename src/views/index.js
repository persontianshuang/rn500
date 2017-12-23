import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
} from 'react-native'
import { TabBar } from 'antd-mobile';
import Tab1 from './tab1/route'
import Tab2 from './tab2/index'
import Tab3 from './tab3/index'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Tab1',
        };
    }

    render() {
        return (
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="购彩大厅"
                        key="mainpage"
                        selected={this.state.selectedTab === 'Tab1'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Tab1',
                            });
                        }}
                    >
                        <Tab1/>
                    </TabBar.Item>

                    <TabBar.Item
                        title="开奖公告"
                        key="notice"
                        selected={this.state.selectedTab === 'Tab2'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Tab2',
                            });
                        }}
                    >

                        <Tab2/>
                    </TabBar.Item>

                    <TabBar.Item
                        title="我的彩票"
                        key="me"
                        selected={this.state.selectedTab === 'Tab3'}
                        badge={2}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Tab3',
                            });
                        }}
                    >

                        <Tab3/>
                    </TabBar.Item>


                </TabBar>

        );
    }
}



const styles = StyleSheet.create({

})

