import React, { memo, ReactChildren } from "react"
import { useTranslation } from "react-i18next"
import { Text, StyleProp, TextStyle } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { getLanguage } from "selectors/SettingsSelector";
import { translate } from "helpers/translate";

interface Props {
    text: string,
    style?: StyleProp<TextStyle>,
    children?: ReactChildren
}

const TranslateText = (props: Props) => {
    const language = useSelector(getLanguage)

    return (
        <Text style={props.style}>
            {translate(props.text)}
        </Text>
    )
}

export default TranslateText