import React from "react";
import {FlatList, NativeSyntheticEvent, NativeScrollEvent} from "react-native";
import moment from "moment";
import {
  returnDaysInYears,
  returnAccordingDayHeaderText,
} from "helpers/CalendarCalculations";
import {
  DayCalendarChildContainer,
  DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH,
  DayHorizontalCalendarSeparator,
  DayHorizontalCalendarArrayProps,
} from "./DayCalendarChildComponents";
import {connect} from "react-redux";
import {actionCreators} from "store/reducers/JournalScreenReducer";
import {State} from "types/states/State";
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

class DayHorizontalCalendar extends React.PureComponent<Props, ComponentState> {
  data: DayHorizontalCalendarArrayProps[] = [];
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
    FlatList<DayHorizontalCalendarArrayProps>
  > = React.createRef();

  componentDidMount() {
    this.data = returnDaysInYears(
      this.currentYear - this.yearsBetweenPast,
      this.currentYear + this.yearsBetweenFuture,
    );
    this.updateInititalScrollIndex(getCurrentDateIndex(this.data));
  }

  componentDidUpdate(prevProps: Props, prevState: ComponentState) {
    if (
      this.props.pressHeaderTitleTracker !==
        prevProps.pressHeaderTitleTracker &&
      this.props.currentJournalTab === TabType.day
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

  keyExtractor = (item: DayHorizontalCalendarArrayProps, index: number) => {
    return `journal-horizontal-day-calendar-iso-${item.dateString}-index-${index}`;
  };

  renderItem = ({
    item,
    index,
  }: {
    item: DayHorizontalCalendarArrayProps;
    index: number;
  }) => (
    <DayCalendarChildContainer
      dateString={item.dateString}
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
    data: DayHorizontalCalendarArrayProps[] | null | undefined,
    index: number,
  ) => ({
    length: DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH,
    offset: DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH * index,
    index,
  });

  scrollToOffset = (index: number) => {
    if (this.ref && this.ref.current) {
      this.ref.current.scrollToOffset({
        offset: (index - 1) * DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH, // For clearer view
      });
    }
  };

  onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {x} = e.nativeEvent.contentOffset;
    let index = Math.floor(x / DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH);
    index += 1; // For clearer view
    if (index < 0) index = 0;
    if (this.data.length > 0) {
      if (this.props.currentJournalTab === TabType.day) {
        this.props.updateCalendarHeaderTitle(
          returnAccordingDayHeaderText(this.data, index),
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
        ItemSeparatorComponent={DayHorizontalCalendarSeparator}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        scrollEventThrottle={12}
        onScroll={this.onScroll}></FlatList>
    );
  }
}

const getCurrentDateIndex = (days: DayHorizontalCalendarArrayProps[]) => {
  return days.findIndex((day) => {
    return day.dateString === moment().startOf("day").toISOString();
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
)(DayHorizontalCalendar);
