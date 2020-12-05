import React from 'react'
import styled from 'styled-components'
import { mediaAbove, marginProps, maxWidth, colorProps, hoverProps, textAlignProps } from '../utils/css-helpers'
import { ButtonLink } from '.'

const Container = styled.footer`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 400px;
  //background-color: var(--black-color);
  color: var(--white-color);
  ${marginProps}
  ${mediaAbove.mediumScreen`
  height: 250px;
`}
`

const Wrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  height: 90%;
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
const FooterButton = styled(ButtonLink)``

const Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${mediaAbove.mediumScreen`
 flex-direction: row;
min-width:450px;
max-width:600px;
`}
`

const IconWrapper = styled.div`
  z-index: 100;
  display: block;
  width: 230px;
`

const IconLink = styled.a`
  padding: 1rem;
  text-decoration: none;
  font-size: 0.8rem;
  cursor: pointer;
  ${colorProps}
  ${hoverProps}
`
const Text = styled.p`
  color: var(--black-color);
  font-size: 1rem;
  font-weight: 200;
`

const Subtitle = styled.h3`
  color: var(--black-color);
  line-height: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  transition: all 0.2s;
  text-align: center;
  ${mediaAbove.mediumScreen`
 font-size: 2rem;
 text-align: left;
`}
`

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.IconLink = function FooterIconLink({ children, ...restProps }) {
  return <IconLink {...restProps}>{children}</IconLink>
}

Footer.Button = function FooterButtonLink({ children, ...restProps }) {
  return <FooterButton {...restProps}>{children}</FooterButton>
}

Footer.Box = function FooterBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>
}

Footer.IconWrapper = function FooterIconWrapper({ children, ...restProps }) {
  return <IconWrapper {...restProps}>{children}</IconWrapper>
}

Footer.Subtitle = function FooterSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
