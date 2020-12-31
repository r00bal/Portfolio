import React, { useState, useCallback } from 'react'

import styled from 'styled-components/macro'
import { Layout, SocialIcons } from '../layouts'
import { Intro, SEO } from '../components'
import { FadeInSpring, SqueezeSpring, SqueezeTrail } from '../animations'
import '../utils/font-awesome'

const INTRO_TEXT = ['Hi,', "I'am", 'Piotr.']

const NoWrap = styled.span`
  display: inline-flex;
  align-items: flex-end;
  flex-wrap: nowrap;
`

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Intro>
        <Intro.Title hoverColor="var(--green-color)" aria-label="Hi I'm Piotr">
          {INTRO_TEXT.map((word, index) => {
            const delay = index * 200
            return (
              <span key={`${word}_${index}`}>
                <NoWrap>
                  <SqueezeTrail delay={delay}>
                    {word.split('').map((l) => {
                      if (l === 'H') {
                        return (
                          <SqueezeSpring key={`${l}_${index}`}>
                            <Intro.Special color="var(--green-color)" shadow="var(--blue-color)">
                              {l}
                            </Intro.Special>
                          </SqueezeSpring>
                        )
                      }
                      if (l === 'P') {
                        return (
                          <SqueezeSpring key={`${l}_${index}`}>
                            <Intro.Special color="var(--green-color)" shadow="var(--blue-color)">
                              {l}
                            </Intro.Special>
                          </SqueezeSpring>
                        )
                      }
                      if (l === 'e') {
                        return (
                          <span key={`${l}_${index}`}>
                            <SqueezeSpring>{l}</SqueezeSpring>
                            <br key={`br_${index}`} />
                          </span>
                        )
                      }
                      return <SqueezeSpring key={`${l}_${index}`}>{l}</SqueezeSpring>
                    })}
                  </SqueezeTrail>
                </NoWrap>
                {'  '}
              </span>
            )
          })}
        </Intro.Title>
        <Intro.Text>
          <FadeInSpring delay={1000}>I like to build things on the internet.</FadeInSpring>
        </Intro.Text>
        <FadeInSpring style={{ alignSelf: 'flex-end', marginTop: '1rem ' }} delay={1000}>
          <SocialIcons />
        </FadeInSpring>
      </Intro>
    </Layout>
  )
}
