import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Layout } from '../layouts'
import { Card, Footer } from '../components'
import { SqueezeTrail, SqueezeSpring, FadeInSpring } from '../animations'
import { mediaAbove } from '../utils/css-helpers'
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
const Br = styled.br`
  /* ${mediaAbove.smallScreen`
  display:none; */
`}
`

export default function Home() {
  return (
    <Layout>
      <Card introMode>
        <Card.Title hoverColor="var(--green-color)">
          <NoWrap>
            <SqueezeTrail delay={500}>
              {HI.split('').map((l) => {
                if (l === ' ') return l
                if (l === 'H')
                  return (
                    <Card.Special color="var(--yellow-color)" shadow="var(--blue-color)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Card.Special>
                  )
                if (l === 'P')
                  return (
                    <Card.Special color="var(--green-color)" shadow="var(--red-color)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Card.Special>
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
                    <Card.Special color="var(--sky-black)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Card.Special>
                  )
                if (l === 'H')
                  return (
                    <Card.Special color="var(--yellow-color)" shadow="var(--blue-color)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Card.Special>
                  )
                if (l === 'P')
                  return (
                    <Card.Special color="var(--green-color)" shadow="var(--red-color)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Card.Special>
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

                if (l === 'H')
                  return (
                    <Card.Special color="var(--yellow-color)" shadow="var(--blue-color)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Card.Special>
                  )
                if (l === 'P')
                  return (
                    <Card.Special color="var(--green-color)" shadow="var(--red-color)">
                      <SqueezeSpring>{l}</SqueezeSpring>
                    </Card.Special>
                  )
                return <SqueezeSpring>{l}</SqueezeSpring>
              })}
            </SqueezeTrail>
          </NoWrap>
        </Card.Title>
        <Card.Text>
          <FadeInSpring delay={1000}>I like to code and build things on the internet.</FadeInSpring>
        </Card.Text>
      </Card>

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
