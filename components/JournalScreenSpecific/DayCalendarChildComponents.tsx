import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import TranslateText from "primitives/TranslateText";
import {primaryColors, lightFont, textIconColors} from "styles";

interface DayCalendarChildContainerProps {
  dateString: string;
  title: string;
  description: string;
  index: number;
  chooseDate: Function;
  activeIndex: number;
  lastActiveIndex: number;
}

export interface DayHorizontalCalendarArrayProps {
  dateString: string;
  title: string;
  description: string;
}

export class DayCalendarChildContainer extends React.PureComponent<
  DayCalendarChildContainerProps
> {
  shouldComponentUpdate(nextProps: DayCalendarChildContainerProps) {
    return (
      nextProps.activeIndex === this.props.index ||
      nextProps.lastActiveIndex === this.props.index
    );
  }

  onPress = () => {
    this.props.chooseDate(this.props.index);
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.calendarChildContainer}
        onPress={this.onPress}>
        <DayCalendarChildTitle {...this.props} />
        <DayCalendarChildDescription {...this.props} />
      </TouchableOpacity>
    );
  }
}

export class DayCalendarChildTitle extends React.PureComponent<
  DayCalendarChildContainerProps
> {
  returnTitleStyle = () => {
    if (this.props.activeIndex === this.props.index) {
      return {...styles.title, color: primaryColors.prim_1};
    }
    return styles.title;
  };

  render() {
    const titleStyle = this.returnTitleStyle();
    return (
      <View style={styles.titleContainer}>
        <TranslateText text={this.props.title} style={titleStyle} />
      </View>
    );
  }
}

export class DayCalendarChildDescription extends React.PureComponent<
  DayCalendarChildContainerProps
> {
  returnDescriptionContainerStyle = () => {
    if (this.props.index === this.props.activeIndex) {
      return {
        ...styles.descriptionContainer,
        backgroundColor: primaryColors.prim_3,
      };
    }
    return styles.descriptionContainer;
  };

  returnDescriptionStyle = () => {
    if (this.props.index === this.props.activeIndex) {
      return {
        ...styles.description,
        color: primaryColors.prim_1,
      };
    }
    return styles.description;
  };

  render() {
    const descriptionContainerStyle = this.returnDescriptionContainerStyle();
    const descriptionStyle = this.returnDescriptionStyle();

    return (
      <View style={descriptionContainerStyle}>
        <TranslateText text={this.props.description} style={descriptionStyle} />
      </View>
    );
  }
}

export const DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH = 45 + 14;

export const DayHorizontalCalendarSeparator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  separator: {
    width: 14,
  },

  calendarChildContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 45,
  },

  titleContainer: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: lightFont,
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: -0.02,
    color: textIconColors.ti_2,
  },

  descriptionContainer: {
    marginTop: 2,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    overflow: "hidden",
  },

  description: {
    fontFamily: lightFont,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.02,
    color: textIconColors.ti_3,
  },
});
