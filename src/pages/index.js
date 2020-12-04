import React, { useState, useCallback } from 'react'

import styled from 'styled-components/macro'
import { Layout, SocialIcons } from '../layouts'
import { Intro } from '../components'
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
      <Intro>
        {console.log('location ', location)}
        <Intro.Title hoverColor="var(--green-color)">
          {INTRO_TEXT.map((word, index) => {
            const delay = index * 200
            return (
              <>
                <NoWrap>
                  <SqueezeTrail delay={delay}>
                    {word.split('').map((l) => {
                      if (l === 'H') {
                        return (
                          <SqueezeSpring>
                            <Intro.Special color="var(--green-color)" shadow="var(--blue-color)">
                              {l}
                            </Intro.Special>
                          </SqueezeSpring>
                        )
                      }
                      if (l === 'P') {
                        return (
                          <SqueezeSpring>
                            <Intro.Special color="var(--green-color)" shadow="var(--blue-color)">
                              {l}
                            </Intro.Special>
                          </SqueezeSpring>
                        )
                      }
                      if (l === 'e') {
                        return (
                          <>
                            <SqueezeSpring>{l}</SqueezeSpring>
                            <br />
                          </>
                        )
                      }
                      return <SqueezeSpring>{l}</SqueezeSpring>
                    })}
                  </SqueezeTrail>
                </NoWrap>
                {'  '}
              </>
            )
          })}
        </Intro.Title>
        <Intro.Text>
          <FadeInSpring delay={1000}>I like to build things on the internet.</FadeInSpring>
        </Intro.Text>
        <FadeInSpring style={{ alignSelf: 'flex-end' }} delay={1000}>
          <SocialIcons />
        </FadeInSpring>
      </Intro>
    </Layout>
  )
}
