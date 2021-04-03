import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { Layout } from '../layouts'
import { Card, Portrait, Intro, SEO } from '../components'
import { FadeInSpring, SqueezeSpring, SqueezeTrail } from '../animations'
import { mediaAbove } from '../utils/css-helpers'

const LinkStyles = css`
  color: var(--blue-color);
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 50;
  &:hover {
    color: var(--green-color);
  }
`

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
  ${LinkStyles}
`

const InternalLink = styled(Link)`
  ${LinkStyles}
`

export default function About({ location }) {
  return (
    <Layout location={location}>
      <SEO title="About me" />
      <Container>
        <Portrait
          css={`
            pointer-events: all;
          `}
        />
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
              I'm Pit, a self taught web developer and I am passionate about Web Technologies, design and everything
              that's interactive. I'm learning front-end development, but also like to make my hands dirty on the
              back-end side. Every day I'm working on sharpening my programming skills in hopes of becoming a full-stack
              ninja developer ;) and am currently looking for new job opportunities where I could learn new skills from
              professionals. To enrich my toolbox, I have done several projects with technologies such as HTML, CSS,
              JavaScript, React, GraphQL, and NodeJS, to mention but a few. You can check some of my projects{' '}
              <InternalLink to="/projects">here</InternalLink> or visit my{' '}
              <ExternalLink href="https://github.com/r00bal">GitHub</ExternalLink> or{' '}
              <ExternalLink href="https://codepen.io/r00bal">Codepen</ExternalLink> profiles. Among other things, I
              enjoy funk music, water sports and spicy food.
            </Card.Text>
          </FadeInSpring>
        </Card>
      </Container>{' '}
      <Container />
    </Layout>
  )
}
