export const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const colors = {
  black: (!isDarkMode ? '#444' : '#fff'),
  white: (!isDarkMode ? '#fff' : '#444'),

  black1_5: (!isDarkMode ? '#666' : '#eee'),
  black2: (!isDarkMode ? '#666' : '#ccc'),

  lightBlack: '#999',
  lighterBlack: '#aaa',
  lightestBlack: '#bbb',

  whiteHover: (!isDarkMode ? '#f9f9f9' : '#333'),
  whiteActive: (!isDarkMode ? '#f1f1f1' : '#222'),

  blackHover: (!isDarkMode ? '#111': '#f9f9f9'),
  blackActive: (!isDarkMode ? '#111' : '#f1f1f1'),

  lightGray: '#eeeeee',

  red: '#ef5350'
};
