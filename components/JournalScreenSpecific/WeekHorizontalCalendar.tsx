import React from "react";
import {FlatList, NativeSyntheticEvent, NativeScrollEvent} from "react-native";
import moment from "moment";
import {
  returnAccordingWeekHeaderText,
  returnWeeksInYears,
} from "helpers/CalendarCalculations";
import {connect} from "react-redux";
import {actionCreators} from "store/reducers/JournalScreenReducer";
import {State} from "types/states/State";
import {
  WeekHorizontalCalendarArrayProps,
  WeekCalendarChildContainer,
  WeekHorizontalCalendarSeparator,
  WEEK_HORI_CALENDAR_CHILD_CONTAINER_WIDTH,
} from "./WeekCalendarChildComponents";
import {TabType} from "types/states/JournalScreenState";

interface IMapStateToProps {
  pressHeaderTitleTracker: boolean;
  currentJournalTab: TabType;
}

interface IMapDispatchToProps {
  updatePressHeaderTitleTracker: Function;
  updateCalendarHeaderTitle: Function;
}

interface Props extends IMapStateToProps, IMapDispatchToProps {}

interface ComponentState {
  activeIndex: number;
  lastActiveIndex: number;
  extraData: boolean;
}

class WeekHorizontalCalendar extends React.PureComponent<
  Props,
  ComponentState
> {
  data: WeekHorizontalCalendarArrayProps[] = [];
  initialScrollIndex: number = 0;
  yearsBetweenPast = 1;
  yearsBetweenFuture = 3;
  currentYear = moment().year();
  state = {
    activeIndex: 0,
    lastActiveIndex: 0,
    extraData: false,
  };

  ref: React.RefObject<
    FlatList<WeekHorizontalCalendarArrayProps>
  > = React.createRef();

  componentDidMount() {
    this.data = returnWeeksInYears(
      this.currentYear - this.yearsBetweenPast,
      this.currentYear + this.yearsBetweenFuture,
    );
    this.updateInititalScrollIndex(getCurrentWeekIndex(this.data));
  }

  componentDidUpdate(prevProps: Props, prevState: ComponentState) {
    if (
      this.props.pressHeaderTitleTracker !==
        prevProps.pressHeaderTitleTracker &&
      this.props.currentJournalTab === TabType.week
    ) {
      this.chooseDate(this.initialScrollIndex, () => {
        this.scrollToOffset(this.initialScrollIndex);
      });
    }
  }

  updateFlatlist = (next?: () => void) => {
    this.setState(
      (prevState) => ({
        extraData: !prevState.extraData,
      }),
      next,
    );
  };

  updateInititalScrollIndex = (index: number) => {
    this.initialScrollIndex = index;

    this.updateFlatlist(() => {
      this.chooseDate(index);
    });
  };

  keyExtractor = (item: WeekHorizontalCalendarArrayProps, index: number) => {
    return `journal-horizontal-week-calendar-iso-start-${item.startWeekDateString}-end-${item.endWeekDateString}-index-${index}`;
  };

  renderItem = ({
    item,
    index,
  }: {
    item: WeekHorizontalCalendarArrayProps;
    index: number;
  }) => (
    <WeekCalendarChildContainer
      startWeekDateString={item.startWeekDateString}
      endWeekDateString={item.endWeekDateString}
      title={item.title}
      description={item.description}
      index={index}
      chooseDate={this.chooseDate}
      activeIndex={this.state.activeIndex}
      lastActiveIndex={this.state.lastActiveIndex}
    />
  );

  chooseDate = (index: number, next?: () => void) => {
    this.setState(
      (prevState) => ({
        activeIndex: index,
        lastActiveIndex: prevState.activeIndex,
        extraData: !prevState.extraData,
      }),
      next,
    );
  };

  getItemLayout = (
    data: WeekHorizontalCalendarArrayProps[] | null | undefined,
    index: number,
  ) => ({
    length: WEEK_HORI_CALENDAR_CHILD_CONTAINER_WIDTH,
    offset: WEEK_HORI_CALENDAR_CHILD_CONTAINER_WIDTH * index,
    index,
  });

  scrollToOffset = (index: number) => {
    if (this.ref && this.ref.current) {
      this.ref.current.scrollToOffset({
        offset: (index - 1) * WEEK_HORI_CALENDAR_CHILD_CONTAINER_WIDTH, // For clearer view
      });
    }
  };

  onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {x} = e.nativeEvent.contentOffset;
    let index = Math.floor(x / WEEK_HORI_CALENDAR_CHILD_CONTAINER_WIDTH);
    index += 1; // For clearer view
    if (index < 0) index = 0;
    if (this.data.length > 0) {
      if (this.props.currentJournalTab === TabType.week) {
        this.props.updateCalendarHeaderTitle(
          returnAccordingWeekHeaderText(this.data, index),
        );
      }
    }
  };

  render() {
    return (
      <FlatList
        data={this.data}
        extraData={this.state.extraData}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        horizontal={true}
        getItemLayout={this.getItemLayout}
        initialScrollIndex={this.initialScrollIndex}
        ref={this.ref}
        windowSize={9}
        maxToRenderPerBatch={9}
        initialNumToRender={9}
        ItemSeparatorComponent={WeekHorizontalCalendarSeparator}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        scrollEventThrottle={12}
        onScroll={this.onScroll}></FlatList>
    );
  }
}

const getCurrentWeekIndex = (weeks: WeekHorizontalCalendarArrayProps[]) => {
  return weeks.findIndex((week) => {
    return (
      week.startWeekDateString ===
      moment().startOf("isoWeek").startOf("day").toISOString()
    );
  });
};

const mapStateToProps: (s: State) => IMapStateToProps = (state: State) => ({
  pressHeaderTitleTracker: state.journalScreen.pressHeaderTitleTracker,
  currentJournalTab: state.journalScreen.currentJournalTab,
});

const mapDispatchToProps: (d: Function) => IMapDispatchToProps = (
  dispatch: Function,
) => ({
  updatePressHeaderTitleTracker: () =>
    dispatch(actionCreators.updatePressHeaderTitleTracker()),

  updateCalendarHeaderTitle: (value: string) =>
    dispatch(actionCreators.updateCalendarHeaderTitle(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeekHorizontalCalendar);
