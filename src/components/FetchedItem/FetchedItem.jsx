import WordBox from "../Boxes.jsx/WordBox";
import LetterBox from "../Boxes.jsx/LetterBox";
import Spinner from "../Spinner/Spinner";
import { getRandomNumber } from "../../utilityFunctions/utilityFunctions.js";
import { memo, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const revealAnimation = keyframes`
  0% {
    color: transparent;
  }
  100% {
    color: #36eee0;
  }
`;
const Game = styled.div`
  display: flex;
  gap: 3rem;
  max-width: 80%;
  justify-content: center;
  flex-wrap: wrap;
`;

const RevealLetter = styled.p`
  ${(props) =>
    props.isRevealed &&
    css`
      transition: all 0.75s ease-in;
      animation: ${revealAnimation} 0.5s forwards;
    `}
`;

const FetchedItem = memo(function FetchedItem({
  fetchedItem,
  dispatch,
  formattedName,
  correctGuesses,
}) {
  const formattedWords = fetchedItem?.name
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "");

  useEffect(
    function () {
      const uniqueLetters = new Set(formattedName).size;

      if (correctGuesses.length === uniqueLetters) dispatch({ type: "Won" });
    },
    [correctGuesses.length, dispatch, formattedName]
  );
  if (!formattedWords) return <Spinner />;
  return (
    <>
      <Game>
        {formattedWords.split(" ").map((word, i) => (
          <WordBox key={i}>
            {word.split("").map((letter, i) => (
              <LetterBox key={i}>
                <RevealLetter isRevealed={correctGuesses.includes(letter)}>
                  {letter}
                </RevealLetter>
              </LetterBox>
            ))}
          </WordBox>
        ))}
      </Game>
    </>
  );
});

export default FetchedItem;
