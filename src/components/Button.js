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
  margin: 2px;
  position: relative;
  color: var(--blue-color);
  text-decoration: none;
  text-align: center;
  padding: 1.275rem 0.685rem 1.275rem 0.68rem;
  font-size: 1rem;
  line-height: 1;
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

const ButtonLink = ({ children, ...rest }) => {
  const [hover, setHover] = useState(0)

  return (
    <ButtonLinkWrapper {...rest} onMouseEnter={() => setHover(hover + 1)}>
      <div>
        <RollTrail from={{ y: 0, x: 0, o: 1, z: 0 }} to={{ y: -5, x: 0, o: 0, z: 0 }} state={hover}>
          {children.split('')}
        </RollTrail>
      </div>

      <div
        css={`
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          margin: auto;
        `}
      >
        <RollTrail from={{ y: 30, x: 90, o: 0, z: 0 }} to={{ y: 21, x: 0, o: 1, z: 0 }} state={hover}>
          {children.split('')}
        </RollTrail>
      </div>
    </ButtonLinkWrapper>
  )
}

export default ButtonLink
