import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav`
  display: flex;
`

export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 0px;
  list-style-type: none;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  display: flex;
  padding-left: 20px;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const NavText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 16px;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
`

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`

export const ContactImage = styled.img`
  margin-right: 15px;
  border-radius: 50px;
  height: 25px;
  width: 25px;
`

export const ContactNote = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
`
