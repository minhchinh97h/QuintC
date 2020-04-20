import {JournalScreenState} from "../../types/states/JournalScreenState";
import {ReduxAction} from "types/ReduxAction";
import produce from "immer";

const types = {
  UPDATE_CALENDAR_HEADER_TITLE: "UPDATE_CALENDAR_HEADER_TITLE",
  UPDATE_PRESS_HEADER_TITLE_TRACKER: "UPDATE_PRESS_HEADER_TITLE_TRACKER",
};

const initialState: JournalScreenState = {
  pressHeaderTitleTracker: false,
};

export const actionCreators = {
  updateCalendarHeaderTitle: (value: string) => ({
    type: types.UPDATE_CALENDAR_HEADER_TITLE,
    payload: value,
  }),
  updatePressHeaderTitleTracker: () => ({
    type: types.UPDATE_PRESS_HEADER_TITLE_TRACKER,
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
    }
  },
  initialState,
);

export default JournalScreenReducer;
