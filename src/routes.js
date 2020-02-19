import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './pages/Home/index';
import Cart from './pages/Cart/index';

import Header from './components/Header/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
    },
  ),
);

export default Routes;
