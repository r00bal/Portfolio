import React from 'react'
import styled from 'styled-components/macro'
import { useSpring, animated } from 'react-spring'
import { mediaAbove } from '../utils/css-helpers'

// font-size: ${({ introMode }) => (introMode ? `1.4rem` : `1.4rem`)};

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-flow: row dense;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  ${mediaAbove.mediumScreen`
  grid-template-columns: repeat(8, minmax(0, 1fr));
  
  `}

  ${mediaAbove.largeScreen`
  grid-template-columns: repeat(12, minmax(0, 1fr));
  
  `}
`

const ItemLink = styled.a``

const ItemWrapper = styled(animated.div)`
  grid-column-end: span 4;
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`
// rgba(229, 210, 185, 1)
// rgba(0, 255, 192, 1)
// rgba(106, 97, 240, 1)
const Item = styled.div`
  //grid-column-end: span 4;
  background-color: #ffffff;
  color: #10162f;
  padding: 1rem;
  border-width: 1px;
  border-color: #10162f;
  border-color: var(--black-color);
  border-radius: 2px;
  border-style: solid;
  position: relative;
  -webkit-transition: 200ms -webkit-transform;
  transition: 200ms transform;
  display: grid;
  grid-template-rows: repeat(3, max-content) 1fr max-content;

  //min-height: 11.25rem;
  min-height: 24.5rem;
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 20px 0;
`

const Title = styled.h2`
  line-height: 2rem;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  padding: 100px 0;
  margin: 0 auto;
`

const Subtitle = styled.h3`
  text-align: center;
  line-height: 2rem;
  font-size: 1.25rem;
  color: var(--blue-color);
  font-weight: 500;
  line-height: 1.5;
  transition: all 0.2s;
`

export default function Gallery({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Gallery.Text = function GalleryText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Gallery.Item = function GalleryItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1.02]
const trans = (x, y, s) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
Gallery.ItemWrapper = function GalleryItemWrapper({ children, ...restProps }) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <ItemWrapper
      {...restProps}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </ItemWrapper>
  )
}

Gallery.ItemLink = function GalleryItemLink({ children, ...restProps }) {
  return <ItemLink {...restProps}>{children}</ItemLink>
}

Gallery.Title = function GalleryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Gallery.Subtitle = function GallerySubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
