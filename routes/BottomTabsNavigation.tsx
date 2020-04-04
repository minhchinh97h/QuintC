import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JournalScreen from 'screens/journal/JournalScreen';

const BottomTabs = createMaterialBottomTabNavigator()

const BottomTabsNavigation = () => (
    <BottomTabs.Navigator activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}>
        <BottomTabs.Screen options={{
            title: "Journal"
        }} name="JournalScreen" component={JournalScreen} />
        <BottomTabs.Screen options={{
            title: "Progress"
        }} name="ProgressScreen" component={JournalScreen} />
        <BottomTabs.Screen options={{
            title: "Progress"
        }} name="RewardScreen" component={JournalScreen} />
        <BottomTabs.Screen options={{
            title: "Progress"
        }} name="SettingsScreen" component={JournalScreen} />
    </BottomTabs.Navigator>
)

export default BottomTabsNavigation