import React from 'react'
import { animated, useTrail, interpolate } from 'react-spring'

export default function RollTrail({ children, state, delay = 0, from, to, ...restProps }) {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 2000, friction: 100 },
    opacity: state ? to.o : from.o,
    x: state ? to.x : from.x,
    y: state ? to.y : from.y,
    z: state ? to.z : from.z,

    reset: state,
    from: {
      opacity: from.o,
      x: from.x,
      y: from.y,
      z: from.z,
    },
    delay,
  })

  return (
    <>
      {trail.map(({ x, y, z, ...rest }, index) => {
        if (items[index] === ' ' && items[index].match(' ')) {
          return ' '
        }
        return (
          <animated.span
            aria-hidden
            key={`${items[index]}_${index}`}
            {...restProps}
            style={{
              ...rest,
              transformOrigin: `bottom`,
              display: 'inline-flex',
              transform: interpolate(
                [x, y, z],
                (x, y, z) => `perspective(500px) translate3d(0,${y}px,0) rotateX(${x}deg)`
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
