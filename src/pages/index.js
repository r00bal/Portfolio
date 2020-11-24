import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Layout } from '../layouts'
import { Intro, Footer } from '../components'
import { SqueezeTrail, SqueezeSpring, FadeInSpring } from '../animations'
import '../utils/font-awesome'

const HeroTitle = "Hi, I'm Peter."

export default function Home() {
  return (
    <Layout>
      <Intro flexDirection="column" justifyContent="center" maxWidth="1000px">
        <Intro.Title hoverColor="var(--green-color)">
          {/* Test */}
          <SqueezeTrail delay={500}>
            {HeroTitle.split('').map((l) => {
              if (l === ' ') return l
              if (l === 'H')
                return (
                  <Intro.Special size="10rem" color="var(--yellow-color)" shadow="var(--blue-color)">
                    <SqueezeSpring>{l}</SqueezeSpring>
                  </Intro.Special>
                )
              if (l === 'P')
                return (
                  <Intro.Special size="10rem" color="var(--green-color)" shadow="var(--red-color)">
                    <SqueezeSpring>{l}</SqueezeSpring>
                  </Intro.Special>
                )
              return <SqueezeSpring>{l}</SqueezeSpring>
            })}
          </SqueezeTrail>
        </Intro.Title>

        <Intro.Text>
          <FadeInSpring delay={1000}>I love to code and build things on the internet.</FadeInSpring>
        </Intro.Text>
      </Intro>

      <Footer
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="500px"
        margin="10% 0 0 0"
      >
        <FadeInSpring style={{ width: '100%' }} delay={1400}>
          <Footer.ButtonLink>Contact Me</Footer.ButtonLink>
        </FadeInSpring>
        <FadeInSpring style={{ width: '100%' }} delay={1400}>
          <Footer.Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="space-between"
            alignContent="space-between"
            width="200px"
          >
            <Footer.IconLink href="#" color="var(--green-color)">
              <FontAwesomeIcon size="2x" icon={['fab', 'github']} title="github account for deSolidState" />
            </Footer.IconLink>
            <Footer.IconLink href="#" color="var(--red-color)">
              <FontAwesomeIcon size="2x" icon={['fab', 'codepen']} title="github account for deSolidState" />
            </Footer.IconLink>
            <Footer.IconLink href="#" color="var(--blue-color)">
              <FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} title="github account for deSolidState" />
            </Footer.IconLink>
            <Footer.IconLink href="#" color="var(--sky-color)">
              <FontAwesomeIcon size="2x" icon="paper-plane" />
            </Footer.IconLink>
          </Footer.Box>
        </FadeInSpring>
      </Footer>
    </Layout>
  )
}
