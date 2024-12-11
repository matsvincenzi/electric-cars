import React from 'react'

import { Header } from '../../components/Header/header'
import { Footer } from '../../components/Footer/footer'

import { Cards } from './components/Cards/cards'
import Examples from './components/Examples/examples'

import howItWorkImage from '../../assets/images/howItWork.png'
import ProsImage from '../../assets/images/pros.png'
import ConsImage from '../../assets/images/cons.png'

import {
  PageContainer,
  WhatAreTheySection,
  Title,
  DividerWAT,
  Paragraph,
  HowItWorksSection,
  DividerHIW,
  ImageContainer,
  TypesSection,
  DividerTYP,
  ExamplesSection,
  ProsAndConsSection,
  ProsAndConsContainer,
  Item,
  TitleProsAndCons,
  List,
  ListItem,
  Image,
} from './style'

export const Home = () => {
  return (
    <PageContainer>
      <Header />

      <WhatAreTheySection id="what-are-they">
        <Title>What is a Sustainable Car?</Title>
        <DividerWAT />
        <Paragraph>
          Sustainable cars are vehicles designed to reduce their environmental
          impact throughout their lifecycle, from production to disposal. They
          use alternative energy sources like electricity or hydrogen and focus
          on energy efficiency and recyclable materials to lower emissions and
          promote sustainability. These cars also prioritize reducing air
          pollution, making cities cleaner and healthier.
        </Paragraph>
      </WhatAreTheySection>

      <HowItWorksSection id="how-it-works">
        <Title>How Does a Sustainable Car Work?</Title>
        <DividerHIW />
        <Paragraph>
          Sustainable cars work by utilizing clean energy sources, such as
          electricity or hydrogen. These vehicles are designed with advanced
          technology to reduce emissions and enhance energy efficiency. Inside,
          the car contains high-capacity batteries that store the energy
          required to power the motor and move the car, allowing it to operate
          with minimal environmental impact.
        </Paragraph>

        <ImageContainer>
          <img src={howItWorkImage} alt="Car interior" />
        </ImageContainer>
      </HowItWorksSection>

      <TypesSection id="types">
        <Title>Types of Electric Cars</Title>
        <DividerTYP />
        <Cards />
      </TypesSection>

      <ExamplesSection id="examples">
        <Title>Examples of Electric Cars</Title>
        <DividerWAT />
        <Examples />
      </ExamplesSection>

      <ProsAndConsSection id="pros-cons">
        <ProsAndConsContainer>
          <Item>
            <TitleProsAndCons>Advantages</TitleProsAndCons>
            <List>
              <ListItem>Reduces air pollution</ListItem>
              <ListItem>Lower operational costs</ListItem>
              <ListItem>Environmentally friendly materials</ListItem>
              <ListItem>Reduces noise pollution</ListItem>
            </List>
            <Image src={ProsImage} alt="Advantages illustration" />
          </Item>
          <Item>
            <TitleProsAndCons>Disadvantages</TitleProsAndCons>
            <List>
              <ListItem>Higher upfront costs</ListItem>
              <ListItem>Limited charging infrastructure</ListItem>
              <ListItem>Battery disposal concerns</ListItem>
              <ListItem>Limited driving range</ListItem>
            </List>
            <Image src={ConsImage} alt="Disadvantages illustration" />
          </Item>
        </ProsAndConsContainer>
      </ProsAndConsSection>

      <Footer />
    </PageContainer>
  )
}
