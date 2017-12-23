import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import Tab1 from './tab1/index'
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

            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Tab1'}
                    title="Home"

                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'Tab1' })}>
                    <Tab1/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Tab2'}
                    title="Profile"
                    onPress={() => this.setState({ selectedTab: 'Tab2' })}>
                    <Tab2/>
                </TabNavigator.Item>
            </TabNavigator>



        );
    }
}



const styles = StyleSheet.create({

})

