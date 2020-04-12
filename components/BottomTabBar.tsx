import React, { memo, useState, ReactNode } from "react"
import { View, StyleSheet } from "react-native"
import { colorWhite, colorBlack, primaryColors, textIconColors } from "styles"
import { JournalIcon, ProgressIcon, RewardIcon, SettingsIcon } from "icons"
import BottomTabText from "./BottomTabBarSpecific/BottomTabText"
import { TouchableOpacity } from "react-native-gesture-handler"
import i18next from "i18next"
import { useDispatch } from "react-redux";
import { actionCreators } from "store/reducers/SettingsReducer"
import { Languages } from "types/states/SettingsState"

const BottomTabBar = () => {
    const [index, setIndex] = useState(0)

    const chooseTab = (index: number) => {
        setIndex(index)
    }

    return (
        <View style={style.container}>
            <OptionContainer>
                <ButtonContainer tabIndex={0} chooseTab={chooseTab}>
                    <JournalIcon size={20} color={index === 0 ? primaryColors.prim_1 : textIconColors.ti_3} />
                    <View style={style.spacer}></View>
                    <BottomTabText text={"JOURNAL_TAB_TITLE"} color={index === 0 ? primaryColors.prim_1 : textIconColors.ti_3} />
                </ButtonContainer>
            </OptionContainer>
            <OptionContainer>
                <ButtonContainer tabIndex={1} chooseTab={chooseTab}>
                    <ProgressIcon size={20} color={index === 1 ? primaryColors.prim_1 : textIconColors.ti_3} />
                    <View style={style.spacer}></View>
                    <BottomTabText text={"PROGRESS_TAB_TITLE"} color={index === 1 ? primaryColors.prim_1 : textIconColors.ti_3} />
                </ButtonContainer>
            </OptionContainer>
            <OptionContainer>
                <ButtonContainer tabIndex={2} chooseTab={chooseTab}>
                    <RewardIcon size={20} color={index === 2 ? primaryColors.prim_1 : textIconColors.ti_3} />
                    <View style={style.spacer}></View>
                    <BottomTabText text={"REWARD_TAB_TITLE"} color={index === 2 ? primaryColors.prim_1 : textIconColors.ti_3} />
                </ButtonContainer>
            </OptionContainer>
            <OptionContainer>
                <ButtonContainer tabIndex={3} chooseTab={chooseTab}>
                    <SettingsIcon size={20} color={index === 3 ? primaryColors.prim_1 : textIconColors.ti_3} />
                    <View style={style.spacer}></View>
                    <BottomTabText text={"SETTINGS_TAB_TITLE"} color={index === 3 ? primaryColors.prim_1 : textIconColors.ti_3} />
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
    const dispatch = useDispatch()

    const onPress = () => {
        props.chooseTab(props.tabIndex)
        console.log("pressed!")

        if (props.tabIndex === 0) {
            i18next.changeLanguage(Languages.vn)
            dispatch(actionCreators.changeLanguage(Languages.vn))
        }
        else if (props.tabIndex === 1) {
            i18next.changeLanguage(Languages.en)
            dispatch(actionCreators.changeLanguage(Languages.en))
        }
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