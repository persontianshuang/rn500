import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
} from 'react-native'

import { NativeRouter, Route, Link,Redirect } from 'react-router-native'

const Home = () => (
    <Text style={styles.header}>
        Home
    </Text>
)

const About = () => (
    <Text style={styles.header}>
        About
    </Text>
)

export default class Main extends Component {
    // constructor() {
    // }
    render() {
        return (
            <View>

                <NativeRouter>
                    <View style={styles.container}>
                        <View style={styles.nav}>
                            <Link
                                to="/"
                                underlayColor='#f0f4f7'
                                style={styles.navItem}>
                                <Text>Home</Text>
                            </Link>
                            <Link
                                to="/about"
                                underlayColor='#f0f4f7'
                                style={styles.navItem}>
                                <Text>About</Text>
                            </Link>

                        </View>

                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        {/*<Redirect to='/about' />*/}

                    </View>
                </NativeRouter>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
    header: {
        fontSize: 20,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    subNavItem: {
        padding: 5,
    },
    topic: {
        textAlign: 'center',
        fontSize: 15,
    }
})

