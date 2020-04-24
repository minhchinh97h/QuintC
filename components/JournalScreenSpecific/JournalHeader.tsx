import React, {memo} from "react";
import {StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";
import SpaceBetweenContainer from "primitives/SpaceBetweenContainer";
import HeaderIcon from "primitives/HeaderIcon";
import {HamburgerIcon, EllipsisIcon} from "icons";
import HeaderTitle from "primitives/HeaderTitle";
import {textIconColors, lightBackgroundColor} from "styles";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";
import {getCalendarHeaderTitle} from "selectors/JournalScreenSelector";
import {actionCreators} from "store/reducers/JournalScreenReducer";

const JournalHeader = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const calendarHeaderTitle =
    useSelector(getCalendarHeaderTitle) || "JOURNAL_TAB_TITLE";
  const onPressDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const onPressOptions = () => {};

  const onPressHeaderTitle = () => {
    dispatch(actionCreators.updatePressHeaderTitleTracker());
  };

  return (
    <SafeAreaView>
      <SpaceBetweenContainer style={styles.spaceBetweenContainer}>
        <HeaderIcon onPress={onPressDrawer}>
          <HamburgerIcon size={20} color={textIconColors.ti_3} />
        </HeaderIcon>

        <TouchableOpacity onPress={onPressHeaderTitle}>
          <HeaderTitle text={calendarHeaderTitle} />
        </TouchableOpacity>

        <HeaderIcon onPress={onPressOptions}>
          <EllipsisIcon size={20} color={textIconColors.ti_3} />
        </HeaderIcon>
      </SpaceBetweenContainer>
    </SafeAreaView>
  );
};

export default memo(JournalHeader);

const styles = StyleSheet.create({
  spaceBetweenContainer: {
    backgroundColor: lightBackgroundColor,
  },
});
