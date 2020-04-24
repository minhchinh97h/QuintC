import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import TranslateText from "primitives/TranslateText";
import {primaryColors, lightFont, textIconColors} from "styles";

interface MonthCalendarChildContainerProps {
  startMonthDateString: string;
  endMonthDateString: string;
  title: string;
  description: string;
  index: number;
  chooseDate: Function;
  activeIndex: number;
  lastActiveIndex: number;
}

export interface MonthHorizontalCalendarArrayProps {
  startMonthDateString: string;
  endMonthDateString: string;
  title: string;
  description: string;
}

export class MonthCalendarChildContainer extends React.PureComponent<
  MonthCalendarChildContainerProps
> {
  onPress = () => {
    this.props.chooseDate(this.props.index);
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.calendarChildContainer}
        onPress={this.onPress}>
        <MonthCalendarChildTitle {...this.props} />
        <MonthCalendarChildDescription {...this.props} />
      </TouchableOpacity>
    );
  }
}

export class MonthCalendarChildTitle extends React.PureComponent<
  MonthCalendarChildContainerProps
> {
  state = {
    titleContainer: styles.titleContainer,
    title: styles.title,
  };

  shouldComponentUpdate(nextProps: MonthCalendarChildContainerProps) {
    return (
      nextProps.activeIndex === this.props.index ||
      nextProps.lastActiveIndex === this.props.index
    );
  }

  static getDerivedStateFromProps(nextProps: MonthCalendarChildContainerProps) {
    if (nextProps.activeIndex === nextProps.index) {
      return {
        titleContainer: {
          ...styles.titleContainer,
          backgroundColor: primaryColors.prim_3,
        },
        title: {...styles.title, color: primaryColors.prim_1},
      };
    } else if (nextProps.lastActiveIndex === nextProps.index) {
      return {
        titleContainer: {
          ...styles.titleContainer,
          backgroundColor: "transparent",
        },
        title: {...styles.title, color: textIconColors.ti_2},
      };
    }
  }

  render() {
    return (
      <View style={this.state.titleContainer}>
        <TranslateText text={this.props.title} style={this.state.title} />
      </View>
    );
  }
}

export class MonthCalendarChildDescription extends React.PureComponent<
  MonthCalendarChildContainerProps
> {
  state = {
    description: styles.description,
  };

  shouldComponentUpdate(nextProps: MonthCalendarChildContainerProps) {
    return (
      nextProps.activeIndex === this.props.index ||
      nextProps.lastActiveIndex === this.props.index
    );
  }

  static getDerivedStateFromProps(nextProps: MonthCalendarChildContainerProps) {
    if (nextProps.activeIndex === nextProps.index) {
      return {
        description: {...styles.description, color: primaryColors.prim_1},
      };
    } else if (nextProps.lastActiveIndex === nextProps.index) {
      return {
        description: {...styles.description, color: textIconColors.ti_3},
      };
    }
  }

  render() {
    return (
      <View style={styles.descriptionContainer}>
        <TranslateText
          text={this.props.description}
          style={this.state.description}
        />
      </View>
    );
  }
}

export const MONTH_HORI_CALENDAR_CHILD_CONTAINER_WIDTH = 108 + 14;

export const MonthHorizontalCalendarSeparator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  separator: {
    width: 14,
  },

  calendarChildContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 108,
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
