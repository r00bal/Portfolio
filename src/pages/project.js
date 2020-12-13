import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout } from '../layouts'
import { Gallery } from '../components'

const ProjectDATA = {}

export default function Project({ location }) {
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
      <h1>Project hello</h1>
    </Layout>
  )
}
