import React from 'react'
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
  return (
    <HeaderContainer>
      <NavWrapper>
        <Logo href="#">
          Eletric
          <br />
          Cars
        </Logo>

        <MenuList>
          <MenuItem href="#">What Are They?</MenuItem>
          <MenuItem href="#">How It Works?</MenuItem>
          <MenuItem href="#">Types</MenuItem>
          <MenuItem href="#">Examples</MenuItem>
          <MenuItem href="#">Pros and Cons</MenuItem>
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
