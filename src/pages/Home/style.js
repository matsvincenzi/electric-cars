import styled from 'styled-components'

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
  text-align: center;
  min-height: 30vh;
  margin: 7.8rem 0 70px 0;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
`

export const DividerWAT = styled.hr`
  width: 35%;
  height: 2px;
  border: none;
  margin: 20px auto 40px;
  background-color: #1166dd;
`

export const Paragraph = styled.p`
  font-size: 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: justify;
`

export const HowItWorksSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 60vh;
  margin-bottom: 7.8rem;
`

export const DividerHIW = styled.hr`
  width: 45%;
  height: 2px;
  border: none;
  margin: 20px auto 40px;
  background-color: #1166dd;
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
  }
`

export const TypesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 7.8rem;
`

export const DividerTYP = styled.hr`
  width: 33%;
  height: 2px;
  border: none;
  margin: 20px auto 40px;
  background-color: #1166dd;
`

export const ExamplesSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 7.8rem;
`

export const ProsAndConsSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15rem;
  min-height: 95vh;
`

export const ProsAndConsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
`
export const TitleProsAndCons = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 50px;
  margin-top: 45px;
`

export const List = styled.ul`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-left: 37%;
  margin-right: auto;
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
`
