import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout } from '../layouts'
import { Gallery, Intro } from '../components'

const ProjectsDATA = [
  {
    logo: 'Netflix',
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'NETFLIX CLONE',
    span: 8,
  },
  {
    logo: 'Liredit Clone',
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'REDDIT CLONE',
    span: 4,
  },
  {
    logo: 'Sick Fits',
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'SICK FITS SHOP',
    span: 4,
  },
  {
    logo: 'Restaurant page',
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'STREET FOOD',
    span: 8,
  },
]

export default function Projects({ location }) {
  const { allImageSharp } = useStaticQuery(graphql`
    query gallery {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  const { edges } = allImageSharp
  return (
    <Layout location={location}>
      {console.log(edges)}
      <Gallery.Title>Projects</Gallery.Title>
      <Gallery>
        {ProjectsDATA.map(({ subtitle, tech, logo }, index) => {
          const key = `${subtitle}_${index}`

          return (
            <Gallery.ItemWrapper
              key={key}
              // css={`
              //   grid-column-end: span ${({ span }) => span};
              // `}
            >
              <Gallery.ItemLink>
                <Gallery.Item>
                  <Gallery.Subtitle>{subtitle}</Gallery.Subtitle>
                  <Gallery.Logo>{logo}</Gallery.Logo>
                  <Gallery.Text> {tech}</Gallery.Text>
                  {/* <Gallery.Image fluid={edges[index].node.fluid} /> */}
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
