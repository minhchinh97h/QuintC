import React, { memo, ReactNode } from "react"
import { Text, StyleProp, TextStyle } from "react-native"
import { useSelector } from "react-redux";
import { getLanguage } from "selectors/SettingsSelector";
import { translate } from "helpers/Translate";

interface Props {
    text: string,
    style?: StyleProp<TextStyle>,
    children?: ReactNode
}

const RawText = (props: Props) => {
    const language = useSelector(getLanguage)

    return (
        <Text style={props.style}>
            {props.text}
        </Text>
    )
}

export default memo(RawText)