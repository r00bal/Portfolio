import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout } from '../layouts'
import { Gallery } from '../components'
import cart from '../assets/images/icons/cart.svg'
import reddit from '../assets/images/icons/reddit.svg'
import netflix from '../assets/images/icons/netflix2.svg'
import wok from '../assets/images/icons/wok.svg'

const ProjectsDATA = [
  { path: 'netflixclone', logo: netflix, tech: 'React, GraphQl. NodeJS', subtitle: 'NETFLIX CLONE', span: 8 },
  {
    path: 'redditclone',
    logo: reddit,
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'REDDIT CLONE',
    span: 4,
  },
  {
    path: 'sickfits',
    logo: cart,
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'SICK FITS SHOP',
    span: 4,
  },
  {
    path: 'streetwok',
    logo: wok,
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'STREET FOOD',
    span: 8,
  },
]

export default function Projects({ location }) {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark {
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
            }
          }
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      {console.log(allMarkdownRemark.edges)}
      <Gallery.Title>Projects</Gallery.Title>
      <Gallery>
        {allMarkdownRemark.edges.map(({ node }, index) => {
          const { title, key, desc, tech, icon } = node.frontmatter
          console.log(node.frontmatter)
          return (
            <Gallery.ItemWrapper key={key}>
              <Gallery.ItemLink to={`${key}`}>
                <Gallery.Item>
                  <Gallery.Subtitle>{title}</Gallery.Subtitle>
                  <Gallery.ImgSrc src={icon.publicURL} />
                  <Gallery.Text
                    css={`
                      max-width: 500px;
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
