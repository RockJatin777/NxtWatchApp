import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  activeTab: 'Home',
  changeTab: () => {},
  addToSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default ThemeAndVideoContext
