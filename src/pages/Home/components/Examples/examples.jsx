import React, { useState, useEffect } from 'react'
import {
  CarouselContainer,
  Slide,
  NavigationButton,
  Indicators,
  ViewMoreButton,
} from './style'

import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

import DolphinImage from '../../../../assets/images/bydDolphinn.png'
import SeaImage from '../../../../assets/images/bydSeaa.png'
import NiroImage from '../../../../assets/images/kiaNiroo.png'
import KonaImage from '../../../../assets/images/hyundaiKonaa.png'
import ModelSImage from '../../../../assets/images/teslaModel.png'
import LeafImage from '../../../../assets/images/nissanLeaf.png'
import ID4Image from '../../../../assets/images/volksIwagenId.png'

const cars = [
  {
    name: 'BYD Dolphin',
    price: '$19,990',
    description: 'Compact and affordable electric hatchback.',
    image: DolphinImage,
  },
  {
    name: 'BYD Seal',
    price: '$30,990',
    description: 'Sleek electric sedan with long range.',
    image: SeaImage,
  },
  {
    name: 'Kia Niro EV',
    price: '$39,090',
    description: 'Efficient SUV with impressive features.',
    image: NiroImage,
  },
  {
    name: 'Hyundai Kona Electric',
    price: '$33,550',
    description: 'Stylish SUV offering comfort and performance.',
    image: KonaImage,
  },
  {
    name: 'Tesla Model S',
    price: '$89,990',
    description: 'Luxury electric sedan with advanced features.',
    image: ModelSImage,
  },
  {
    name: 'Volkswagen ID.4',
    price: '$42,000',
    description: 'Electric SUV with spacious interior and great range.',
    image: ID4Image,
  },
]

const Examples = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [detailsVisible, setDetailsVisible] = useState(false)

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length)
    setDetailsVisible(false)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length)
    setDetailsVisible(false)
  }

  useEffect(() => {
    let timer
    if (!detailsVisible) {
      timer = setInterval(() => {
        handleNext()
      }, 5000)
    }
    return () => clearInterval(timer)
  }, [detailsVisible])

  return (
    <CarouselContainer>
      <Slide>
        <div className="image-wrapper">
          <img src={cars[currentIndex].image} alt={cars[currentIndex].name} />
          <NavigationButton onClick={handlePrev} className="prev">
            <FaArrowCircleLeft />
          </NavigationButton>
          <NavigationButton onClick={handleNext} className="next">
            <FaArrowCircleRight />
          </NavigationButton>
        </div>
        {detailsVisible && (
          <div className="info">
            <h3>{cars[currentIndex].name}</h3>
            <p>
              <strong>Price:</strong> {cars[currentIndex].price}
            </p>
            <p>{cars[currentIndex].description}</p>
          </div>
        )}
        <ViewMoreButton onClick={toggleDetails}>
          {detailsVisible ? 'View Less' : 'View More'}
        </ViewMoreButton>
      </Slide>
      <Indicators>
        {cars.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => {
              setCurrentIndex(index)
              setDetailsVisible(false)
            }}
          >
            ⬤
          </span>
        ))}
      </Indicators>
    </CarouselContainer>
  )
}

export default Examples
