import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`

export const ContentSection = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  flex-direction: column;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
`

export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  padding-left: 5px;
  padding-right: 5px;
`

export const LinkLogo = styled(Link)`
  text-decoration: none;
`
