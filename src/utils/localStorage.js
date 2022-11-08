export const getLocal = key => JSON.parse(window.localStorage.getItem(key));

export const setLocal = (key, item) =>
  window.localStorage.setItem(key, JSON.stringify(item));
