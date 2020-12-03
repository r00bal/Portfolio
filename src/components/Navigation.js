import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { mediaAbove } from '../utils/css-helpers'

const Container = styled.nav`
  display: flex;
  width: 100%;

  ${mediaAbove.smallScreen`
  width:fit-content;
  `}
`

const NavLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  color: var(--green-color);
  transition: 1s all;
  &:hover {
    color: var(--yellow-color);
  }
`

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  .active {
    color: var(--yellow-color);
  }
  ${mediaAbove.mediumScreen`
  
    justify-content: flex-end;
  `}
`

const Item = styled.li`
  position: relative;
  margin-left: 30px;
`

const Text = styled.span``

export default function Nav({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Nav.Link = function LinkStyled({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>
}

Nav.List = function LinkList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}

Nav.Item = function LinkItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Nav.Text = function LinkText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
