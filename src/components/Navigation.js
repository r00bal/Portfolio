import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { flexProps } from '../utils/css-helpers'

const Container = styled.nav`
  ${flexProps}
`

const NavLink = styled(Link)`
  color: var(--black-color);
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 300;
  &:hover {
    span {
      visibility: hidden;
    }
    svg {
      visibility: visible;
    }
  }
`

const List = styled.ul`
  ${flexProps}
  .active {
    color: var(--green-color);
  }
`

const Item = styled.li`
  margin-left: 30px;
  position: relative;
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    visibility: hidden;
    color:var(--blue-color);
  }
  .active {
    span {
      visibility: hidden;
    }
    svg {
      visibility: visible;
    }

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
