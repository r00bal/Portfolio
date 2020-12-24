import React from 'react'
import { animated, config, useTrail, interpolate, useSpring, useTransition } from 'react-spring'

export default function RollTrail({ children, state, delay = 0, from, to, ...restProps }) {
  const items = React.Children.toArray(children)

  const { r } = useSpring({
    from: { r: 90 },
    to: { r: state ? 0 : 90 },
    config: config.default,
    delay,
  })

  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 2000, friction: 100 },
    opacity: state ? to.o : from.o,
    x: state ? to.x : from.x,
    y: state ? to.y : from.y,
    z: state ? to.z : from.z,

    reset: false,
    reverse: false,
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
      <animated.div
        style={{
          width: 'fit-content',
          margin: '0 auto',
          transformOrigin: `left`,
          transform: r.interpolate((r) => `perspective(500px) rotateY(${r}deg)`),
        }}
      >
        {trail.map(({ x, y, z, ...rest }, index) => {
          if (items[index] === ' ' && items[index].match(' ')) {
            return ' '
          }
          return (
            <animated.span
              key={`${items[index]}_${index}`}
              {...restProps}
              style={{
                ...rest,
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
      </animated.div>
    </>
  )
}
