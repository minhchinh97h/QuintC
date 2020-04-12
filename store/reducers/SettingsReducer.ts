import {ReduxAction} from 'types/ReduxAction';
import {SettingsState, Languages} from 'types/states/SettingsState';

export const types = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
};

export const actionCreators = {
  changeLanguage: (lang: Languages) => ({
    type: types.CHANGE_LANGUAGE,
    payload: lang,
  }),
};

const initialState: SettingsState = {
  language: Languages.en,
};

const SettingsReducer = (state = initialState, action: ReduxAction) => {
  const {type, payload} = action;

  switch (type) {
    case types.CHANGE_LANGUAGE:
      return {...state, language: payload};
    default:
      return state;
  }
};

export default SettingsReducer;
