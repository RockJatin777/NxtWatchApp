import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailedImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  color: ${props => props.headingColor};
`

export const FailedNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => props.notoColor};
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-right: 5px;
  font-family: 'Roboto';
  font-size: 15px;
`
