import React, { useState, useMemo, Fragment } from 'react'
import { useSpring, animated, interpolate, config, useTrail } from 'react-spring'

export default function SqueezeTrail({ children, comp }) {
  const items = React.Children.toArray(children)
  const [state, toggle] = useState(false)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 135 },
    opacity: 1,
    x: 1,
    y: 1,

    from: {
      opacity: 0,
      x: 0,
      y: 0,
    },
  })

  return (
    <>
      {trail.map(({ x, y, ...rest }, index) => {
        if (items[index] === ' ' && items[index].match(' ')) {
          return ' '
        }
        return (
          <animated.span
            key={`${items[index]}_${index}`}
            onMouseEnter={() => toggle(true)}
            style={{
              ...rest,
              display: 'inline-flex',
              transform: interpolate(
                [
                  x.interpolate({
                    range: [0, 0.9, 1],
                    output: [0, 1.2, 1],
                  }),
                  y.interpolate({
                    range: [0, 0.9, 1],
                    output: [0, 0.8, 1],
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
