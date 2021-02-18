import React, { useState, useMemo, Fragment } from 'react'
import { useSpring, animated } from 'react-spring'
import { flexProps } from '../utils/css-helpers'

const FadeIn = ({ children, toggle = true, delay = 0, style }) => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: toggle ? 1 : 0 }, delay })
  return <animated.div style={{ ...style, ...fadeIn }}>{children}</animated.div>
}

export default FadeIn
