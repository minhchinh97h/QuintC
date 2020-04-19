import React, {memo} from "react";
import {View, StyleSheet} from "react-native";
import DayHorizontalCalendar from "components/JournalScreenSpecific/DayHorizontalCalendar";

const DayTabScreen = () => {
  return (
    <View style={styles.container}>
      <DayHorizontalCalendar />
    </View>
  );
};

export default memo(DayTabScreen);

const styles = StyleSheet.create({
  container: {},
});
