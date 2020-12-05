import React from 'react'
import { Layout } from '../layouts'
import { Gallery } from '../components'

const ProjectsDATA = [
  {
    name: 'Netflix Clone',
    tech: 'React, GraphQl. NodeJS',
    desc: '',
    span: 8,
  },
  {
    name: 'Liredit Clone',
    tech: 'React, GraphQl. NodeJS',
    desc: '',
    span: 4,
  },
  {
    name: 'Sick Fits',
    tech: 'React, GraphQl. NodeJS',
    desc: '',
    span: 4,
  },
  {
    name: 'Restaurant page',
    tech: 'React, GraphQl. NodeJS',
    desc: '',
    span: 8,
  },
  {
    name: 'Yelp Clone',
    tech: 'React, GraphQl. NodeJS',
    desc: '',
    span: 8,
  },
  {
    name: 'Spotify API app',
    tech: 'React, GraphQl. NodeJS',
    desc: '',
    span: 4,
  },
]

export default function Projects({ location }) {
  return (
    <Layout location={location}>
      <Gallery.Title>Projects</Gallery.Title>
      <Gallery>
        {ProjectsDATA.map(({ name, tech, span }, index) => {
          const key = `${name}_${index}`

          return (
            <Gallery.ItemWrapper
              key={key}
              span={span}
              // css={`
              //   grid-column-end: span ${({ span }) => span};
              // `}
            >
              <Gallery.ItemLink>
                <Gallery.Item>
                  <Gallery.Subtitle>Netflix Clone</Gallery.Subtitle>
                  <Gallery.Text> React, GraphQl. NodeJS</Gallery.Text>
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
