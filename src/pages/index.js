import React from 'react'
import { Layout } from '../layouts'
import { Intro } from '../components'
import { SqueezeTrail, SqueezeSpring } from '../animations'

const HeroTitle = "Hi, I'm Peter."
const HeroText = 'I love to code and to build things on the interent'

export default function Home() {
  return (
    <Layout>
      <Intro flexDirection="column" justifyContent="center">
        <Intro.Title>
          {/* Test */}
          <SqueezeTrail>
            {HeroTitle.split('').map((l) => {
              if (l === ' ') return l
              if (l === 'H')
                return (
                  <Intro.Special color="var(--yellow-color)" shadow="var(--blue-color)">
                    <SqueezeSpring>{l}</SqueezeSpring>
                  </Intro.Special>
                )
              if (l === 'P')
                return (
                  <Intro.Special color="var(--green-color)" shadow="var(--red-color)">
                    <SqueezeSpring>{l}</SqueezeSpring>
                  </Intro.Special>
                )
              return <SqueezeSpring>{l}</SqueezeSpring>
            })}
          </SqueezeTrail>
        </Intro.Title>
        <Intro.Text>I love to code and build things on the internet.</Intro.Text>
      </Intro>
    </Layout>
  )
}
