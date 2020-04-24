import moment from "moment";
import {DayHorizontalCalendarArrayProps} from "../components/JournalScreenSpecific/DayCalendarChildComponents";
import {translate} from "./Translate";
import {WeekHorizontalCalendarArrayProps} from "components/JournalScreenSpecific/WeekCalendarChildComponents";
import {MonthHorizontalCalendarArrayProps} from "components/JournalScreenSpecific/MonthCalendarChildComponents";

const dayInWeekTexts = [
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.S",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.M",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.T",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.W",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.T",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.F",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.S",
];

export const monthFullNames = (index: number) => `MONTH_FULL_NAMES.${index}`;
export const monthShortNames = (index: number) => `MONTH_SHORT_NAMES.${index}`;

export const returnDaysInYears = (
  leftEndYear: number,
  rightEndYear: number,
) => {
  let days: DayHorizontalCalendarArrayProps[] = [];

  for (let i = leftEndYear; i <= rightEndYear; i++) {
    const startDayOfYear = moment()
      .date(1)
      .month(0)
      .year(i)
      .startOf("day")
      .dayOfYear();

    const endDayOfYear = moment()
      .date(31)
      .month(11)
      .year(i)
      .startOf("day")
      .dayOfYear();

    for (let j = startDayOfYear; j <= endDayOfYear; j++) {
      const date = moment().startOf("day").year(i).set({dayOfYear: j});
      const dayInWeek = date.day();
      const dayInMonth = date.date();
      days.push({
        dateString: date.toISOString(),
        title: dayInWeekTexts[dayInWeek],
        description: `${dayInMonth}`,
      });
    }
  }

  return days;
};

export const returnAccordingDayHeaderText = (
  days: DayHorizontalCalendarArrayProps[],
  index: number,
) => {
  const dayData = days[index];
  const dateMoment = moment(dayData.dateString);
  return `${translate(monthFullNames(dateMoment.month()))} ${moment(
    dateMoment.year(),
  )}`;
};

export const returnWeeksInYears = (
  leftEndYear: number,
  rightEndYear: number,
) => {
  let weeks: WeekHorizontalCalendarArrayProps[] = [];

  for (let i = leftEndYear; i <= rightEndYear; i++) {
    const numberOfWeeks = moment().year(i).weeksInYear();
    for (let w = 1; w <= numberOfWeeks; w++) {
      const startDayOfWeek = moment()
        .year(i)
        .isoWeek(w)
        .startOf("isoWeek")
        .startOf("day");
      const endDayOfWeek = moment()
        .year(i)
        .isoWeek(w)
        .endOf("isoWeek")
        .startOf("day");

      weeks.push({
        startWeekDateString: startDayOfWeek.toISOString(),
        endWeekDateString: endDayOfWeek.toISOString(),
        title: `${translate("WEEK_TITLE_CALENDAR_CHILD")} ${w}`,
        description: `${startDayOfWeek.date()} ${translate(
          monthShortNames(startDayOfWeek.month()),
        )} - ${endDayOfWeek.date()} ${translate(
          monthShortNames(endDayOfWeek.month()),
        )}`,
      });
    }
  }

  return weeks;
};

export const returnAccordingWeekHeaderText = (
  weeks: WeekHorizontalCalendarArrayProps[],
  index: number,
) => {
  const weekData = weeks[index];
  const weekMoment = moment(weekData.startWeekDateString);
  return `${translate(monthFullNames(weekMoment.month()))} ${moment(
    weekMoment.year(),
  )}`;
};

export const returnMonthsInYears = (
  leftEndYear: number,
  rightEndYear: number,
) => {
  let months: MonthHorizontalCalendarArrayProps[] = [];

  for (let i = leftEndYear; i <= rightEndYear; i++) {
    for (let m = 0; m < 12; m++) {
      const startMonthDate = moment()
        .year(i)
        .month(m)
        .startOf("month")
        .startOf("day");
      const endMonthDate = moment()
        .year(i)
        .month(m)
        .endOf("month")
        .startOf("day");

      months.push({
        startMonthDateString: startMonthDate.toISOString(),
        endMonthDateString: endMonthDate.toISOString(),
        title: `${translate(monthFullNames(m))}`,
        description: `${translate(
          "WEEK_TITLE_CALENDAR_CHILD",
        )} ${startMonthDate.isoWeek()} - ${endMonthDate.isoWeek()}`,
      });
    }
  }

  return months;
};

export const returnAccordingMonthHeaderText = (
  months: MonthHorizontalCalendarArrayProps[],
  index: number,
) => {
  const monthData = months[index];
  const monthMoment = moment(monthData.startMonthDateString);
  return `${moment(monthMoment.year())}`;
};
