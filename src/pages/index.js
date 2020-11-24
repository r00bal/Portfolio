import React from 'react'
import { Layout } from '../layouts'
import { Intro } from '../components'
import { SqueezeTrail, SqueezeSpring, FadeInSpring } from '../animations'

const HeroTitle = "Hi, I'm Peter."

export default function Home() {
  return (
    <Layout>
      <Intro flexDirection="column" justifyContent="center">
        <Intro.Title>
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
    </Layout>
  )
}
