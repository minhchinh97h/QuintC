import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import TranslateText from "primitives/TranslateText";
import {primaryColors, lightFont, textIconColors} from "styles";

interface WeekCalendarChildContainerProps {
  startWeekDateString: string;
  endWeekDateString: string;
  title: string;
  description: string;
  index: number;
  chooseDate: Function;
  activeIndex: number;
  lastActiveIndex: number;
}

export interface WeekHorizontalCalendarArrayProps {
  startWeekDateString: string;
  endWeekDateString: string;
  title: string;
  description: string;
}

export class WeekCalendarChildContainer extends React.PureComponent<
  WeekCalendarChildContainerProps
> {
  shouldComponentUpdate(nextProps: WeekCalendarChildContainerProps) {
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
        <WeekCalendarChildTitle {...this.props} />
        <WeekCalendarChildDescription {...this.props} />
      </TouchableOpacity>
    );
  }
}

export class WeekCalendarChildTitle extends React.PureComponent<
  WeekCalendarChildContainerProps
> {
  returnTitleContainerStyle = () => {
    if (this.props.index === this.props.activeIndex) {
      return {...styles.titleContainer, backgroundColor: primaryColors.prim_3};
    }
    return styles.titleContainer;
  };

  returnTitleStyle = () => {
    if (this.props.index === this.props.activeIndex) {
      return {...styles.title, color: primaryColors.prim_1};
    }
    return styles.title;
  };

  render() {
    const titleContainerStyle = this.returnTitleContainerStyle();
    const titleStyle = this.returnTitleStyle();

    return (
      <View style={titleContainerStyle}>
        <TranslateText text={this.props.title} style={titleStyle} />
      </View>
    );
  }
}

export class WeekCalendarChildDescription extends React.PureComponent<
  WeekCalendarChildContainerProps
> {
  returnDescriptionStyle = () => {
    if (this.props.index === this.props.activeIndex) {
      return {...styles.description, color: primaryColors.prim_1};
    }
    return styles.description;
  };

  render() {
    const descriptionStyle = this.returnDescriptionStyle();
    return (
      <View style={styles.descriptionContainer}>
        <TranslateText text={this.props.description} style={descriptionStyle} />
      </View>
    );
  }
}

export const WEEK_HORI_CALENDAR_CHILD_CONTAINER_WIDTH = 88 + 14;

export const WeekHorizontalCalendarSeparator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  separator: {
    width: 14,
  },

  calendarChildContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 88,
  },

  titleContainer: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    overflow: "hidden",
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
    height: 22,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  description: {
    fontFamily: lightFont,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.02,
    color: textIconColors.ti_3,
  },
});
