import React, { memo, ReactNode } from "react"
import { Text, StyleProp, TextStyle } from "react-native"
import { useSelector } from "react-redux";
import { getLanguage } from "selectors/SettingsSelector";
import { translate } from "helpers/translate";

interface Props {
    text: string,
    style?: StyleProp<TextStyle>,
    children?: ReactNode
}

const TranslateText = (props: Props) => {
    const language = useSelector(getLanguage)

    return (
        <Text style={props.style}>
            {translate(props.text)}
        </Text>
    )
}

export default memo(TranslateText)