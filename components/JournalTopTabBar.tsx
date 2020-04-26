import React, {memo, useState, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import TaskTypeBar from "./JournalTopTabBarSpecific/TaskTypeBar";
import {lightBackgroundColor} from "styles";
import ActiveTabIndicator from "./JournalTopTabBarSpecific/ActiveTabIndicator";
import {MaterialTopTabBarProps} from "@react-navigation/material-top-tabs";
import {useDispatch} from "react-redux";
import {actionCreators} from "store/reducers/JournalScreenReducer";
import {TabType} from "types/states/JournalScreenState";
import NewTaskButton from "./JournalScreenSpecific/NewTaskButton";
import NewTaskModal from "./JournalScreenSpecific/NewTaskModalSpecific/NewTaskModal";

interface Props {
  materialTopTabBarProp: MaterialTopTabBarProps;
}

const JournalTopTabBar = (props: Props) => {
  const navNames = ["JournalDayTab", "JournalWeekTab", "JournalMonthTab"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const tabTypes = [TabType.day, TabType.week, TabType.month];

  const onChooseTaskTypeTab = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setLastActiveIndex(activeIndex);
      props.materialTopTabBarProp.navigation.navigate(navNames[index]);
      dispatch(actionCreators.updateCurrentJournalTab(tabTypes[index]));
    }
  };

  useEffect(() => {
    onChooseTaskTypeTab(0);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ActiveTabIndicator activeIndex={activeIndex} />
        <TaskTypeBar
          index={0}
          activeIndex={activeIndex}
          lastActiveIndex={lastActiveIndex}
          onPress={onChooseTaskTypeTab}
          title={"DAY_TASK_TYPE_BAR"}
        />
        <TaskTypeBar
          index={1}
          activeIndex={activeIndex}
          lastActiveIndex={lastActiveIndex}
          onPress={onChooseTaskTypeTab}
          title={"WEEK_TASK_TYPE_BAR"}
        />
        <TaskTypeBar
          index={2}
          activeIndex={activeIndex}
          lastActiveIndex={lastActiveIndex}
          onPress={onChooseTaskTypeTab}
          title={"MONTH_TASK_TYPE_BAR"}
        />
      </View>

      <NewTaskButton />
      <NewTaskModal />
    </>
  );
};

export default memo(JournalTopTabBar);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: lightBackgroundColor,
  },
});
