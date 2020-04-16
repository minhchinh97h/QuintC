import React, { memo, useState, useEffect } from "react"
import { View, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { primaryColors, textIconColors } from "styles";

const windowWidth = Dimensions.get("window").width

interface Props {
    activeIndex: number,
    lastActiveIndex: number
}

const ActiveTabIndicator = (props: Props) => {
    const { activeIndex, lastActiveIndex } = props
    const [translateX, setTranslateX] = useState(0)

    useEffect(() => {
        if (activeIndex !== lastActiveIndex) {
            setTranslateX(windowWidth * ((activeIndex) / 3))
        }

    }, [activeIndex])

    return (
        <View style={{ ...styles.container, ...{ transform: [{ translateX }] } }}>
            <View style={styles.indicator} />
        </View>
    )
}

export default memo(ActiveTabIndicator)

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: textIconColors.ti_3
    },
    indicator: {
        width: 52,
        height: 3,
        borderRadius: 30,
        backgroundColor: primaryColors.prim_1
    }
})