import React, {
  memo,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {actionCreators} from "store/reducers/JournalScreenReducer";
import {getPressHeaderTitleTracker} from "selectors/JournalScreenSelector";

const DayHorizontalCalendar = () => {
  const dispatch = useDispatch();
  const yearsBetweenPast = 1;
  const yearsBetweenFuture = 3;
  const currentYear = moment().year();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);
  let ref: MutableRefObject<
    FlatList<DayHorizontalCalendarArrayProps> | undefined
  > = useRef();
  const [initialScrollIndex, setInitialScrollIndex] = useState(0);
  const [data, setData] = useState<DayHorizontalCalendarArrayProps[]>([]);

  useEffect(() => {
    const days = returnDaysInYears(
      currentYear - yearsBetweenPast,
      currentYear + yearsBetweenFuture,
    );
    setData(days);
    updateInititalScrollIndex(getCurrentDateIndex(days));
  }, []);

  const pressHeaderTitleTracker = useSelector(getPressHeaderTitleTracker);
  useEffect(() => {
    chooseDate(initialScrollIndex);
  }, [pressHeaderTitleTracker]);

  const updateInititalScrollIndex = (index: number) => {
    setInitialScrollIndex(index);
    chooseDate(index);
    scrollToOffset(index);
  };

  const keyExtractor = (
    item: DayHorizontalCalendarArrayProps,
    index: number,
  ) => {
    return `journal-horizontal-day-calendar-iso-${item}-index-${index}`;
  };

  const renderItem = ({
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
      chooseDate={chooseDate}
      activeIndex={activeIndex}
      lastActiveIndex={lastActiveIndex}
    />
  );

  const chooseDate = (index: number) => {
    setActiveIndex(index);
    setLastActiveIndex(activeIndex);
  };

  const getItemLayout = (
    data: DayHorizontalCalendarArrayProps[] | null | undefined,
    index: number,
  ) => ({
    length: DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH,
    offset: DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH * index,
    index,
  });

  const scrollToOffset = (index: number) => {
    if (ref && ref.current) {
      ref.current.scrollToOffset({
        offset: (index - 1) * DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH, // For clearer view
      });
    }
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {x} = e.nativeEvent.contentOffset;
    let index = Math.floor(x / DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH);
    index += 1; // For clearer view
    if (index < 0) index = 0;
    if (data.length > 0) {
      dispatch(
        actionCreators.updateCalendarHeaderTitle(
          returnAccordingDayHeaderText(data, index),
        ),
      );
    }
  };

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal={true}
      getItemLayout={getItemLayout}
      initialScrollIndex={initialScrollIndex}
      ref={ref}
      windowSize={9}
      maxToRenderPerBatch={9}
      initialNumToRender={9}
      ItemSeparatorComponent={DayHorizontalCalendarSeparator}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={true}
      scrollEventThrottle={12}
      onScroll={onScroll}></FlatList>
  );
};

export default memo(DayHorizontalCalendar);

const getCurrentDateIndex = (days: DayHorizontalCalendarArrayProps[]) => {
  return days.findIndex((day) => {
    return day.dateString === moment().startOf("day").toISOString();
  });
};
