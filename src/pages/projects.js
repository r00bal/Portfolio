import React from 'react'
import { Layout } from '../layouts'
import { Gallery } from '../components'

const ProjectsDATA = [
  {
    name: 'Netflix Clone',
    tech: 'React, GraphQl. NodeJS',
    icon: 'NETFLIX CLONE',
    span: 8,
  },
  {
    name: 'Liredit Clone',
    tech: 'React, GraphQl. NodeJS',
    icon: 'REDDIT CLONE',
    span: 4,
  },
  {
    name: 'Sick Fits',
    tech: 'React, GraphQl. NodeJS',
    icon: 'SICK FITS SHOP',
    span: 4,
  },
  {
    name: 'Restaurant page',
    tech: 'React, GraphQl. NodeJS',
    icon: 'STREET FOOD',
    span: 8,
  },
]

export default function Projects({ location }) {
  return (
    <Layout location={location}>
      <Gallery.Title>Projects</Gallery.Title>
      <Gallery>
        {ProjectsDATA.map(({ name, tech, icon }, index) => {
          const key = `${name}_${index}`

          return (
            <Gallery.ItemWrapper
              key={key}
              // css={`
              //   grid-column-end: span ${({ span }) => span};
              // `}
            >
              <Gallery.ItemLink>
                <Gallery.Item>
                  <Gallery.Image> {icon}</Gallery.Image>
                  <Gallery.Subtitle>{name}</Gallery.Subtitle>
                  <Gallery.Text> {tech}</Gallery.Text>
                </Gallery.Item>
              </Gallery.ItemLink>
            </Gallery.ItemWrapper>
          )
        })}

        {/* <Gallery.ItemWrapper
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
        </Gallery.ItemWrapper> */}
      </Gallery>
    </Layout>
  )
}
