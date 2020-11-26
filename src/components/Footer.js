import React from 'react'
import styled from 'styled-components'
import { mediaAbove, marginProps } from '../utils/css-helpers'
import { Button } from '.'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 10% 0 0 0;
  ${mediaAbove.smallScreen`
  flex-direction: row;
`}
`

const FooterButtonLink = styled(Button)``

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  align-content: space-between;

  width: 200px;
  margin-top: 2rem;
  ${mediaAbove.smallScreen`
   margin:0px;
`}
`

const IconLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  ${({ color }) => (color ? `color: ${color};` : `inherit`)}
  &:hover {
    color: #000;
  }
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
