import styled from 'styled-components'
import breakpoint from '../../../../styles/breakpoints.js'

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 90%;
  margin: 32px auto;
  overflow: hidden;

  @media ${breakpoint.sm1} {
    margin: 1px auto;
  }
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
    max-width: 50rem;
  }

  img {
    width: 100%;
    max-width: 50rem;
    height: 30rem;
    object-fit: contain;
    border-radius: 15px;
    margin-bottom: 16px;
  }

  .info {
    background: var(--whiteDefault);
    padding: 24px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    h3 {
      font-size: 32px;
      margin-bottom: 16px;
    }

    p {
      font-size: 19.2px;
      margin: 8px 0;
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
  font-size: 32px;
  color: var(--whiteDefault);
  cursor: pointer;
  background: none;
  transition: background 0.3s;

  &:hover {
    background: var(--blue2);
  }

  &.prev {
    left: -6.25rem;
  }

  &.next {
    right: -6.25rem;
  }
`

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  span {
    font-size: 24px;
    margin: 0 8px;
    cursor: pointer;
    color: var(--whiteDefault);
    transition: color 0.3s;

    &.active {
      color: var(--blue2);
    }

    &:hover {
      color: var(--blue4);
    }
  }
`

export const ViewMoreButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: var(--blue1);
  border: none;
  border-radius: 8px;
  color: var(--whiteDefault);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--blue0);
  }
`
