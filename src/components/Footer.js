import React from 'react'
import styled from 'styled-components'
import { mediaAbove } from '../utils/css-helpers'
import { Button } from '.'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin: 10% 0 0 0;
  ${mediaAbove.smallScreen`
  flex-direction: row;
  max-width: 800px;
`}
`

const FooterButtonLink = styled(Button)``

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  max-width: 250px;
  margin-top: 2rem;
  ${mediaAbove.smallScreen`
   margin:0px;
   max-width: 350px;
`}
`

const IconLink = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  cursor: pointer;
  color: inherit;
  ${({ color }) => (color ? `color: ${color};` : `inherit`)}
  &:hover {
    color: #000;
  }
  ${mediaAbove.smallScreen`
   font-size: 1rem;
`}
  ${mediaAbove.mediumScreen`
   font-size: 1.5rem;
`}
`

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Footer.ButtonLink = function FooterButton({ children, ...restProps }) {
  return <FooterButtonLink {...restProps}>{children}</FooterButtonLink>
}

Footer.IconLink = function FooterIconLink({ children, ...restProps }) {
  return <IconLink {...restProps}>{children}</IconLink>
}

Footer.Box = function FooterBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>
}
