import {JournalScreenState} from '../../types/states/JournalScreenState';
import {ReduxAction} from 'types/ReduxAction';
import produce from 'immer';

const types = {};

const initialState: JournalScreenState = {};

const JournalScreenReducer = produce((draft, action: ReduxAction) => {
  const {type, payload} = action;

  switch (type) {
  }
  
}, initialState);

export default JournalScreenReducer;
