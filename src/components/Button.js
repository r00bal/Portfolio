import styled from 'styled-components'
import { mediaAbove } from '../utils/css-helpers'

const ButtonLink = styled.a`
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
    transition: transform 0.8s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &:hover {
    //color: var(--white-color);
    &:after {
      transform: scale(1.1);
    }
    //border: 1px solid var(--blue-color);
    //background: var(--blue-color);
  }
  ${mediaAbove.smallScreen`
  
  `}
`

export default ButtonLink
