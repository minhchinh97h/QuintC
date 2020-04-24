export interface JournalScreenState {
  calendarHeaderTitle?: string;
  pressHeaderTitleTracker: boolean;
  currentJournalTab: TabType;
}

export enum TabType {
  day = "day",
  week = "week",
  month = "month",
}
