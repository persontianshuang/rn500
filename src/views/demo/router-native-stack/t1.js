import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Stack from 'react-router-native-stack';

function Home({ history }) {
    return (
        <View style={styles.screen}>
            <Text>Home Page</Text>

            <Button title="Pizza Page" onPress={() => history.push('/page/pizza')} />

            <Button title="Taco Page" onPress={() => history.push('/page/taco')} />

            <Button title="Hamburger Page" onPress={() => history.push('/page/hamburger')} />
        </View>
    );
}

function Page({ history, match }) {
    return (
        <View style={styles.screen}>
            <Text>You are on a {match.params.name} Page!</Text>

            <Button title="Go Back" color="red" onPress={() => history.goBack()} />

            <Button title="Pizza Page" onPress={() => history.push('/page/pizza')} />

            <Button title="Taco Page" onPress={() => history.push('/page/taco')} />

            <Button title="Hamburger Page" onPress={() => history.push('/page/hamburger')} />
        </View>
    );
}

export default class Main extends Component {
    render() {
        return (
            <NativeRouter>
                <Stack>
                    <Route exact path="/" component={Home} />
                    <Route path="/page/:name" component={Page} />
                </Stack>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
