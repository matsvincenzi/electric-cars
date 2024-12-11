import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  HeaderContainer,
  NavWrapper,
  Logo,
  MenuSidebar,
  MenuItem,
  MenuToggle,
  CloseButton,
  Banner,
  BannerText,
  MenuList,
} from './style'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <HeaderContainer id="home">
      <NavWrapper isScrolled={isScrolled}>
        <Logo href="#home">
          Eletric
          <br />
          Cars
        </Logo>
        <MenuToggle onClick={toggleSidebar}>
          <FiMenu size={28} />
        </MenuToggle>
        <MenuList className="desktop-menu">
          <MenuItem href="#what-are-they">What Are They?</MenuItem>
          <MenuItem href="#how-it-works">How It Works?</MenuItem>
          <MenuItem href="#types">Types</MenuItem>
          <MenuItem href="#examples">Examples</MenuItem>
          <MenuItem href="#pros-cons">Pros and Cons</MenuItem>
        </MenuList>
      </NavWrapper>
      <MenuSidebar showSidebar={showSidebar}>
        {showSidebar && (
          <>
            <CloseButton onClick={toggleSidebar}>
              <FiX size={28} />
            </CloseButton>
            <MenuList className="sidebar-menu">
              <MenuItem href="#what-are-they" onClick={toggleSidebar}>
                What Are They?
              </MenuItem>
              <MenuItem href="#how-it-works" onClick={toggleSidebar}>
                How It Works?
              </MenuItem>
              <MenuItem href="#types" onClick={toggleSidebar}>
                Types
              </MenuItem>
              <MenuItem href="#examples" onClick={toggleSidebar}>
                Examples
              </MenuItem>
              <MenuItem href="#pros-cons" onClick={toggleSidebar}>
                Pros and Cons
              </MenuItem>
            </MenuList>
          </>
        )}
      </MenuSidebar>
      <Banner>
        <BannerText>
          A vision for sustainable,
          <br />
          accessible, and modern cars
        </BannerText>
      </Banner>
    </HeaderContainer>
  )
}
