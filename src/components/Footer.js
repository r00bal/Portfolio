import React from 'react'
import styled from 'styled-components'
import { mediaAbove, marginProps } from '../utils/css-helpers'
import { ButtonLink } from '.'

const Container = styled.footer`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  ${marginProps}
`

const Box = styled.div``

const IconLink = styled.a`
  height: 30px;
  padding: 1rem;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  color: inherit;
  ${({ color }) => (color ? `color: ${color};` : `inherit`)}
  &:hover {
    color: #000;
  }
`
const Text = styled.p`
  height: 30px;
`

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Footer.ButtonLink = function FooterButton({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Footer.IconLink = function FooterIconLink({ children, ...restProps }) {
  return <IconLink {...restProps}>{children}</IconLink>
}

Footer.Box = function FooterBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>
}
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
