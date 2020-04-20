import React, {memo, useState, useEffect, useMemo} from "react";
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

export const DayCalendarChildContainer = memo(
  (props: DayCalendarChildContainerProps) => {
    const onPress = () => {
      props.chooseDate(props.index);
    };

    return (
      <TouchableOpacity style={styles.calendarChildContainer} onPress={onPress}>
        <DayCalendarChildTitle {...props} />
        <DayCalendarChildDescription {...props} />
      </TouchableOpacity>
    );
  },
);

export class DayCalendarChildTitle extends React.PureComponent<
  DayCalendarChildContainerProps
> {
  state = {
    title: styles.title,
  };

  shouldComponentUpdate(nextProps: DayCalendarChildContainerProps) {
    return (
      nextProps.activeIndex === this.props.index ||
      nextProps.lastActiveIndex === this.props.index
    );
  }

  static getDerivedStateFromProps(nextProps: DayCalendarChildContainerProps) {
    if (nextProps.activeIndex === nextProps.index) {
      return {
        title: {...styles.title, ...{color: primaryColors.prim_1}},
      };
    } else if (nextProps.lastActiveIndex === nextProps.index) {
      return {
        title: {...styles.title, ...{color: textIconColors.ti_2}},
      };
    }
  }

  render() {
    return (
      <View style={styles.titleContainer}>
        <TranslateText text={this.props.title} style={this.state.title} />
      </View>
    );
  }
}

export class DayCalendarChildDescription extends React.PureComponent<
  DayCalendarChildContainerProps
> {
  state = {
    descriptionContainer: styles.descriptionContainer,
    description: styles.description,
  };

  shouldComponentUpdate(nextProps: DayCalendarChildContainerProps) {
    return (
      nextProps.activeIndex === this.props.index ||
      nextProps.lastActiveIndex === this.props.index
    );
  }

  static getDerivedStateFromProps(nextProps: DayCalendarChildContainerProps) {
    if (nextProps.activeIndex === nextProps.index) {
      return {
        descriptionContainer: {
          ...styles.descriptionContainer,
          ...{backgroundColor: primaryColors.prim_3},
        },
        description: {...styles.description, ...{color: primaryColors.prim_1}},
      };
    } else if (nextProps.lastActiveIndex === nextProps.index) {
      return {
        descriptionContainer: {
          ...styles.descriptionContainer,
          ...{backgroundColor: "transparent"},
        },
        description: {...styles.description, ...{color: textIconColors.ti_3}},
      };
    }
  }

  render() {
    return (
      <View style={this.state.descriptionContainer}>
        <TranslateText
          text={this.props.description}
          style={this.state.description}
        />
      </View>
    );
  }
}

export const DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH = 59;

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
    marginTop: 3,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },

  description: {
    fontFamily: lightFont,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.02,
    color: textIconColors.ti_3,
  },
});
