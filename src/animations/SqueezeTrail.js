import React, { useState, useMemo, Fragment } from 'react'
import { useSpring, animated, interpolate, config, useTrail } from 'react-spring'

export default function SqueezeTrail({ children, delay = 0 }) {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    // config: { mass: 5, tension: 2000, friction: 135 },
    config: { mass: 5, tension: 2000, friction: 115, precision: 0.001 },
    // opacity: 1,
    x: 1,
    y: 1,

    from: {
      // opacity: 0,
      x: 0,
      y: 0,
    },
    delay,
  })

  return (
    <>
      {trail.map(({ x, y, ...rest }, index) => {
        if (items[index] === ' ' && items[index].match(' ')) {
          return ' '
        }
        return (
          <animated.span
            aria-hidden
            key={`${items[index]}_${index}`}
            style={{
              ...rest,
              display: 'inline-flex',
              transform: interpolate(
                [
                  x.interpolate({
                    // range: [0, 0.9, 1],
                    // output: [0, 1.2, 1]
                    range: [0, 0.1, 0.3, 1],
                    output: [0, 1, 0.7, 1],
                  }),
                  y.interpolate({
                    // range: [0, 0.9, 1],
                    // output: [0, 0.8, 1]
                    range: [0, 0.1, 0.3, 1],
                    output: [0, 1, 1.3, 1],
                  }),
                ],
                (x, y) => `scale(${x},${y})`
              ),
            }}
          >
            {items[index]}
          </animated.span>
        )
      })}
    </>
  )
}
