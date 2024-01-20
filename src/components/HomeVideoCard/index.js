import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
  LinkLogo,
} from './StyledComponents'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <LinkLogo to={`/videos/${id}`} className="nav-link">
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views <Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </LinkLogo>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
