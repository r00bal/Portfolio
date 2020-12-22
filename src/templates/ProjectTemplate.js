import React from 'react'
import styled from 'styled-components/macro'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Layout } from '../layouts'
import { Project, ButtonLink, Footer } from '../components'
import { useWindowSize } from '../hooks'
import { SlideIn } from '../animations'

export default function ProjectTemplate({ location, data }) {
  const windowWidth = useWindowSize().width

  const left = windowWidth > 1000 ? (windowWidth - 1000) / 2 : 0
  const { allFile, markdownRemark } = data
  const { title, desc, tech } = markdownRemark.frontmatter
  return (
    <Layout location={location}>
      {console.log(allFile)}
      {console.log(markdownRemark)}
      <Project>
        <Project.Image
          fluid={allFile.edges[0].node.childImageSharp.fluid}
          css={`
            border: 1px solid var(--black-color);
            max-height: 600px;
            margin: 0 auto;
          `}
        />
        <Project.Box className="mt6rem">
          <SlideIn d={100}>
            <Project.Title>{title}</Project.Title>
          </SlideIn>

          <Project.Line className="mt3rem" />

          <Project.Box
            css={`
              width: fit-content;
              align-self: flex-end;
            `}
          >
            <SlideIn d={200}>
              <Project.Text>{desc}</Project.Text>
            </SlideIn>
            <SlideIn d={100}>
              <Project.Box
                className="mt3rem"
                css={`
                  flex-direction: row;
                  width: 300px;
                  align-self: flex-start;
                `}
              >
                <ButtonLink href="#">Live link</ButtonLink>
                <Project.IconLink href="#" color="var(--black-color)" hoverColor="var(--blue-color)">
                  <FontAwesomeIcon size="4x" icon={['fab', 'github']} title="github page" />
                </Project.IconLink>
              </Project.Box>
            </SlideIn>
          </Project.Box>
        </Project.Box>

        <Project.FullWidthBox className="mt6rem" windowWidth={windowWidth} left={left}>
          {allFile.edges.length > 3 ? (
            <Project.Gallery className="mt6rem">
              <Project.Item span="5">
                <SlideIn
                  d={100}
                  css={`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <Project.Image fluid={allFile.edges[1].node.childImageSharp.fluid} />
                </SlideIn>
              </Project.Item>
              <Project.Item span="3">
                <SlideIn
                  d={300}
                  css={`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <Project.Image fluid={allFile.edges[2].node.childImageSharp.fluid} />
                </SlideIn>
              </Project.Item>
              <Project.Item span="3">
                <SlideIn
                  d={100}
                  css={`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <Project.Image fluid={allFile.edges[3].node.childImageSharp.fluid} />
                </SlideIn>
              </Project.Item>
              <Project.Item span="5">
                <SlideIn
                  d={300}
                  css={`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <Project.Image fluid={allFile.edges[4].node.childImageSharp.fluid} />
                </SlideIn>
              </Project.Item>
            </Project.Gallery>
          ) : (
            <Project.Gallery className="mt6rem">
              <Project.Item span="4">
                <SlideIn
                  d={100}
                  css={`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <Project.Image fluid={allFile.edges[1].node.childImageSharp.fluid} />
                </SlideIn>
              </Project.Item>
              <Project.Item span="4">
                <SlideIn
                  d={300}
                  css={`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <Project.Image fluid={allFile.edges[2].node.childImageSharp.fluid} />
                </SlideIn>
              </Project.Item>
            </Project.Gallery>
          )}
        </Project.FullWidthBox>
      </Project>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $key: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        desc
        tech
      }
    }
    allFile(filter: { relativeDirectory: { eq: $key } }, sort: { fields: [name], order: ASC }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
