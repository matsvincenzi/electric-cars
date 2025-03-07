import React, { useState } from 'react'
import { CardContainer, CardWrapper } from './style'
import { FaHandPointer } from 'react-icons/fa'

export const Cards = () => {
  const cardData = [
    {
      title: 'Conventional Hybrid - (HEV)',
      description:
        'Combines electric motor and combustion engine, recharging the battery while driving, providing fuel economy.',
    },
    {
      title: 'Plug-in Hybrid - (PHEV)',
      description:
        'Has a larger battery, which can be recharged from an outlet, offering more electric range for short trips.',
    },
    {
      title: 'Battery Electric Vehicle - (BEV)',
      description:
        'Works 100% with electricity, providing a clean driving experience with no emissions of pollutants.',
    },
    {
      title: 'Fuel Cell Electric Vehicle -  (FCEV)',
      description:
        'Uses hydrogen as a power source, generating electricity for the motor and only water as a byproduct.',
    },
  ]

  const [flipped, setFlipped] = useState(Array(cardData.length).fill(false))

  const handleCardClick = (index) => {
    const newFlipped = [...flipped]
    newFlipped[index] = !newFlipped[index]
    setFlipped(newFlipped)
  }

  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <CardWrapper
          key={index}
          onClick={() => handleCardClick(index)}
          isFlipped={flipped[index]}
        >
          <div className="front">
            <h3>{card.title}</h3>
            <FaHandPointer className="icon" />
          </div>
          <div className="back">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </CardWrapper>
      ))}
    </CardContainer>
  )
}
