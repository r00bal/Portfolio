import React from 'react'
import { animated, config, useTrail } from 'react-spring'

export default function SqueezeTrail({ children, state, delay = 0, x = 0, y = -50 }) {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    config: config.default,
    opacity: state ? 1 : 0,
    x: state ? 0 : x,
    y: state ? 0 : y,
    from: {
      opacity: 0,
      x,
      y,
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
            key={`${items[index]}_${index}`}
            style={{
              ...rest,
              display: 'inline-flex',
              transform: x.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
            }}
          >
            {items[index]}
          </animated.span>
        )
      })}
    </>
  )
}
