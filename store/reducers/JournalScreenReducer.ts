import {
  JournalScreenState,
  TabType,
} from "../../types/states/JournalScreenState";
import {ReduxAction} from "types/ReduxAction";
import produce from "immer";

const types = {
  UPDATE_CALENDAR_HEADER_TITLE: "UPDATE_CALENDAR_HEADER_TITLE",
  UPDATE_PRESS_HEADER_TITLE_TRACKER: "UPDATE_PRESS_HEADER_TITLE_TRACKER",
  UPDATE_CURRENT_JOURNAL_TAB: "UPDATE_CURRENT_JOURNAL_TAB",
};

const initialState: JournalScreenState = {
  pressHeaderTitleTracker: false,
  currentJournalTab: TabType.day,
};

export const actionCreators = {
  updateCalendarHeaderTitle: (value: string) => ({
    type: types.UPDATE_CALENDAR_HEADER_TITLE,
    payload: value,
  }),
  updatePressHeaderTitleTracker: () => ({
    type: types.UPDATE_PRESS_HEADER_TITLE_TRACKER,
  }),
  updateCurrentJournalTab: (tab: TabType) => ({
    type: types.UPDATE_CURRENT_JOURNAL_TAB,
    payload: tab,
  }),
};

const JournalScreenReducer = produce(
  (draft: JournalScreenState, action: ReduxAction) => {
    const {type, payload} = action;

    switch (type) {
      case types.UPDATE_CALENDAR_HEADER_TITLE:
        draft.calendarHeaderTitle = payload;
        break;

      case types.UPDATE_PRESS_HEADER_TITLE_TRACKER:
        draft.pressHeaderTitleTracker = !draft.pressHeaderTitleTracker;
        break;

      case types.UPDATE_CURRENT_JOURNAL_TAB:
        draft.currentJournalTab = payload;
        break;
    }
  },
  initialState,
);

export default JournalScreenReducer;
