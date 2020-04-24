import {JournalScreenState} from './JournalScreenState';
import {SettingsState} from './SettingsState';

export interface State {
  journalScreen: JournalScreenState;
  settings: SettingsState;
}
