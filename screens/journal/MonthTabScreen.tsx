import React, {memo} from "react";
import {View, StyleSheet} from "react-native";
import MonthHorizontalCalendar from "components/JournalScreenSpecific/MonthHorizontalCalendar";

const MonthTabScreen = () => {
  return (
    <View style={styles.container}>
      <MonthHorizontalCalendar />
    </View>
  );
};

export default memo(MonthTabScreen);

const styles = StyleSheet.create({
  container: {},
});
