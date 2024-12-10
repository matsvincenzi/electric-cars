import styled from 'styled-components'

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 90%;
  margin: 2rem auto;
  overflow: hidden;
`

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.5s ease-in-out;

  .image-wrapper {
    position: relative;
    width: 100%;
    max-width: 800px;
  }

  img {
    width: 100%;
    max-width: 800px;
    height: 480px;
    object-fit: contain;
    border-radius: 15px;
    margin-bottom: 1rem;
  }

  .info {
    background: rgba(255, 255, 255, 0.9);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }
  }
`

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  background: none;
  transition: background 0.3s;

  &:hover {
    background: #3b82f6;
  }

  &.prev {
    left: -140px;
  }

  &.next {
    right: -140px;
  }
`

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  span {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
    color: #ffffff;
    transition: color 0.3s;

    &.active {
      color: #3b82f6;
    }

    &:hover {
      color: #7bb9f1;
    }
  }
`

export const ViewMoreButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #1166dd;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0b4ba0;
  }
`
