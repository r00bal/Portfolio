import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { mediaAbove } from '../utils/css-helpers'
import { RollTrail } from '../animations'

const RotateDiv = styled.div`
  transform: rotateY(80deg);
  transform-origin: left;
  width: fit-content;
  margin: 0 auto;
  transition: transform 0.5s ease-in;
`

const ButtonLinkWrapper = styled.a`
  position: relative;
  color: var(--blue-color);
  text-decoration: none;
  text-align: center;
  padding: 1.275rem 0.675rem;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 100;
  width: fit-content;
  min-width: 200px;
  cursor: pointer;
  display: block;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid var(--blue-color);
    transition: transform 0.2s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &:hover {
    //color: var(--white-color);
    &:after {
      transform: scale(1.05);
    }

    ${RotateDiv} {
      transform: rotateY(0deg);
    }

    //border: 1px solid var(--blue-color);
    //background: var(--blue-color);
  }
  ${mediaAbove.smallScreen`
  
  `}
`

const ButtonLink = ({ children }) => {
  const [hover, setHover] = useState(false)

  return (
    <ButtonLinkWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div
        css={`
          display: ${hover ? 'none' : 'block'};
        `}
      >
        {children.split('')}
      </div>
      <div
        css={`
          display: ${hover ? 'block' : 'none'};

          /* position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          height: 100%; */
        `}
      >
        <RollTrail from={{ y: 8, x: 90, o: 1, z: 0 }} to={{ y: 0, x: 0, o: 1, z: 0 }} state={hover}>
          {children.split('')}
        </RollTrail>
      </div>
    </ButtonLinkWrapper>
  )
}

export default ButtonLink
