import React, { useContext, createContext } from 'react'
import styled from 'styled-components'
import { mediaAbove } from '../utils/css-helpers'

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 200;
  margin: 20px 0;
  ${mediaAbove.smallScreen`
  font-size: ${({ introMode }) => (introMode ? `2.4rem` : `1.4rem`)};
 
`}

  ${mediaAbove.mediumScreen`
  font-size: ${({ introMode }) => (introMode ? `3.4rem` : `1.8rem`)};
  margin: 50px 0 0 20px;
`}
`

const Title = styled.h2`
  font-size: ${({ introMode }) => (introMode ? `2.4rem` : `1.4rem`)};
  font-weight: 700;
  letter-spacing: 0;
  max-width: 100%;

  text-align: left;
  transition: all 0.2s;
  ${mediaAbove.smallScreen`
  
  font-size: ${({ introMode }) => (introMode ? `5.4rem` : `2.2rem`)};
  max-width: 800px;
  
`}
  ${mediaAbove.mediumScreen`
  font-size: ${({ introMode }) => (introMode ? `9.4rem` : `3rem`)};
  max-width: 100%;
  
`}
`

const Special = styled.span`
  font-size: ${({ introMode }) => (introMode ? `3rem` : `2.2rem`)};
  ${({ color }) => (color ? `color: ${color};` : null)}
  ${({ shadow }) => (shadow ? `text-shadow: 3px 3px ${shadow};` : null)}
  transition: all 0.2s;
  &:hover {
    ${({ color, shadow }) => (color && shadow ? `text-shadow: 3px 3px ${color};` : null)}
    ${({ shadow, color }) => (shadow && color ? `color: ${shadow};` : null)}
  }
  ${mediaAbove.smallScreen`
   ${({ shadow }) => (shadow ? `text-shadow: 5px 5px ${shadow};` : null)}
   font-size: ${({ introMode }) => (introMode ? `6rem` : `3rem`)};
     &:hover {
    ${({ color, shadow }) => (color && shadow ? `text-shadow: 5px 5px ${color};` : null)}
   
  `}
  ${mediaAbove.mediumScreen`
   ${({ shadow }) => (shadow ? `text-shadow: 7px 7px ${shadow};` : null)}
   font-size: ${({ introMode }) => (introMode ? `10rem` : `3.8rem`)};
     &:hover {
    ${({ color, shadow }) => (color && shadow ? `text-shadow: 7px 7px ${color};` : null)}
   
  `}
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
