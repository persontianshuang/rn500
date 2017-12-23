import React from 'react';
import { TabNavigator } from 'react-navigation';

import Main1 from './tab1/route';
import Tab2 from './tab2/index';
import Tab3 from './tab3/index';
import Tab4 from './tab4/index';

const Main = TabNavigator({
  //  购彩大厅
    购彩大厅: { screen: Main1 },
  //  开奖公告
    开奖公告: { screen: Tab2 },
  //  发现
    发现: { screen: Tab3 },
  //  我的账户
    我的账户: { screen: Tab4 },


}, {
  tabBarOptions: { 
    activeTintColor: '#7567B1',
    labelStyle: {
      fontSize: 16,
      fontWeight: '600'
    }
  }
});

export default Main;
