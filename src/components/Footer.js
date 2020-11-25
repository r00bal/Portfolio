import React from 'react'
import styled from 'styled-components'
import { flexProps, marginProps } from '../utils/css-helpers'
import { Button } from '.'

const Container = styled.footer`
  ${({ width }) => (width ? `width: ${width};` : `width:100%;`)}
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth};` : null)}
  ${flexProps}
  ${marginProps}
`

const FooterButtonLink = styled(Button)``

const Box = styled.div`
  ${({ width }) => (width ? `width: ${width};` : `width:100%;`)}
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth};` : null)}
  ${flexProps}
  ${marginProps}
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
