import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabsNavigation from './BottomTabsNavigation';

const Drawer = createStackNavigator()

const RootNavigation = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="BottomTabs" headerMode="none">
      <Drawer.Screen name="BottomTabs" component={BottomTabsNavigation} />

    </Drawer.Navigator>
  </NavigationContainer>
)

export default RootNavigation