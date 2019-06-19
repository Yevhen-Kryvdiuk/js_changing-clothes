import { clotheList } from './clotheList.js';
import {
  SELECT_ITEM,
  CLEAR_SELECTION,
  CHANGE_ITEM,
} from './actions.js';

const initialState = {
  clotheList: [...clotheList],
  selectedIndex: null,
};

const actionHandlers = {
  [SELECT_ITEM]: (state, action) => {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  },
  [CLEAR_SELECTION]: (state) => {
    return {
      ...state,
      selectedIndex: null,
    };
  },
  [CHANGE_ITEM]: (state, action) => {
    const { selectedIndex, clotheList } = state;
    const { payload } = action;
    const newClotheList = [...clotheList];
    if (payload === '') {
      newClotheList.splice(selectedIndex, 1);
    } else {
      newClotheList[selectedIndex] = payload;
    }
    return {
      clotheList: [...newClotheList],
      selectedIndex: null,
    };
  }
};

export const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler
    ? handler(state, action)
    : state;
};
