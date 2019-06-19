const createElement = (className = '', content = '', tag = 'div') => {
  const element = document.createElement(tag);

  element.classList.add(...className.split(' '));

  if (typeof content === 'string') {
    element.textContent = content;
  } else if (Array.isArray(content)) {
    element.append(...content);
  } else {
    element.appendChild(content);
  }

  return element;
};

const createInput = (dispatch, action, value) => {
  const input = document.createElement('input');
  input.setAttribute('value', `${value}`);
  input.addEventListener('click', event => {
    event.stopPropagation();
  });
  input.addEventListener('keypress', event => {
    event.stopPropagation();
    if (event.key === 'Enter') {
      const value = event.target.value;
      dispatch(action(value));
    }
  });
  return input;
};

export {createElement, createInput};
