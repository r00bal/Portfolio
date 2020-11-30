import styled from 'styled-components'
import { mediaAbove } from '../utils/css-helpers'

const ButtonLink = styled.a`
  color: var(--blue-color);
  text-decoration: none;
  text-align: center;
  padding: 0.375rem 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 100;
  min-width: 250px;
  border: 1px solid var(--blue-color);
  transition: all 0.5s ease;
  cursor: pointer;
  display: block;
  &:hover {
    color: #fff;
    border: 1px solid var(--blue-color);
    background: var(--blue-color);
  }
  ${mediaAbove.smallScreen`
  
  `}
`

export default ButtonLink
