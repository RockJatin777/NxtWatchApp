import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHighFill} from 'react-icons/bs'
import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  NavbarHeader,
  LogoLink,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  ModalContainer,
  ModalDesc,
  ButtonContainer,
  CloseButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? '#1e293b' : '#f1f5f9'
      const color = isDarkTheme ? '#ffffff' : '#00306e'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ActionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHighFill color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton color={color} bgColor={bgColor} type="button">
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout</ModalDesc>
                  <ButtonContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="type" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavbarHeader>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
