import styled from "styled-components"

const color = "green"

const Button = styled.button`
  color: ${props => props.color};
  background: ${props => props.background};
  font-size: ${props => (props.big ? "3rem" : "1rem")};
  cursor: pointer;
  width: 30%;
  display: flex;
  margin: 50px;
  padding: 1rem;
`
export default Button
