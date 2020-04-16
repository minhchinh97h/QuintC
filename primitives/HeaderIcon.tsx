import React, { memo, ReactNode } from "react"
import { StyleProp, StyleSheet, TouchableOpacity } from "react-native"
interface Props {
    style?: StyleProp<any>,
    children?: ReactNode,
    onPress: Function
}

const HeaderIcon = (props: Props) => {
    const onPress = () => {
        props.onPress()
    }

    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...props.style }}>
            {props.children}
        </TouchableOpacity>
    )
}

export default memo(HeaderIcon)

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 40
    }
})