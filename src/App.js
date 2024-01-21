import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import VideoDetailView from './components/VideoDetailView'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import ThemeAndVideoContext from './Context/ThemeAndVideoContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addToSavedVideo = video => {
    const {savedVideos} = this.state
    const updateSavedVideos = savedVideos.find(each => each.id === video.id)

    if (updateSavedVideos === undefined) {
      this.setState({savedVideos: [...savedVideos, video]})
    } 
  }

  removeSavedVideo = id => {
    const {savedVideos} = this.state
    const updateSavedVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updateSavedVideos})
  }

  render() {
    const {activeTab, isDarkTheme, savedVideos} = this.state

    return (
      <ThemeAndVideoContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addToSavedVideo: this.addToSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
