import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout } from '../layouts'
import { Gallery } from '../components'
import cart from '../assets/images/cart.svg'
import reddit from '../assets/images/reddit.svg'
import netflix from '../assets/images/netflix2.svg'
import wok from '../assets/images/wok.svg'

const ProjectsDATA = [
  {
    logo: netflix,
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'NETFLIX CLONE',
    span: 8,
  },
  {
    logo: reddit,
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'REDDIT CLONE',
    span: 4,
  },
  {
    logo: cart,
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'SICK FITS SHOP',
    span: 4,
  },
  {
    logo: wok,
    tech: 'React, GraphQl. NodeJS',
    subtitle: 'STREET FOOD',
    span: 8,
  },
]

export default function Projects({ location }) {
  return (
    <Layout location={location}>
      <Gallery.Title>Projects</Gallery.Title>
      <Gallery>
        {ProjectsDATA.map(({ subtitle, tech, logo }, index) => {
          const key = `${subtitle}_${index}`

          return (
            <Gallery.ItemWrapper key={key}>
              <Gallery.ItemLink>
                <Gallery.Item>
                  <Gallery.Subtitle>{subtitle}</Gallery.Subtitle>
                  <Gallery.ImgSrc src={logo} />
                  <Gallery.Text> {tech}</Gallery.Text>
                </Gallery.Item>
              </Gallery.ItemLink>
            </Gallery.ItemWrapper>
          )
        })}
      </Gallery>
    </Layout>
  )
}
