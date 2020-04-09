import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import JournalScreen from 'screens/journal/JournalScreen';
import { colorWhite, primaryColors, textIconColors } from 'styles';
import { JournalIcon } from 'icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import BottomTabBar from 'components/BottomTabBar';

const BottomTabs = createBottomTabNavigator()

const BottomTabsNavigation = () => (
    <BottomTabs.Navigator tabBar={() => <BottomTabBar />}>
        <BottomTabs.Screen name="JournalScreen" component={JournalScreen} />
        <BottomTabs.Screen name="ProgressScreen" component={JournalScreen} />
        <BottomTabs.Screen name="RewardScreen" component={JournalScreen} />
        <BottomTabs.Screen name="SettingsScreen" component={JournalScreen} />
    </BottomTabs.Navigator>
)

export default BottomTabsNavigation