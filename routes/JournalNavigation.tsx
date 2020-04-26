import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import JournalHeader from "components/JournalScreenSpecific/JournalHeader";
import JournalTopTabNavigation from "./JournalTopTabNavigation";

const JournalStack = createStackNavigator();

const JournalNavigation = () => (
  <JournalStack.Navigator
    screenOptions={{
      header: () => <JournalHeader />,
    }}
    initialRouteName="JournalTopTabNav">
    <JournalStack.Screen
      name="JournalTopTabNav"
      component={JournalTopTabNavigation}
    />
  </JournalStack.Navigator>
);

export default JournalNavigation;
