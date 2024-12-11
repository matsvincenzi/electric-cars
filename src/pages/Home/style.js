import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints.js'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d7e9ff;
  min-height: 100vh;
`

export const WhatAreTheySection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-height: 30vh;
  margin: 7.8rem 0 70px 0;

  @media ${breakpoint.sm2} {
    margin: 5rem 0 90px 0;
  }

  @media ${breakpoint.sm1} {
    margin: 4rem 0 110px 0;
    min-height: 25vh;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;

  @media ${breakpoint.sm2} {
    font-size: 28px;
  }

  @media ${breakpoint.sm1} {
    font-size: 24px;
    max-width: 250px;
  }
`

export const DividerWAT = styled.hr`
  width: 35%;
  height: 2px;
  border: none;
  margin: 20px auto 40px;
  background-color: #1166dd;

  @media ${breakpoint.sm2} {
    width: 50%;
  }

  @media ${breakpoint.sm1} {
    width: 60%;
  }
`

export const Paragraph = styled.p`
  font-size: 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: justify;

  @media ${breakpoint.md1} {
    font-size: 19px;
    max-width: 740px;
    padding: 0 10px;
  }

  @media ${breakpoint.sm2} {
    font-size: 18px;
    max-width: 550px;
    padding: 0 10px;
  }

  @media ${breakpoint.sm1} {
    font-size: 16px;
    max-width: 320px;
    padding: 0 10px;
  }
`

export const HowItWorksSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  margin-bottom: 7.8rem;

  @media ${breakpoint.sm2} {
    margin-bottom: 90px;
  }

  @media ${breakpoint.sm1} {
    margin-bottom: 110px;
  }
`

export const DividerHIW = styled.hr`
  width: 45%;
  height: 2px;
  border: none;
  margin: 20px auto 40px;
  background-color: #1166dd;

  @media ${breakpoint.sm2} {
    width: 50%;
  }

  @media ${breakpoint.sm1} {
    width: 60%;
  }
`

export const ImageContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 55%;
    height: auto;
    border-radius: 10px;
    margin-left: 17px;

    @media ${breakpoint.md1} {
      width: 66%;
      margin-left: 11px;
    }

    @media ${breakpoint.sm2} {
      width: 75%;
      margin-left: 10px;
    }

    @media ${breakpoint.sm1} {
      width: 75%;
      margin-left: 9px;
    }
  }
`

export const TypesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  margin-bottom: 7.8rem;

  @media ${breakpoint.sm2} {
    margin-bottom: 90px;
  }

  @media ${breakpoint.sm1} {
    margin-bottom: 110px;
  }
`

export const DividerTYP = styled.hr`
  width: 33%;
  height: 2px;
  border: none;
  margin: 20px auto 40px;
  background-color: #1166dd;

  @media ${breakpoint.sm2} {
    width: 50%;
  }

  @media ${breakpoint.sm1} {
    width: 60%;
  }
`

export const ExamplesSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 7.8rem;

  @media ${breakpoint.sm2} {
    margin-bottom: 90px;
  }

  @media ${breakpoint.sm1} {
    margin-bottom: 110px;
  }
`

export const ProsAndConsSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15rem;
  min-height: 95vh;

  @media ${breakpoint.sm2} {
    margin-bottom: 130px;
  }

  @media ${breakpoint.sm1} {
    margin-bottom: 150px;
  }
`

export const ProsAndConsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${breakpoint.sm2} {
    flex-direction: column;
  }
`

export const Item = styled.div`
  width: 50%;
  padding: 20px;
  text-align: center;

  &:first-child {
    background-color: var(--blackDefault);
    color: white;
  }

  &:last-child {
    background-color: #1166dd;
    color: white;
  }

  @media ${breakpoint.sm2} {
    width: 100%;
  }
`
export const TitleProsAndCons = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 50px;
  margin-top: 45px;

  @media ${breakpoint.sm2} {
    font-size: 28px;
  }

  @media ${breakpoint.sm1} {
    font-size: 24px;
  }
`

export const List = styled.ul`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-left: 37%;
  margin-right: auto;

  @media ${breakpoint.bg1} {
    margin-left: 30%;
  }

  @media ${breakpoint.md1} {
    margin-left: 25%;
  }

  @media ${breakpoint.sm2} {
    margin-left: 10%;
  }

  @media ${breakpoint.sm1} {
    margin-left: 5%;
  }
`

export const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`

export const Image = styled.img`
  margin-top: 50px;
  width: 80%;
  height: 470px;
  border-radius: 10px;
  object-fit: cover;

  @media ${breakpoint.sm2} {
    width: 100%;
    height: auto;
  }
`
