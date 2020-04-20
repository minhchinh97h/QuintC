import {createSelector} from 'reselect';
import {States} from 'types/states/State';
import {SettingsState} from 'types/states/SettingsState';

const getState = (state: States) => state.settings;

export const getLanguage = createSelector(
  getState,
  (settingsState: SettingsState) => settingsState.language,
);
