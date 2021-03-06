import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components/macro'
import { useSpring, animated } from 'react-spring'
import Img from 'gatsby-image'
import { mediaAbove } from '../utils/css-helpers'

// font-size: ${({ introMode }) => (introMode ? `1.4rem` : `1.4rem`)};

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-flow: row dense;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  ${mediaAbove.mediumScreen`
  grid-template-columns: repeat(8, minmax(0, 1fr));
  
  `}

  ${mediaAbove.largeScreen`
  grid-template-columns: repeat(8, minmax(0, 1fr));
  
  `}
`

// rgba(229, 210, 185, 1)
// rgba(0, 255, 192, 1)
// rgba(106, 97, 240, 1)
const Item = styled.div`
  overflow: hidden;
  //grid-column-end: span 4;
  background-color: var(--blackGray-color);
  color: var(--black-color);
  padding: 1rem;
  /* border-width: 1px;
  border-color: #10162f;
  border-color: var(--black-color);
  border-style: solid; */
  border-radius: 2px;
  box-shadow: rgba(106, 97, 240, 0.5) 3px 4px 30px;
  position: relative;
  -webkit-transition: 200ms -webkit-transform;
  transition: 200ms transform;
  display: grid;
  /* grid-template-rows: repeat(3, max-content) 1fr max-content; */
  grid-template-rows: 50px 200px 1fr;

  //min-height: 11.25rem;
  min-height: 24.5rem;
`

const Text = styled.p`
  color: var(--white-color);
  font-size: 0.8rem;
  line-height: 1.2rem;
  font-weight: 500;
  margin: 20px 0;
  text-align: right;
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Image = styled(Img)`
  height: 100%;
  min-height: 100%;
`

const ImgSrc = styled.img`
  width: 100%;
  max-width: 600px;
  max-height: 200px;
  height: 100%;
  margin: 0 auto;
`

const Subtitle = styled.h5`
  font-size: 1.2rem;
  color: var(--white-color);
`
const Logo = styled.h4`
  align-self: center;
  font-size: 4.5rem;
  height: 6rem;
  color: var(--blue-color);
  text-shadow: 5px 5px var(--green-color);
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
  &::first-letter {
  }
`

const Title = styled.h2`
  line-height: 2rem;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  padding: 50px 0;
  margin: 0 auto;
`

const ItemLink = styled(Link)``

const ItemWrapper = styled(animated.div)`
  position: relative;
  grid-column-end: span 4;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    ${ImageWrapper} {
      top: 0;
    }
  }
`

export default function Gallery({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Gallery.Text = function GalleryText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Gallery.Subtitle = function GallerySubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Gallery.Item = function GalleryItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Gallery.Logo = function GalleryLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>
}

const calc = (x, y) => [-(y - window.innerHeight / 2) / 60, (x - window.innerWidth / 2) / 60, 1.08]
const trans = (x, y, s) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
Gallery.ItemWrapper = function GalleryItemWrapper({ children, ...restProps }) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 3, tension: 350, friction: 28 } }))
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

Gallery.ImgSrc = function GalleryImgSrc({ children, ...restProps }) {
  return <ImgSrc {...restProps} />
}

Gallery.Image = function GalleryImage({ children, ...restProps }) {
  return (
    <ImageWrapper>
      <Image {...restProps}>{children}</Image>
    </ImageWrapper>
  )
}
