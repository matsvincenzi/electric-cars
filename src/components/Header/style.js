import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints.js'
import backgroundImage from '../../assets/images/background.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
`

export const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  text-decoration: none;
  color: var(--whiteDefault);
`

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 50px;
`

export const MenuItem = styled.li`
  display: flex;
  margin: 40px;
  padding: 15px 40px;
  border-radius: 25px;
  border: 1px solid var(--whiteDefault);
  color: var(--whiteDefault);
`

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  padding: 70px 0;
`

export const BannerText = styled.h1`
  font-weight: 580;
  font-size: 46px;
  color: var(--whiteDefault);
  text-align: center;
  letter-spacing: 3px;
`
