import React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import JournalScreen from "screens/journal/JournalScreen";
import { Dimensions } from "react-native";
import JournalTopTabBar from "components/JournalTopTabBar";

const TopTab = createMaterialTopTabNavigator()

const JournalTopTabNavigation = () => (
    <TopTab.Navigator
        swipeEnabled={false}
        initialLayout={{ width: Dimensions.get("window").width }}
        tabBar={() => <JournalTopTabBar />}
    >
        <TopTab.Screen options={{ tabBarLabel: "Day" }} name="JournalDayTab" component={JournalScreen} />
        <TopTab.Screen options={{ tabBarLabel: "Week" }} name="JournalWeekTab" component={JournalScreen} />
        <TopTab.Screen options={{ tabBarLabel: "Month" }} name="JournalMonthTab" component={JournalScreen} />
    </TopTab.Navigator >
)

export default JournalTopTabNavigation