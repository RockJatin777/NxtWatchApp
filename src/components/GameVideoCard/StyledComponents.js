import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const GamingThumbNailImage = styled.img`
  width: 100vw;
  height: 300px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  flex-direction: column;
`

export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  margin-bottom: 0px;
`

export const GamingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`

export const LinkLogo = styled(Link)`
  text-decoration: none;
`
