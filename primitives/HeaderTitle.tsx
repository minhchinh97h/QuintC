import React, { memo, ReactNode } from "react"
import { StyleProp, TextStyle, StyleSheet, ViewStyle } from "react-native"
import { translate } from "helpers/Translate";
import TranslateText from "./TranslateText";
import { mediumFont } from "styles";

interface Props {
    text: string,
    style?: StyleProp<ViewStyle>,
    children?: ReactNode
}

const HeaderTitle = (props: Props) => {
    return (
        <TranslateText text={props.text} style={{ ...styles.headerText, ...props.style }}>
            {translate(props.text)}
        </TranslateText >
    )
}

export default memo(HeaderTitle)

const styles = StyleSheet.create({
    headerText: {
        color: "#2C2C2C",
        lineHeight: 31,
        letterSpacing: -0.02,
        fontFamily: mediumFont,
        fontSize: 26
    }
})