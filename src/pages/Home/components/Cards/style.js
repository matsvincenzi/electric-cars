import styled from 'styled-components'
import breakpoint from '../../../../styles/breakpoints.js'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 75px;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media ${breakpoint.sm2} {
    gap: 15px;
  }

  @media ${breakpoint.sm1} {
    gap: 12spx;
  }
`

export const CardWrapper = styled.div`
  position: relative;
  width: 16.875rem;
  height: 23.75rem;
  perspective: 62.5rem;
  cursor: pointer;
  transition: transform 0.5s ease;

  transform-style: preserve-3d;
  transform: ${(props) =>
    props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: transform 0.45s ease-in-out;

  &:hover {
    transform: ${(props) =>
      props.isFlipped
        ? 'rotateY(180deg) scale(1.05)'
        : 'rotateY(0deg) scale(1.05)'};
  }

  @media ${breakpoint.sm1} {
    width: 8.75rem;
    height: 12.5rem;
  }

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
    transition: transform 0.6s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    flex-direction: column;
    user-select: none;
  }

  & > .front {
    background: linear-gradient(135deg, #1166dd, #5a9eff);
    color: #fff;
    text-align: center;
    padding: 1.5rem;

    .icon {
      margin-top: 1rem;
      font-size: 1.5rem;
      color: #fff;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }

  & > .back {
    background: linear-gradient(135deg, #1166dd, #5a9eff);
    color: #fff;
    transform: rotateY(180deg);
    text-align: center;
    padding: 1.5rem;
    font-size: 1rem;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.5;
      max-width: 85%;
    }

    @media ${breakpoint.sm2} {
      p {
        font-size: 0.9rem;
        line-height: 1.3;
      }
    }

    @media ${breakpoint.sm1} {
      h3 {
        font-size: 0.7rem;
        margin-bottom: 0.8rem;
      }

      p {
        font-size: 0.67rem;
      }
    }
  }
`
