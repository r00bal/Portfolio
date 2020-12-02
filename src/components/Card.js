import React, { useContext, createContext } from 'react'
import styled from 'styled-components'
import { textAlignProps, marginProps, colorProps, maxWidth } from '../utils/css-helpers'

// font-size: ${({ introMode }) => (introMode ? `1.4rem` : `1.4rem`)};

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${marginProps}
  max-width:1000px;
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 20px 0;

  ${marginProps}
  ${textAlignProps}
`

const Title = styled.h1`
  line-height: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  transition: all 0.2s;
  ${textAlignProps}
  ${marginProps}
`

const Subtitle = styled.h2`
  line-height: 2rem;
  font-size: 1.25rem;
  color: var(--blue-color);
  font-weight: 600;
  line-height: 1.5;
  transition: all 0.2s;
  ${marginProps}
  ${textAlignProps}
  ${colorProps}
`

const Special = styled.span`
  ${({ color }) => (color ? `color: ${color};` : null)}
  ${({ shadow }) => (shadow ? `text-shadow: 3px 3px ${shadow};` : null)}
  transition: all 0.2s;
  &:hover {
    ${({ color, shadow }) => (color && shadow ? `text-shadow: 3px 3px ${color};` : null)}
    ${({ shadow, color }) => (shadow && color ? `color: ${shadow};` : null)}
  }
`

export const IntroContext = createContext()

export default function Card({ children, introMode = null, ...restProps }) {
  return (
    <IntroContext.Provider value={{ introMode }}>
      <Container {...restProps}>{children}</Container>
    </IntroContext.Provider>
  )
}

Card.Special = function CardSpecial({ children, ...restProps }) {
  const { introMode } = useContext(IntroContext)
  return (
    <Special introMode={introMode} {...restProps}>
      {children}
    </Special>
  )
}

Card.Text = function CardText({ children, ...restProps }) {
  const { introMode } = useContext(IntroContext)
  return (
    <Text introMode={introMode} {...restProps}>
      {children}
    </Text>
  )
}

Card.Title = function CardTitle({ children, ...restProps }) {
  const { introMode } = useContext(IntroContext)
  return (
    <Title introMode={introMode} {...restProps}>
      {children}
    </Title>
  )
}

Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
  const { introMode } = useContext(IntroContext)
  return (
    <Subtitle introMode={introMode} {...restProps}>
      {children}
    </Subtitle>
  )
}
