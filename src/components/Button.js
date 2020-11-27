import styled from 'styled-components'
import { mediaAbove } from '../utils/css-helpers'

const Button = styled.a`
  color: var(--blue-color);
  font-size: 1rem;
  letter-spacing: 4px;
  text-decoration: none;
  text-align: center;
  padding: 12px 18px;
  border: 1px solid var(--blue-color);
  transition: all 0.5s ease;
  cursor: pointer;
  display: block;
  width: 100%;
  max-width: 350px;
  &:hover {
    color: #fff;
    border: 1px solid var(--blue-color);
    background: var(--blue-color);
  }
  ${mediaAbove.smallScreen`
  
  `}

  ${mediaAbove.mediumScreen`
  padding: 20px 26px;
  font-size: 1.2rem;
  `}
`

export default Button
