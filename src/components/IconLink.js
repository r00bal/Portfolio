import styled from 'styled-components'
import { colorProps, hoverProps } from '../utils/css-helpers'

const IconLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  ${colorProps}
  ${hoverProps}
`

export default IconLink
