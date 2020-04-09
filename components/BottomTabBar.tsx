import React, { memo, ReactChildren, useState, ReactNode } from "react"
import { View, StyleSheet, Settings } from "react-native"
import { colorWhite, colorBlack, primaryColors, textIconColors } from "styles"
import { JournalIcon, ProgressIcon, RewardIcon, SettingsIcon } from "icons"
import BottomTabText from "./BottomTabBarSpecific/BottomTabText"
import { TouchableOpacity } from "react-native-gesture-handler"


const BottomTabBar = () => {
    const [index, setIndex] = useState(0)

    return (
        <View style={style.container}>
            <OptionContainer>
                <ButtonContainer tabIndex={0} chooseTab={setIndex}>
                    <JournalIcon size={20} color={index === 0 ? primaryColors.prim_1 : textIconColors.ti_3} />
                    <View style={style.spacer}></View>
                    <BottomTabText text={"Journal"} color={index === 0 ? primaryColors.prim_1 : textIconColors.ti_3} />
                </ButtonContainer>
            </OptionContainer>
            <OptionContainer>
                <ButtonContainer tabIndex={1} chooseTab={setIndex}>
                    <ProgressIcon size={20} color={index === 1 ? primaryColors.prim_1 : textIconColors.ti_3} />
                    <View style={style.spacer}></View>
                    <BottomTabText text={"Progress"} color={index === 1 ? primaryColors.prim_1 : textIconColors.ti_3} />
                </ButtonContainer>
            </OptionContainer>
            <OptionContainer>
                <ButtonContainer tabIndex={2} chooseTab={setIndex}>
                    <RewardIcon size={20} color={index === 2 ? primaryColors.prim_1 : textIconColors.ti_3} />
                    <View style={style.spacer}></View>
                    <BottomTabText text={"Reward"} color={index === 2 ? primaryColors.prim_1 : textIconColors.ti_3} />
                </ButtonContainer>
            </OptionContainer>
            <OptionContainer>
                <ButtonContainer tabIndex={3} chooseTab={setIndex}>
                    <SettingsIcon size={20} color={index === 3 ? primaryColors.prim_1 : textIconColors.ti_3} />
                    <View style={style.spacer}></View>
                    <BottomTabText text={"Settings"} color={index === 3 ? primaryColors.prim_1 : textIconColors.ti_3} />
                </ButtonContainer>
            </OptionContainer>
        </View>
    )
}

export default memo(BottomTabBar)



const OptionContainer = (props: any) => {
    return (
        <View style={style.optionContainer}>
            {props.children}
        </View>
    )
}

interface ButtonContainerProps {
    children?: ReactNode,
    tabIndex: number,
    chooseTab: Function
}

const ButtonContainer = (props: ButtonContainerProps) => {
    const onPress = () => {
        props.chooseTab(props.tabIndex)
    }

    return (
        <TouchableOpacity onPress={onPress} style={style.buttonContainer}>
            {props.children}
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 64,
        backgroundColor: colorWhite,
        shadowColor: colorBlack,
        shadowOpacity: 0.04,
        shadowOffset: {
            width: 0,
            height: -1
        },
        shadowRadius: 10,
        elevation: 8,
    },
    optionContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    spacer: {
        height: 5
    }
})