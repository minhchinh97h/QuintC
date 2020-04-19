import moment from "moment";
import {DayCalendarChildContainerProps} from "../components/JournalScreenSpecific/DayCalendarChildComponents";

const dayInWeekTexts = [
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.S",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.M",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.T",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.W",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.T",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.F",
  "JOURNAL_HORIZONTAL_DAY_CALENDAR.S",
];

export const returnDaysInYears = (
  leftEndYear: number,
  rightEndYear: number,
) => {
  let days: DayCalendarChildContainerProps[] = [];

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
