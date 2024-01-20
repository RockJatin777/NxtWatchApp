import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  GamingListItem,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
  LinkLogo,
} from './StyledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <LinkLogo to={`/videos/${id}`}>
            <GamingListItem>
              <GamingThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle color={textColor}>{title}</GamingTitle>
                <GamingViewsAndDate color={textColor}>
                  {viewCount} Watching Worldwide
                </GamingViewsAndDate>
              </GamingContentSection>
            </GamingListItem>
          </LinkLogo>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
