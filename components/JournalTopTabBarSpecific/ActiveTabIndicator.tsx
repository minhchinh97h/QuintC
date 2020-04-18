import React, { memo, useState, useEffect } from "react"
import {
    View,
    StyleSheet,
    Dimensions,
} from "react-native";
import Animated, { Clock, Easing } from "react-native-reanimated";
import { primaryColors } from "styles";
import { runTiming } from "helpers/Reanimated";

const windowWidth = Dimensions.get("window").width
const duration = 150
const easing = Easing.inOut(Easing.ease)

interface Props {
    activeIndex: number,
}

const ActiveTabIndicator = (props: Props) => {
    const { activeIndex } = props
    const [lastActiveIndex, setLastActivateIndex] = useState(activeIndex)
    const clock = new Clock()
    const calculatePosition = () => windowWidth * lastActiveIndex * 1 / 3
    const calculateDest = () => windowWidth * activeIndex * 1 / 3

    useEffect(() => {
        if (activeIndex !== lastActiveIndex) {
            setLastActivateIndex(activeIndex)
        }
    }, [activeIndex, lastActiveIndex])

    const translateX = runTiming(clock, calculatePosition(), calculateDest(), duration, easing)

    return (
        <Animated.View style={[styles.container, { transform: [{ translateX }], width: windowWidth / 3 }]}>
            <View style={styles.indicator} />
        </Animated.View>
    )
}

export default memo(ActiveTabIndicator)

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },
    indicator: {
        width: 52,
        height: 3,
        borderRadius: 30,
        backgroundColor: primaryColors.prim_1
    }
})