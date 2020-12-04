import { css } from 'styled-components'

// CSS Helper
export const flexProps = css`
  display: flex;
  ${({ flexDirection }) => (flexDirection ? `flex-direction: ${flexDirection};` : null)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : null)}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : null)}
  ${({ alignContent }) => (alignContent ? `align-content: ${alignContent};` : null)}
`

export const textAlignProps = css`
  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : null)}
`
export const marginProps = css`
  ${({ margin }) => (margin ? `margin: ${margin};` : null)}
`

export const colorProps = css`
  ${({ color }) => (color ? `color: ${color};` : `inherit`)}
`

export const hoverProps = css`
  ${({ hoverColor }) =>
    hoverColor
      ? `
    &:hover { 
    color: ${hoverColor}; 
    }`
      : null}
`

export const maxWidth = css`
  max-width: 100rem;
`

export const size = {
  smallScreen: 548,
  mediumScreen: 769,
  largeScreen: 1023,
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
