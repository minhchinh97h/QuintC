import React, { memo } from "react"
import { Text, StyleSheet } from "react-native"
import { translate } from "helpers/translate"
import { lightFont, textIconColors } from "styles"
import { useTranslation } from "react-i18next"
import TranslateText from "primitives/TranslateText"

interface Props {
    text: string,
    color: string
}

const BottomTabText = (props: Props) => {
    return (
        <TranslateText text={props.text} style={{ ...style.text, color: props.color }} />
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