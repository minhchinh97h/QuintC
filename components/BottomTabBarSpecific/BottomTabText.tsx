import React, { memo } from "react"
import { Text, StyleSheet } from "react-native"
import { translate } from "helpers/translate"
import { lightFont, textIconColors } from "styles"

interface Props {
    text: string,
    color: string
}

const BottomTabText = (props: Props) => {
    return (
        <Text style={{ ...style.text, color: props.color }}>{translate(props.text)}</Text>
    )
}

export default memo(BottomTabText)

const style = StyleSheet.create({
    text: {
        fontFamily: lightFont,
        fontSize: 12,
        lineHeight: 15,
        textAlign: "center",
        letterSpacing: -0.02,
        color: textIconColors.ti_3
    }
})