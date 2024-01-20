import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
} from './StyledComponent'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#231f20' : '#f1f9f5'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const noFindImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundVideosImage src={noFindImageUrl} alt="not found" />
              <NotFoundVideosHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundVideosHeading>
              <NotFoundVideosNote noteColor={noteColor}>
                we are sorry, the page you requested could not be found.
              </NotFoundVideosNote>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
