import React from "react"
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import DayTabScreen from "screens/journal/DayTabScreen";
import JournalTopTabBar from "components/JournalTopTabBar";
import WeekTabScreen from "screens/journal/WeekTabScreen";
import MonthTabScreen from "screens/journal/MonthTabScreen";

const TopTab = createMaterialTopTabNavigator()

const JournalTopTabNavigation = () => (
    <TopTab.Navigator
        swipeEnabled={false}
        initialLayout={{ width: Dimensions.get("window").width }}
        tabBar={(props: MaterialTopTabBarProps) => <JournalTopTabBar materialTopTabBarProp={props} />}
    >
        <TopTab.Screen options={{ tabBarLabel: "Day" }} name="JournalDayTab" component={DayTabScreen} />
        <TopTab.Screen options={{ tabBarLabel: "Week" }} name="JournalWeekTab" component={WeekTabScreen} />
        <TopTab.Screen options={{ tabBarLabel: "Month" }} name="JournalMonthTab" component={MonthTabScreen} />
    </TopTab.Navigator >
)

export default JournalTopTabNavigation