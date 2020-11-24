import React, { useState, useMemo, Fragment } from 'react'
import { useSpring, animated } from 'react-spring'
import { flexProps } from '../utils/CssHelpers'

const FadeIn = ({ children, toggle = true, delay = 0 }) => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: toggle ? 1 : 0 }, delay })
  return <animated.div style={fadeIn}>{children}</animated.div>
}

export default FadeIn
