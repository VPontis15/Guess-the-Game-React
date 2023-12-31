import React from "react";
import styled from "styled-components";

const WordContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

function WordBox({ children }) {
  return <WordContainer>{children}</WordContainer>;
}

export default WordBox;
