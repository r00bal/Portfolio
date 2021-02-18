import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layouts'
import { Card, Portrait, Intro, SEO } from '../components'
import { FadeInSpring, SqueezeSpring, SqueezeTrail } from '../animations'
import { mediaAbove } from '../utils/css-helpers'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mediaAbove.mediumScreen`
   flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  `}
  ${mediaAbove.largeScreen`
   flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  `}
`

const ExternalLink = styled.a`
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
  z-index: 100;
`

export default function About({ location }) {
  return (
    <Layout location={location}>
      <SEO title="About me" />
      <Container>
        <Portrait />
        <Card
          css={`
            max-width: 400px;
            ${mediaAbove.largeScreen`
   margin-right: 10%;
  `}
          `}
        >
          <Intro.Title
            aria-label="Hi"
            css={`
              width: 100%;
              text-align: left;
            `}
          >
            <SqueezeTrail delay={200}>
              <SqueezeSpring>
                <Intro.Special color="var(--green-color)" shadow="var(--blue-color)">
                  H
                </Intro.Special>
              </SqueezeSpring>
              <SqueezeSpring>i</SqueezeSpring>
            </SqueezeTrail>
          </Intro.Title>
          <FadeInSpring delay={500}>
            <Card.Text margin="20px 0 0 0">
              I'm Pit. I learn to code. I am a big fan of frontend development, but I like to make my hands dirty also
              on the backend side. I have done several projects with technologies such as React, GraphQL, NodeJS.
              Currently, I am working as an HTML email developer. I'm using HTML, CSS, Javascript in my everyday work.
              See my work history on LinkedIn. I am coding every day, trying to sharpening my programming skills to
              become a full-stack ninja developer ;) You can check some of my Projects here or visit my GitHub and
              Codepen profiles.
            </Card.Text>
          </FadeInSpring>
        </Card>
      </Container>{' '}
      <Container />
    </Layout>
  )
}
