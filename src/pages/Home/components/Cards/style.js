import styled from 'styled-components'
import breakpoint from '../../../../styles/breakpoints.js'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 75px;
  justify-content: center;
  align-items: center;
  padding: 32px;

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
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
    color: var(--whiteDefault);
    flex-direction: column;
    user-select: none;
  }

  & > .front {
    background: linear-gradient(135deg, #1166dd, #5a9eff);
    color: var(--whiteDefault);
    text-align: center;
    padding: 24px;

    .icon {
      margin-top: 16px;
      font-size: 24px;
      color: var(--whiteDefault);
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }

  & > .back {
    background: linear-gradient(135deg, #1166dd, #5a9eff);
    color: var(--whiteDefault);
    transform: rotateY(180deg);
    text-align: center;
    padding: 24px;
    font-size: 16px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 19px;
      margin-bottom: 32px;
    }

    p {
      font-size: 14.4px;
      line-height: 1.5;
      max-width: 85%;
    }

    @media ${breakpoint.sm2} {
      p {
        font-size: 14.4px;
        line-height: 1.3;
      }
    }

    @media ${breakpoint.sm1} {
      h3 {
        font-size: 11.2px;
        margin-bottom: 12.8px;
      }

      p {
        font-size: 10.5px;
      }
    }
  }
`
