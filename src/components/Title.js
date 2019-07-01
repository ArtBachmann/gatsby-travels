import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 6px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  .subtitle {
    font-size: 1.6rem;
    letter-spacing: 3px;
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

// export default Title
