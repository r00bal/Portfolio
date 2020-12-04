import React, { useContext, createContext } from 'react'
import styled from 'styled-components'
import { textAlignProps, marginProps, colorProps, maxWidth } from '../utils/css-helpers'

// font-size: ${({ introMode }) => (introMode ? `1.4rem` : `1.4rem`)};

const Container = styled.section`
  min-height: calc(100vh - 300px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled.h1`
  display: block;
  width: 100%;
  font-size: clamp(100%, 3rem + 8vw, 10rem);
  font-weight: 900;

  text-align: left;
  transition: all 0.2s;
`

const Text = styled.p`
  display: block;
  font-size: clamp(100%, 1rem + 2vw, 2rem);
  font-weight: 300;

  margin: 3% 0;
  text-align: left;
`

const Special = styled.span`
  font-size: clamp(100%, 4rem + 10vw, 12rem);
  ${({ color }) => (color ? `color: ${color};` : null)}
  ${({ shadow }) => (shadow ? `text-shadow: 5px 5px ${shadow};` : null)}
  transition: all 0.2s;
  &:hover {
    ${({ color, shadow }) => (color && shadow ? `text-shadow: 5px 5px ${color};` : null)}
    ${({ shadow, color }) => (shadow && color ? `color: ${shadow};` : null)}
  }
`

export const IntroContext = createContext()

export default function Intro({ children, introMode = null, ...restProps }) {
  return (
    <IntroContext.Provider value={{ introMode }}>
      <Container {...restProps}>{children}</Container>
    </IntroContext.Provider>
  )
}

Intro.Special = function IntroSpecial({ children, ...restProps }) {
  const { introMode } = useContext(IntroContext)
  return (
    <Special introMode={introMode} {...restProps}>
      {children}
    </Special>
  )
}

Intro.Text = function IntroText({ children, ...restProps }) {
  const { introMode } = useContext(IntroContext)
  return (
    <Text introMode={introMode} {...restProps}>
      {children}
    </Text>
  )
}

Intro.Title = function IntroTitle({ children, ...restProps }) {
  const { introMode } = useContext(IntroContext)
  return (
    <Title introMode={introMode} {...restProps}>
      {children}
    </Title>
  )
}
