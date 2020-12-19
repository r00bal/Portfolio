import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components/macro'
import Img from 'gatsby-image'
import { mediaAbove, flexProps } from '../utils/css-helpers'
import { IconLink } from '.'

// font-size: ${({ introMode }) => (introMode ? `1.4rem` : `1.4rem`)};

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  .mt3rem {
    margin-top: 3rem;
  }

  .mt6rem {
    margin-top: 6rem;
  }

  .mb6rem {
    margin-bottom: 6rem;
  }
`
const FullWidthBox = styled.div`
  background-color: var(--darkGray-color);
  width: 100vw;
  position: relative;
  padding: 1rem;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  ${mediaAbove.mediumScreen`
  padding: 1rem 2rem 1rem 2rem;
`}
  ${mediaAbove.smallScreen`
  padding: 1rem 3rem 1rem 3rem;
`} /* width: ${({ windowWidth }) => (windowWidth ? `${windowWidth}px` : null)};
  position: relative;

  left: ${({ left }) => (left ? `-${left}px` : `0`)}; */
`

const Gallery = styled.div`
  padding: 4rem 0;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-flow: row dense;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  ${mediaAbove.smallScreen`
  grid-template-columns: repeat(8, minmax(0, 1fr));
  `}
`

const Item = styled.div`
  grid-column-end: span 8;
  ${mediaAbove.smallScreen`
  grid-column-end: span ${({ span }) => (span ? `${span}` : `4`)};
  box-shadow: 5px 15px 55px rgba(0, 0, 0, 0.2);
  `}
`

const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  ${mediaAbove.mediumScreen`
  ${flexProps}
  `}
`

const Line = styled.div`
  height: 1px;
  width: 6rem;
  border: 1px solid var(--darkGray-color);
`

const Text = styled.p`
  color: var(--black-color);
  text-align: left;
  font-size: 1rem;
  line-height: 2rem;
  width: 100%;
  max-width: 500px;
  font-weight: 300;
  align-self: flex-end;
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
const Image = styled(Img)`
  height: 100%;
  width: 100%;
`

const ImgSrc = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Title = styled.h3`
  width: 100%;
  height: 100%;
  color: var(--black-color);
  line-height: 2rem;
  font-size: 2.75rem;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 2rem;
`

const ItemLink = styled(Link)``

const ProjectIconLinkWrapper = styled(IconLink)``

export default function Project({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Project.Gallery = function ProjectGallery({ children, ...restProps }) {
  return <Gallery {...restProps}>{children}</Gallery>
}

Project.Item = function ProjectItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Project.Box = function ProjectBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>
}

Project.FullWidthBox = function ProjectFullWidthBox({ children, windowWidth = '100vw', left = '0', ...restProps }) {
  return (
    <FullWidthBox left={left} windowWidth={windowWidth} {...restProps}>
      {children}
    </FullWidthBox>
  )
}

Project.Text = function ProjectText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Project.Line = function ProjectLine({ children, ...restProps }) {
  return <Line {...restProps}>{children}</Line>
}

Project.ItemLink = function ProjectItemLink({ children, ...restProps }) {
  return <ItemLink {...restProps}>{children}</ItemLink>
}

Project.IconLink = function ProjectIconLink({ children, ...restProps }) {
  return <ProjectIconLinkWrapper {...restProps}>{children}</ProjectIconLinkWrapper>
}

Project.Title = function ProjectTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Project.ImageWrapper = function ProjectImageWrapper({ children, ...restProps }) {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}

Project.ImgSrc = function ProjectImgSrc({ children, ...restProps }) {
  return <ImgSrc {...restProps} />
}

Project.Image = function ProjectImage({ children, ...restProps }) {
  return (
    // <ImageWrapper>
    <Image {...restProps}>{children}</Image>
    // </ImageWrapper>
  )
}
