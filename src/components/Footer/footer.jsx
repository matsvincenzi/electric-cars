import React from 'react'
import {
  FooterComp,
  LogoBox,
  Logo,
  LinksWrapper,
  NavigationContainer,
  NavLink,
  SocialLinks,
  SocialLink,
  Copyright,
} from './style'

import logo from '../../assets/images/logo.png'
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'

export const Footer = () => {
  return (
    <FooterComp>
      <LogoBox>
        <Logo src={logo} alt="Logo" />
      </LogoBox>

      <LinksWrapper>
        <NavigationContainer>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavigationContainer>

        <SocialLinks>
          <SocialLink
            href="https://www.instagram.com/vincenzicode/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/mateusvincenzi/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://github.com/matsvincenzi"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://discord.gg/NHAYF9EryF"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord />
          </SocialLink>
        </SocialLinks>

        <Copyright>&copy; 2024 Mateus Vincenzi. All rights reserved.</Copyright>
      </LinksWrapper>
    </FooterComp>
  )
}