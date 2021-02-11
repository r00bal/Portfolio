/* eslint-disable prettier/prettier */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout } from '../layouts'
import { Gallery, SEO } from '../components'

export default function Projects({ location }) {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(sort: {fields: [frontmatter___number], order: ASC}) {
        edges {
          node {
            frontmatter {
              icon {
                publicURL
              }
              key
              desc
              tech
              title
              number
            }
          }
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <Gallery.Title>Projects</Gallery.Title>
      <Gallery>
        {allMarkdownRemark.edges.map(({ node }, index) => {
          const { title, key, tech, icon } = node.frontmatter
          const url = key === 'more' ? '#' : key
          return (
            <Gallery.ItemWrapper key={key}>
              <Gallery.ItemLink to={`${url}`}>
                <Gallery.Item>
                  <Gallery.Subtitle>{title}</Gallery.Subtitle>
                  <Gallery.ImgSrc src={icon.publicURL} />
                  <Gallery.Text
                    css={`
                      max-width: 350px;
                      justify-self: end;
                      align-self: end;
                    `}
                  >
                    {' '}
                    {tech}
                  </Gallery.Text>
                </Gallery.Item>
              </Gallery.ItemLink>
            </Gallery.ItemWrapper>
          )
        })}
      </Gallery>
    </Layout>
  )
}
