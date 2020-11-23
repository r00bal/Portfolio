import React from 'react'
import { Layout } from '../layouts'
import { Intro } from '../components'
import { ElasticTrailAnimation, SqueezeSpring } from '../animations'

const HeroTitle = "Hi, I'm Peter."
const HeroText = 'I love to code and to build things on the interent'

export default function Home() {
  return (
    <Layout>
      <Intro flexDirection="column" justifyContent="center">
        <Intro.Title>
          {/* Test */}
          <ElasticTrailAnimation>
            {HeroTitle.split('').map((element) => (
              <SqueezeSpring>{element}</SqueezeSpring>
            ))}
          </ElasticTrailAnimation>
          {/* Test */}
          {/* <Intro.Special color="var(--yellow-color)" shadow="var(--blue-color)">
            H
          </Intro.Special>
          i, I'm{' '}
          <Intro.Special color="var(--green-color)" shadow="var(--red-color)">
            P
          </Intro.Special>
          eter<Intro.Special color="var(--sky-color)">.</Intro.Special> */}
        </Intro.Title>
        <Intro.Text>I love to code and build things on the internet.</Intro.Text>
      </Intro>
    </Layout>
  )
}
