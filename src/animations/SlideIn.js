import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated, config } from 'react-spring'

const custom = { mass: 5, tension: 80, friction: 60 }

const direction = {
  down: 'translate3d(0,150px,0)',
  up: 'translate3d(0,-150px,0)',
  left: 'translate3d(-150px,0,0)',
  right: 'translate3d(150px,0,0)',
}

const AnimatedDiv = styled(animated.div)``

const SlideIn = ({ children, d = 0, from = 'down', ...rest }) => {
  const [isVisible, setIsVisible] = useState(false)
  const SlideFromBottom = useSpring({
    from: {
      transform: direction[from],
      opacity: 0,
    },
    transform: isVisible ? 'translate3d(0,0,0)' : direction[from],
    opacity: isVisible ? 1 : 0,
    config: config.default,
    delay: d,
  })

  const handleEnter = () => {
    setIsVisible(true)
  }
  const handleLeave = () => {
    // setIsVisible(false)
  }
  return (
    <>
      <Waypoint onEnter={() => handleEnter()} bottomOffset="10%" />
      <AnimatedDiv {...rest} style={SlideFromBottom}>
        {children}
      </AnimatedDiv>
    </>
  )
}

export default SlideIn
