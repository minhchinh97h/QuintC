import React, { memo, useEffect, useState } from "react"
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TranslateText from "primitives/TranslateText";
import { lightFont, primaryColors, textIconColors } from "styles";

const inactiveColor = textIconColors.ti_2
const activeColor = primaryColors.prim_1

interface Props {
    index: number,
    activeIndex: number,
    lastActiveIndex: number,
    title: string,
    onPress: Function
}

const TaskTypeBar = (props: Props) => {
    const { index, activeIndex, lastActiveIndex } = props
    const [textStyle, setTextStyle] = useState(styles.text)

    useEffect(() => {
        if (index === activeIndex) {
            setTextStyle({ ...styles.text, color: activeColor })
        } else if (index === lastActiveIndex) {
            setTextStyle({ ...styles.text, color: inactiveColor })
        }
    }, [activeIndex, lastActiveIndex])

    const onPress = () => {
        props.onPress(index)
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <TranslateText text={props.title} style={textStyle} />
            </TouchableOpacity>
        </View>
    )
}

export default memo(TaskTypeBar)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: lightFont,
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: -0.02,
        color: inactiveColor
    }
})