import React from 'react';

import { StackNavigator } from 'react-navigation';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const Main = StackNavigator({
    ScreenOne: { screen: ScreenOne},
    ScreenTwo: { screen: ScreenTwo},
    ScreenThree: {screen: ScreenThree}
})

export default Main;
