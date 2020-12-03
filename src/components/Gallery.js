import React, { useContext, createContext } from 'react'
import styled, { css } from 'styled-components/macro'
import { textAlignProps, marginProps, colorProps, maxWidth } from '../utils/css-helpers'

// font-size: ${({ introMode }) => (introMode ? `1.4rem` : `1.4rem`)};

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-flow: row dense;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`
const ItemWrapper = styled.div``

const Item = styled.div`
  grid-column-end: span 4;
  background-color: #ffffff;
  color: #10162f;
  padding: 1rem;
  border-width: 1px;
  border-color: #10162f;
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

Gallery.ItemWrapper = function GalleryItemWrapper({ children, ...restProps }) {
  return <ItemWrapper {...restProps}>{children}</ItemWrapper>
}

Gallery.Title = function GalleryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Gallery.Subtitle = function GallerySubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
