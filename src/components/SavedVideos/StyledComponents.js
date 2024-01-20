import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`

export const SavedTitleIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 80px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const SavedText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 576px) {
    font-size: 35px;
  }
`

export const SavedVideoList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  margin: 0px;
  flex-direction: column;
`

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoVideoImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.headingColor};
`

export const NoVideoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
`
