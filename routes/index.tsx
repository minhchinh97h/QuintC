import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabsNavigation from './BottomTabsNavigation';

const Drawer = createDrawerNavigator()

const RootNavigation = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="BottomTabs" drawerStyle={{ width: "80%" }}>
      <Drawer.Screen name="BottomTabs" component={BottomTabsNavigation} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default RootNavigation