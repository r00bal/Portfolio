import React, { createRef } from 'react'
import { useChain } from 'react-spring'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Layout } from '../layouts'
import { Intro, Footer } from '../components'
import { SqueezeTrail, SqueezeSpring, FadeInSpring } from '../animations'
import '../utils/font-awesome'

const HI = 'Hi,'
const IM = "I'm"
const PETER = 'Peter.'

const NoWrap = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
`
const Br = styled.br``

export default function Home() {
  return (
    <Layout>
      <Intro>
        <Intro.Title hoverColor="var(--green-color)">
          <NoWrap>
            <SqueezeTrail delay={500}>
              {HI.split('').map((l) => {
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
          </NoWrap>{' '}
          <Br />
          <NoWrap>
            <SqueezeTrail delay={600}>
              {IM.split('').map((l) => {
                if (l === ' ') return l
                if (l === 'I')
                  return (
                    <Intro.Special color="var(--sky-black)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Intro.Special>
                  )
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
          </NoWrap>
          {'  '}
          <NoWrap>
            <SqueezeTrail delay={800}>
              {PETER.split('').map((l) => {
                if (l === ' ') return l
                if (l === '.')
                  return (
                    <Intro.Special color="var(--sky-color)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Intro.Special>
                  )
                if (l === 'H')
                  return (
                    <Intro.Special size="8rem" color="var(--yellow-color)" shadow="var(--blue-color)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Intro.Special>
                  )
                if (l === 'P')
                  return (
                    <Intro.Special size="8rem" color="var(--green-color)" shadow="var(--red-color)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Intro.Special>
                  )
                return <SqueezeSpring>{l}</SqueezeSpring>
              })}
            </SqueezeTrail>
          </NoWrap>
        </Intro.Title>
        <Intro.Text>
          <FadeInSpring delay={1000}>I like to code and build things on the internet.</FadeInSpring>
        </Intro.Text>
      </Intro>

      <Footer>
        <FadeInSpring style={{ width: '100%' }} delay={1400}>
          <Footer.ButtonLink>Contact Me</Footer.ButtonLink>
        </FadeInSpring>
        <FadeInSpring style={{ width: '100%' }} delay={1400}>
          <Footer.Box
          // flexDirection="row"
          // justifyContent="space-between"
          // alignItems="space-between"
          // alignContent="space-between"
          // width="200px"
          >
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
          </Footer.Box>
        </FadeInSpring>
      </Footer>
    </Layout>
  )
}
