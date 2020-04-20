import React, {memo} from "react";
import {StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";
import SpaceBetweenContainer from "primitives/SpaceBetweenContainer";
import HeaderIcon from "primitives/HeaderIcon";
import {HamburgerIcon, EllipsisIcon} from "icons";
import HeaderTitle from "primitives/HeaderTitle";
import {textIconColors, lightBackgroundColor} from "styles";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {getCalendarHeaderTitle} from "selectors/JournalScreenSelector";

const JournalHeader = () => {
  const navigation = useNavigation();
  const calendarHeaderTitle =
    useSelector(getCalendarHeaderTitle) || "JOURNAL_TAB_TITLE";
  const onPressDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const onPressOptions = () => {};

  return (
    <SafeAreaView>
      <SpaceBetweenContainer style={styles.spaceBetweenContainer}>
        <HeaderIcon onPress={onPressDrawer}>
          <HamburgerIcon size={20} color={textIconColors.ti_3} />
        </HeaderIcon>

        <TouchableOpacity>
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
