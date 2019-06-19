const SELECT_ITEM = 'SELECT_ITEM';
const CLEAR_SELECTION = 'CLEAR_SELECTION';
const CHANGE_ITEM = 'CHANGE_ITEM';

const selectItem = index => {
  return {
    type: SELECT_ITEM,
    payload: index,
  };
};

const clearSelection = () => {
  return {
    type: CLEAR_SELECTION,
  };
};

const changeItem = value => {
  return {
    type: CHANGE_ITEM,
    payload: value,
  };
};

export {
  SELECT_ITEM,
  CLEAR_SELECTION,
  CHANGE_ITEM,
  selectItem,
  clearSelection,
  changeItem
}
