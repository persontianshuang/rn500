import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';//引入包

import ScarletScreen from './ScarletScreen'; //引入文件
import GrayScreen from './GrayScreen';//引入文件

const Main = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="scarlet"
                       component={ScarletScreen}
                       title="Scarlet"
                       initial
                       backTitle=""
                       rightTitle="dfm"
                />
                <Scene
                    key="gray"
                    component={GrayScreen}
                    title="Gray"
                    rightTitle="dfmdsfs"
                />
            </Scene>
        </Router>
    );
}

export default Main;
