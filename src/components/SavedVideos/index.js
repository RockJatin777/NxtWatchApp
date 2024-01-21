import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  SavedContainer,
  SavedVideoTitle,
  SavedTitleIconContainer,
  SavedText,
  SavedVideoList,
  NoVideosView,
  NoVideoImage,
  NoVideoHeading,
  NoVideoNote,
} from './StyledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f1f9f5'
      const textColor = isDarkTheme ? '#f1f9f5' : '#0f0f0f'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(each => (
                  <TrendingVideoCard key={each.id} videoDetails={each} />
                ))}
              </SavedVideoList>
            ) : (
              <NoVideosView>
                <NoVideoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoVideoHeading headingColor={headingColor}>
                  No saved videos found
                </NoVideoHeading>
                <NoVideoNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoVideoNote>
              </NoVideosView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
