import React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Layout } from '../layouts'
import { Project, ButtonLink, Footer } from '../components'
import { useWindowSize } from '../hooks'

export default function ProjectTemplate({ location, data }) {
  const windowWidth = useWindowSize().width

  const left = windowWidth > 1000 ? (windowWidth - 1000) / 2 : 0
  console.log(windowWidth)
  const { allFile, markdownRemark } = data
  const home = allFile.edges.filter(({ node }) => node.childImageSharp.fluid.src.includes('home'))
  return (
    <Layout location={location}>
      {console.log(home)}
      {console.log(allFile)}
      {console.log(markdownRemark)}
      <Project>
        <Project.Image
          fluid={home[0].node.childImageSharp.fluid}
          css={`
            max-height: 600px;
            margin: 0 auto;
          `}
        />
        <Project.Box className="mt6rem">
          <Project.Title>Street Food Wok</Project.Title>
          <Project.Line className="mt3rem" />
          <Project.Box
            css={`
              width: fit-content;
              align-self: flex-end;
            `}
          >
            <Project.Text>
              This is a restaurant page template. Made in React GatsbyJS and Data CMS. I treat it as my
              ‘styled-component’ and ‘react spring’ playground. I mixed here a bit of BEM into CSS-in-JS. I was trying
              to achieve a gentle scrolling parallax effect connected with smooth animations. I was struggling with
              making the menu button and navigation panel accessible by adding a keyboard control but at the end I think
              it worked out pretty well. View the site and let me know what you think—technologies used in this project:
              Gatsby, GraphQL, styled-components, react-spring, BEM modifiers.{' '}
            </Project.Text>
            <Project.Box
              className="mt3rem"
              css={`
                flex-direction: row;
                width: 300px;
                align-self: flex-start;
              `}
            >
              <ButtonLink href="#">Live link</ButtonLink>
              <Project.IconLink href="#" color="var(--black-color)" hoverColor="var(--green-color)">
                <FontAwesomeIcon size="4x" icon={['fab', 'github']} title="github page" />
              </Project.IconLink>
            </Project.Box>
          </Project.Box>
        </Project.Box>

        <Project.FullWidthBox className="mt6rem" windowWidth={windowWidth} left={left}>
          <Project.Gallery className="mt6rem">
            <Project.Item span="5">
              <Project.Image fluid={allFile.edges[1].node.childImageSharp.fluid} />
            </Project.Item>
            <Project.Item span="3">
              {' '}
              <Project.Image fluid={allFile.edges[2].node.childImageSharp.fluid} />
            </Project.Item>
            <Project.Item span="3">
              {' '}
              <Project.Image fluid={allFile.edges[3].node.childImageSharp.fluid} />
            </Project.Item>
            <Project.Item span="5">
              {' '}
              <Project.Image fluid={allFile.edges[4].node.childImageSharp.fluid} />
            </Project.Item>
          </Project.Gallery>
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
      }
    }
    allFile(filter: { relativeDirectory: { eq: $key } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
