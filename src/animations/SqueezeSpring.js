import React, { useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import styled from 'styled-components'

const SqueezeSpring = ({ children }) => {
  const [state, toggle] = useState(false)
  const { x, y } = useSpring({
    from: { x: !state ? 1 : 0, y: !state ? 1 : 0 },
    to: { x: 1, y: 1, color: 'black' },
    config: { mass: 3, tension: 300, friction: 5 },
    reset: state,
    onRest: (state) => toggle(false),
  })

  return (
    <animated.span
      onMouseEnter={() => toggle(true)}
      style={{
        display: 'inline-flex',
        transform: interpolate(
          [
            x.interpolate({
              range: [0, 0.3, 1],
              output: [1, 1.3, 1],
            }),
            y.interpolate({
              range: [0, 0.3, 1],
              output: [1, 0.7, 1],
            }),
          ],
          (x, y) => `scale(${x},${y})`
        ),
      }}
    >
      {children}
    </animated.span>
  )
}

export default SqueezeSpring
