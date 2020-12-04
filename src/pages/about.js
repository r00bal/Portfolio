import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Layout } from '../layouts'
import { Card, Portrait, ButtonLink } from '../components'
import { FadeInSpring } from '../animations'
import { useMousePosition } from '../hooks'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function Home({ location }) {
  const { x, y } = useMousePosition()
  // const [{ x, y }, set] = useState({ x: 1, y: 1 })
  // const onMove = ({ clientX: x, clientY: y }) => set({ x, y })
  return (
    <Layout location={location}>
      <Container>
        <Card
          css={`
            width: 30%;
          `}
        >
          <FadeInSpring delay={500}>
            <Card.Text margin="20px 0 0 0">
              Hi. I am Pit, and this will be a concise story. A few years ago, I started to learn to code, and I liked
              it a lot. Currently, I am working as an HTML email developer. I'm using HTML, CSS, Javascript in my
              everyday work. See my full work history on LinkedIn. I am still sharpening my programming skills. I have
              written many code lines by building my own applications and enrolling in education platforms such as
              FreeCodeCamp, FrontEndMasters, and CodeCademy. I like to make my hands dirty in both frontend and backend
              technologies. I have done several projects with technologies such as React, GraphQL, NodeJS. You can check
              some of my Projects here or visit my GitHub and Codepen profiles. Among other things, I enjoy funk music,
              surfing, and cooking.
            </Card.Text>
          </FadeInSpring>
        </Card>{' '}
        <Portrait mouse={{ x, y }} style={{ alignSelf: 'flex-end' }} />
      </Container>

      <Card
      // onMouseMove={onMove}
      >
        {/* <FadeInSpring style={{ width: '100%' }} delay={200}>
          <Card.Title textAlign="center">Hello, my name is Piotr. I like to build things in the Interent.</Card.Title>
        </FadeInSpring> */}

        <FadeInSpring delay={500}>
          <Card.Subtitle margin="1.5rem 0">About me</Card.Subtitle>
          <Card.Text margin="20px 0 0 0">
            Hi. I am Pit, and this is a concise story of my life. At the beginning of my career, I was doing numerous
            jobs for a living, figuring out what I should do with the rest of my life. A few years ago, I was introduced
            to programming. Immediately I knew that this is what I was looking for, so I jumped deeply into it. One day
            I decided to turn my passion into a profession.
          </Card.Text>
          <Card.Subtitle margin="1.5rem 0">Experience</Card.Subtitle>
          <Card.Text margin="20px 0 0 0">
            Currently, I am working as an HTML email developer. I'm using HTML, CSS to make emails beautiful and
            Javascript for a personalized, unique experience. I also build online surveys and competitions. See my full
            work history on LinkedIn.
          </Card.Text>
          <Card.Subtitle margin="1.5rem 0">Progression</Card.Subtitle>
          <Card.Text margin="20px 0 0 0">
            I am still sharpening my programming skills. I have written many lines of code by building my own
            applications and enrolling in education platforms such as FreeCodeCamp, FrontEndMasters, CodeCademy. I like
            to make my hands dirty in both frontend and backend technologies. I have done several projects with
            technologies such as React, GraphQL, NodeJS. You can check some of my Projects here or visit my GitHub and
            Codepen profiles.
          </Card.Text>{' '}
          <Card.Subtitle margin="1.5rem 0">Hobby</Card.Subtitle>
          <Card.Text margin="20px 0 10px 0">
            Among other things, I am a little obsessed with making the perfect pizza dough. I enjoy funk music, surfing,
            and cooking.
          </Card.Text>
          <Card.Subtitle margin="5rem 0 20px 0" textAlign="center" color="var(--back-color)">
            Interested in doing a project together ?
          </Card.Subtitle>
        </FadeInSpring>
      </Card>
      {/* <Card introMode margin="3% 0 0 0">
        <Card.Title hoverColor="var(--green-color)">
          {IMTRO_TEXT.map((word, index) => {
            const delay = index * 200
            return (
              <>
                <NoWrap>
                  <SqueezeTrail delay={delay}>
                    {word.split('').map((l) => (
                      <SqueezeSpring>{l}</SqueezeSpring>
                    ))}
                  </SqueezeTrail>
                </NoWrap>
                {'  '}
              </>
            )
          })}
        </Card.Title>
        <Card.Text>
          <FadeInSpring delay={1000}>I like to code and build things on the internet.</FadeInSpring>
        </Card.Text>
      </Card> */}
      <ButtonLink>Contact Me</ButtonLink>
    </Layout>
  )
}
