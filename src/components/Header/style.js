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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 10px;
  background-color: ${(props) =>
    props.isScrolled ? 'rgba(0, 0, 0, 0.05)' : 'transparent'};
  backdrop-filter: ${(props) => (props.isScrolled ? 'blur(7px)' : 'none')};
  transition: background-color 0.2s ease, backdrop-filter 0.2s ease;
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
  justify-content: center;
  align-items: center;
  margin: 40px;
  padding: 15px 40px;
  border-radius: 25px;
  border: 1px solid var(--whiteDefault);
  color: var(--whiteDefault);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.45);
  }

  &:active {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.2);
  }
`

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  padding: 11.25rem 0;
`

export const BannerText = styled.h1`
  font-weight: 580;
  font-size: 46px;
  color: var(--whiteDefault);
  text-align: center;
  letter-spacing: 3px;
`
