import styled from 'styled-components'
import { mediaAbove } from '../utils/css-helpers'

const ButtonLink = styled.a`
  color: var(--blue-color);
  text-decoration: none;
  text-align: center;
  padding: 0.675rem 1.275rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 100;
  min-width: 250px;
  border: 1px solid var(--blue-color);
  transition: all 0.5s ease;
  cursor: pointer;
  display: block;
  &:hover {
    color: var(--white-color);
    border: 1px solid var(--blue-color);
    background: var(--blue-color);
  }
  ${mediaAbove.smallScreen`
  
  `}
`

export default ButtonLink
