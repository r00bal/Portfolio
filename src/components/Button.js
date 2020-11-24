import styled from 'styled-components'

const Button = styled.a`
  color: var(--blue-color);
  font-size: 13px;
  letter-spacing: 4px;
  text-decoration: none;
  padding: 10px 18px;
  border: 1px solid var(--blue-color);
  transition: all 0.5s ease;
  cursor: pointer;
  display: block;
  &:hover {
    color: #fff;
    border: 1px solid var(--blue-color);
    background: var(--blue-color);
  }
`

export default Button
