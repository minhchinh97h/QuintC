import React, { memo, useState } from "react"
import { View, StyleSheet } from "react-native";
import TaskTypeBar from "./JournalTopTabBarSpecific/TaskTypeBar";
import { lightBackgroundColor } from "styles";
import ActiveTabIndicator from "./JournalTopTabBarSpecific/ActiveTabIndicator";

interface Props {

}

const JournalTopTabBar = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [lastActiveIndex, setLastActiveIndex] = useState(0)

    const onChooseTaskTypeTab = (index: number) => {
        if (activeIndex !== index) {
            setActiveIndex(index)
            setLastActiveIndex(activeIndex)
        }
    }

    return (
        <View style={styles.container}>
            <ActiveTabIndicator activeIndex={activeIndex} lastActiveIndex={lastActiveIndex} />
            <TaskTypeBar index={0} activeIndex={activeIndex} lastActiveIndex={lastActiveIndex} onPress={onChooseTaskTypeTab} title={"DAY_TASK_TYPE_BAR"} />
            <TaskTypeBar index={1} activeIndex={activeIndex} lastActiveIndex={lastActiveIndex} onPress={onChooseTaskTypeTab} title={"WEEK_TASK_TYPE_BAR"} />
            <TaskTypeBar index={2} activeIndex={activeIndex} lastActiveIndex={lastActiveIndex} onPress={onChooseTaskTypeTab} title={"MONTH_TASK_TYPE_BAR"} />
        </View>
    )
}

export default memo(JournalTopTabBar)

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "row",
        paddingVertical: 15,
        backgroundColor: lightBackgroundColor
    }
})