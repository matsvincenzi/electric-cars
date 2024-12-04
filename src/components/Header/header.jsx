import React, { useState, useEffect } from 'react'
import {
  HeaderContainer,
  NavWrapper,
  Logo,
  MenuList,
  MenuItem,
  Banner,
  BannerText,
} from './style'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop
      if (scrollPosition > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer>
      <div id="home"></div>
      <NavWrapper isScrolled={isScrolled}>
        <Logo href="#home">
          Eletric
          <br />
          Cars
        </Logo>

        <MenuList>
          <MenuItem href="#what-are-they">What Are They?</MenuItem>
          <MenuItem href="#how-it-works">How It Works?</MenuItem>
          <MenuItem href="#types">Types</MenuItem>
          <MenuItem href="#examples">Examples</MenuItem>
          <MenuItem href="#pros-cons">Pros and Cons</MenuItem>
        </MenuList>
      </NavWrapper>
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
