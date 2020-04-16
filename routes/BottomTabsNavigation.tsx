import React from 'react';
import JournalScreen from 'screens/journal/JournalScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import BottomTabBar from 'components/BottomTabBar';
import JournalNavigation from './JournalNavigation';
import ProgressScreen from 'screens/progress/ProgressScreen';

const BottomTabs = createBottomTabNavigator()

const BottomTabsNavigation = () => (
    <BottomTabs.Navigator tabBar={() => <BottomTabBar />}>
        <BottomTabs.Screen name="JournalStack" component={JournalNavigation} />
        <BottomTabs.Screen name="ProgressScreen" component={ProgressScreen} />
        <BottomTabs.Screen name="RewardScreen" component={JournalScreen} />
        <BottomTabs.Screen name="SettingsScreen" component={JournalScreen} />
    </BottomTabs.Navigator>
)

export default BottomTabsNavigation