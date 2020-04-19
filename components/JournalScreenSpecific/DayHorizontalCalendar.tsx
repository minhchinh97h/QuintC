import React, {
  memo,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import {FlatList, LayoutChangeEvent} from "react-native";
import moment from "moment";
import {returnDaysInYears} from "helpers/CalendarCalculations";
import {
  DayCalendarChildContainerProps,
  DayCalendarChildContainer,
  DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH,
  DayHorizontalCalendarSeparator,
} from "./DayCalendarChildComponents";

const DayHorizontalCalendar = () => {
  const yearsBetweenPast = 1;
  const yearsBetweenFuture = 0;
  const currentYear = moment().year();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);
  const [extraData, setExtraData] = useState(0);
  let ref: MutableRefObject<
    FlatList<DayCalendarChildContainerProps> | undefined
  > = useRef();
  const [initialScrollIndex, setInitialScrollIndex] = useState(0);
  const [data, setData] = useState<DayCalendarChildContainerProps[]>([]);

  useEffect(() => {
    const days = returnDaysInYears(
      currentYear - yearsBetweenPast,
      currentYear + yearsBetweenFuture,
    );
    setData(days);
    updateInititalScrollIndex(getCurrentDateIndex(days));
  }, []);

  const updateInititalScrollIndex = (index: number) => {
    setInitialScrollIndex(index);
    chooseDate(index);
    scrollToOffset(index);
  };

  const keyExtractor = (item: DayCalendarChildContainerProps, index: number) =>
    `journal-horizontal-day-calendar-iso-${item}-index-${index}`;

  const renderItem = ({
    item,
    index,
  }: {
    item: DayCalendarChildContainerProps;
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
    data: DayCalendarChildContainerProps[] | null | undefined,
    index: number,
  ) => ({
    length: DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH,
    offset: DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH * index,
    index,
  });

  const scrollToOffset = (index: number) => {
    if (ref && ref.current) {
      ref.current.scrollToOffset({
        offset: index * DAY_HORI_CALENDAR_CHILD_CONTAINER_WIDTH,
      });
      setExtraData(extraData + 1);
    }
  };

  return (
    <FlatList
      data={data}
      extraData={extraData}
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
      showsHorizontalScrollIndicator={false}></FlatList>
  );
};

export default memo(DayHorizontalCalendar);

const getCurrentDateIndex = (days: DayCalendarChildContainerProps[]) => {
  return days.findIndex((day) => {
    // console.log(day.dateString, moment().startOf("day").toISOString())
    return day.dateString === moment().startOf("day").toISOString();
  });
};
