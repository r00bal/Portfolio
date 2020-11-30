import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Layout } from '../layouts'
import { Card, Footer, Portrait, ButtonLink } from '../components'
import { FadeInSpring } from '../animations'
import { useMousePosition } from '../hooks'
import '../utils/font-awesome'

export default function Home() {
  const { x, y } = useMousePosition()
  return (
    <Layout>
      <Card margin="100px 0 40px 0">
        <FadeInSpring style={{ width: '100%' }} delay={200}>
          <Card.Title textAlign="center">Hello, my name is Piotr. I am Front-end developer from Gdynia, PL.</Card.Title>
        </FadeInSpring>

        <Portrait mouse={{ x, y }} />
        <FadeInSpring delay={500}>
          <Card.Subtitle margin="30px 0 20x 0">About me</Card.Subtitle>
          <Card.Text margin="20px 0 0 0">
            Hi. I am Pit and this is a very short story of my life. A few years ago I decided to learn to code and I
            totally fell in love with it. I am passionate about programming and everything that is interactive.{' '}
          </Card.Text>{' '}
          <Card.Text margin="20px 0 0 0">
            Currently I am working as an HTML email developer but I like to make my hands dirty in both frontend and
            backend technologies. If you are interested in my work experience, please visit me on LinkedIn.
          </Card.Text>{' '}
          <Card.Text margin="20px 0 10px 0">
            Check out some of my work in the Projects Tab - You can find more on my GitHub and Codepen profile. Among
            other things, I enjoy funk music, surfing, and cooking. I am also a little obsessed with turning my pizza
            cake recipe to perfection :)
          </Card.Text>
          <Card.Subtitle margin="30px 0 20px 0" textAlign="center">
            Interested in doing a project together ?{' '}
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
      <Footer margin="100px 0 0 0">
        <FadeInSpring style={{ width: 'fit-content' }} delay={900}>
          <Footer.IconLink href="#" color="var(--green-color)">
            <FontAwesomeIcon size="2x" icon={['fab', 'github']} title="github account for Peter" />
          </Footer.IconLink>
          <Footer.IconLink href="#" color="var(--red-color)">
            <FontAwesomeIcon size="2x" icon={['fab', 'codepen']} title="codepen account for Peter" />
          </Footer.IconLink>
          <Footer.IconLink href="#" color="var(--blue-color)">
            <FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} title="linkedin account for Peter" />
          </Footer.IconLink>
          <Footer.IconLink href="#" color="var(--sky-color)">
            <FontAwesomeIcon size="2x" icon="paper-plane" />
          </Footer.IconLink>
        </FadeInSpring>
        <FadeInSpring style={{ width: 'auto' }} delay={900}>
          <Footer.Text>Copyright Panda 2020</Footer.Text>
        </FadeInSpring>
      </Footer>
    </Layout>
  )
}
