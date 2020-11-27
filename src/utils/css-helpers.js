import { css } from 'styled-components'

// CSS Helper
export const flexProps = css`
  display: flex;
  ${({ flexDirection }) => (flexDirection ? `flex-direction: ${flexDirection};` : null)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : null)}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : null)}
  ${({ alignContent }) => (alignContent ? `align-content: ${alignContent};` : null)}
`

export const marginProps = css`
  ${({ margin }) => (margin ? `margin: ${margin};` : null)}
`

export const maxWidth = css`
  max-width: 1540px;
`

export const size = {
  smallScreen: 548,
  mediumScreen: 960,
  largeScreen: 1140,
}

export const mediaAbove = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

console.log('mediaAbove', mediaAbove)
