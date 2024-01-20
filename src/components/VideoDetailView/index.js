import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import PlayVideoView from '../PlayVideoView'

import {LoaderContainer, VideoDetailViewContainer} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailView extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
    videoDetails: [],
    isVideoSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {videoDetails, isLiked, isDisLiked, isVideoSaved} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {removeSavedVideo, addToSavedVideo} = value

          const addOrRemoveVideo = () => {
            if (isVideoSaved === true) {
              removeSavedVideo(videoDetails.id)
            } else {
              addToSavedVideo(videoDetails)
            }
          }

          const clickToSaveOrRemoveVideo = () => {
            this.setState(
              prev => ({
                isVideoSaved: !prev.isVideoSaved,
              }),
              addOrRemoveVideo,
            )
          }

          return (
            <PlayVideoView
              videoDetails={videoDetails}
              clickLike={this.onClickLike}
              clickDisLike={this.onClickDisLike}
              isLiked={isLiked}
              isDisLiked={isDisLiked}
              isVideoSaved={isVideoSaved}
              addVideo={clickToSaveOrRemoveVideo}
            />
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailViewContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideos()}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoDetailView
