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

  @media ${breakpoint.sm2} {
    height: 35rem;
  }

  @media ${breakpoint.sm1} {
    height: 28rem;
  }
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
  padding: 10px 20px;
  background-color: ${(props) =>
    props.isScrolled ? 'rgba(0, 0, 0, 0.04)' : 'transparent'};
  backdrop-filter: ${(props) => (props.isScrolled ? 'blur(7px)' : 'none')};
  transition: background-color 0.2s ease, backdrop-filter 0.2s ease;
`

export const Logo = styled.a`
  font-size: 32px;
  font-weight: 600;
  text-decoration: none;
  color: var(--whiteDefault);
`

export const MenuToggle = styled.div`
  display: none;
  color: var(--whiteDefault);
  cursor: pointer;

  @media ${breakpoint.bg1} {
    display: block;
  }
`

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;

  &.desktop-menu {
    @media ${breakpoint.bg1} {
      display: none;
    }
  }

  &.sidebar-menu {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
  }
`

export const MenuItem = styled.a`
  text-decoration: none;
  color: var(--whiteDefault);
  margin: 30px;
  padding: 15px 40px;
  border-radius: 25px;
  border: 1px solid var(--whiteDefault);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.45);
  }
`

export const MenuSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 15;
  padding: 20px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.5);
  transform: translateX(${(props) => (props.showSidebar ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  a {
    margin: 12px 0;
    padding: 12px 20px;
    color: var(--whiteDefault);
    text-decoration: none;
    font-size: 18px;
    text-align: left;
    width: 100%;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }
  }
`

export const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  color: var(--whiteDefault);
  margin-bottom: 20px;
`

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11.25rem 20px;
  text-align: center;

  @media ${breakpoint.sm2} {
    padding: 8rem 15px;
  }

  @media ${breakpoint.sm1} {
    padding: 7.5rem 15px;
  }
`

export const BannerText = styled.h1`
  font-weight: 580;
  font-size: 46px;
  color: var(--whiteDefault);
  text-align: center;
  letter-spacing: 3px;

  @media ${breakpoint.bg1} {
    font-size: 42px;
  }

  @media ${breakpoint.md1} {
    font-size: 36px;
  }

  @media ${breakpoint.sm2} {
    font-size: 26px;
  }

  @media ${breakpoint.sm1} {
    font-size: 18px;
  }
`
