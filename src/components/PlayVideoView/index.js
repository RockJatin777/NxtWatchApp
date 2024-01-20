import ReactPlayer from 'react-player'

import {BiListPlus} from 'react-icons/bi'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatusContainer,
  PlayVideoStatus,
  Dot,
  PlaySocialButtonContainer,
  BtnContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelContainer,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './StyledComponents'

const PlayVideoView = props => {
  const {
    videoDetails,
    isLiked,
    isDisLiked,
    clickLike,
    clickDisLike,
    isVideoSaved,
    addVideo,
  } = props

  const onClickLike = () => {
    clickLike()
  }

  const onClickDisLike = () => {
    clickDisLike()
  }

  const onClickSave = () => {
    addVideo()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'

        const saveIconColor = isVideoSaved ? '#4f46e5' : textColor

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <Dot> &#8226; </Dot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    Like
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickDisLike}
                  >
                    <AiOutlineDislike size={25} />
                    Dislike
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{isVideoSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView
