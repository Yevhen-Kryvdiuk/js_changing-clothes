import { store } from './src/store.js';
import {
  clearSelection,
} from './src/actions.js';
import { renderList } from './src/render.js';

const createRender = container => (state, dispatch) => {
  const list = renderList(state, dispatch);

  while (container.firstChild) {
    container.firstChild.remove();
  }

  container.append(list);
};

window.addEventListener('load', () => {
  const render = createRender(document.getElementById('root'));

  store.subscribe(() => {
    render(store.getState(), store.dispatch);
  });

  document.addEventListener('click', () => store.dispatch(clearSelection()));

  store.dispatch({ type: 'INITIAL_RENDER' });
});
