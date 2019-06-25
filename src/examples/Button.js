import styled from "styled-components"

const color = "green"

const Button = styled.button`
  color: ${props => props.color};
  background: ${props => props.background};
  font-size: 2rem;
  cursor: pointer;
  width: 50%;
  display: flex;
  margin: 50px;
  padding: 1rem;
`
export default Button
