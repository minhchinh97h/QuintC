import React, {memo} from "react";
import {View, StyleSheet} from "react-native";
import WeekHorizontalCalendar from "components/JournalScreenSpecific/WeekHorizontalCalendar";

const WeekTabScreen = () => {
  return (
    <View style={styles.container}>
      <WeekHorizontalCalendar />
    </View>
  );
};

export default memo(WeekTabScreen);

const styles = StyleSheet.create({
  container: {},
});
