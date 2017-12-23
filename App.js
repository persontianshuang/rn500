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


// import Main from './src/views/tab1/route'
// import Main from './src/views/index'
import Main from './src/views/route'
// import Main from './src/views/demo/flux/i4'
// import Main from './src/views/demo/router-native-stack/t1'
// import Main from './src/views/demo/navigation/index'
// import Main from './src/views/demo/tabBarScreens/App'



export default class App extends Component {

    render() {
        return (

               <Main/>

        );
    }




}

const styles = StyleSheet.create({


});
