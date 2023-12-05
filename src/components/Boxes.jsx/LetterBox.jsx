import styled from "styled-components";
import React from "react";

const Letter = styled.span`
  border: 2px solid #36eee0;

  font-size: 2rem;

  padding: 0.5em;
  min-width: 80px;
  background-color: rgba(0, 0, 0, 1);
  color: transparent;
  font-weight: 700;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 5px;
  background-size: 200% 100%;
  text-transform: uppercase;
  transition: all 0.75s ease-in;
`;

function LetterBox({ children }) {
  return <Letter>{children}</Letter>;
}

export default LetterBox;
