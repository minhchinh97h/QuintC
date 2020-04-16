import React, { memo, ReactNode } from "react"
import { StyleSheet, View, StyleProp } from "react-native"

interface Props {
    style?: StyleProp<any>,
    children?: ReactNode
}

const SpaceBetweenContainer = (props: Props) => {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            {props.children}
        </View>
    )
}

export default memo(SpaceBetweenContainer)

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})