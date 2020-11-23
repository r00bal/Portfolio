import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
`

export default function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}I am navigation</Container>
}
