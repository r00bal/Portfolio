import React from 'react'
import { Layout } from '../layouts'
import { Gallery } from '../components'

export default function Projects() {
  return (
    <Layout>
      <Gallery.Title>Projects</Gallery.Title>
      <Gallery>
        <Gallery.ItemWrapper
          css={`
            grid-column-end: span 8;
          `}
        >
          <Gallery.Item>
            <Gallery.Subtitle
              css={`
                color: red;
              `}
            >
              Netflix Clone
            </Gallery.Subtitle>
            <Gallery.Text> React, GraphQl. NodeJS</Gallery.Text>
          </Gallery.Item>
        </Gallery.ItemWrapper>
        <Gallery.ItemWrapper
          css={`
            grid-column-end: span 4;
          `}
        >
          <Gallery.Item css="">
            <Gallery.Subtitle>Liredit Clone</Gallery.Subtitle>
            <Gallery.Text> React, GraphQl. NodeJS</Gallery.Text>
          </Gallery.Item>
        </Gallery.ItemWrapper>
        <Gallery.ItemWrapper
          css={`
            grid-column-end: span 4;
          `}
        >
          <Gallery.Item>
            <Gallery.Subtitle>Sick Fits</Gallery.Subtitle>
            <Gallery.Text> React, GraphQl. NodeJS</Gallery.Text>
          </Gallery.Item>
        </Gallery.ItemWrapper>
        <Gallery.ItemWrapper
          css={`
            grid-column-end: span 8;
          `}
        >
          <Gallery.Item>
            <Gallery.Subtitle>Restaurant page</Gallery.Subtitle>
            <Gallery.Text> React, GraphQl. NodeJS</Gallery.Text>
          </Gallery.Item>
        </Gallery.ItemWrapper>
        <Gallery.ItemWrapper
          css={`
            grid-column-end: span 8;
          `}
        >
          <Gallery.Item>
            <Gallery.Subtitle>Yelp Clone</Gallery.Subtitle>
            <Gallery.Text> React, GraphQl. NodeJS</Gallery.Text>
          </Gallery.Item>
        </Gallery.ItemWrapper>
        <Gallery.ItemWrapper
          css={`
            grid-column-end: span 4;
          `}
        >
          <Gallery.Item>
            <Gallery.Subtitle>Spotify</Gallery.Subtitle>
            <Gallery.Text> React, GraphQl. NodeJS</Gallery.Text>
          </Gallery.Item>
        </Gallery.ItemWrapper>
      </Gallery>
    </Layout>
  )
}
