import React from 'react';

import { StackNavigator } from 'react-navigation';
import Tab1 from './index';
import Shuangseqiu from '../../components/lottery-dtails/ball/shuangseqiu'
import Pl3 from '../../components/lottery-dtails/ball/pl3'
import Pl5 from '../../components/lottery-dtails/ball/pl5'

const Main1 = StackNavigator({
    ScreenOne: { screen: Tab1},
    Shuangseqiu: { screen: Shuangseqiu},
    Pl3: { screen: Pl3},
    Pl5: { screen: Pl5},
},
{
    // headerMode: 'none',
        navigationOptions: {
    // headerVisible: false,
}
}
)



export default Main1;
