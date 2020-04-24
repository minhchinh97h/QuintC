import {createSelector} from "reselect";
import {State} from "types/states/State";
import {JournalScreenState} from "types/states/JournalScreenState";

const getState = (state: State) => state.journalScreen;

export const getCalendarHeaderTitle = createSelector(
  getState,
  (journalScreen: JournalScreenState) => journalScreen.calendarHeaderTitle,
);

export const getPressHeaderTitleTracker = createSelector(
  getState,
  (journalScreen: JournalScreenState) => journalScreen.pressHeaderTitleTracker,
);
