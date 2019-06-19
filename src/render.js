import { createElement, createInput } from './utils.js';
import { clearSelection, changeItem, selectItem } from './actions.js';


const renderList = (state, dispatch) => {
  const { selectedIndex, clotheList } = state;
  const list = clotheList.map((item, index) => {
    const isSelected = selectedIndex === index;
    const content = isSelected ? createInput(dispatch, changeItem, item) : item;
    const clotheItem = createElement(
      `clothe-item${isSelected ? ' is-selected' : ''}`,
      content,
      'li',
    );

    clotheItem.addEventListener('click', (event) => {
      event.stopPropagation();

      dispatch(
        isSelected
          ? clearSelection()
          : selectItem(index),
      );
    });

    return clotheItem;
  });

  return createElement('clothe', list, 'ul');
};

export {renderList};
