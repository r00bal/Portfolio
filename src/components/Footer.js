import React from 'react'
import styled from 'styled-components'
import { mediaAbove, marginProps, maxWidth, colorProps, hoverProps } from '../utils/css-helpers'

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: var(--black-color);
  color: var(--white-color);
  ${marginProps}
`

const Wrapper = styled.div`
  padding: 1rem;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  ${maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${mediaAbove.mediumScreen`
  flex-direction: row;
 justify-content: space-between;
`}
  ${mediaAbove.largeScreen`
 padding-left: 3rem;
 padding-right: 3rem;
`}
`

const Box = styled.div`
  width: fit-content;
  ${maxWidth};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const IconLink = styled.a`
  padding: 1rem;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  ${colorProps}
  ${hoverProps}
`
const Text = styled.p`
  font-size: 1rem;
  font-weight: 200;
`

export default function Footer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Footer.Wrapper>{children}</Footer.Wrapper>
    </Container>
  )
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
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
