import FetchedItem from "../FetchedItem/FetchedItem";
import Input from "../Input/Input";
import Timer from "../Timer/Timer";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
  gap: 8rem;
  align-items: center;
  width: 100%;
`;

function Game({
  formattedName,
  fetchedItem,

  dispatch,
  guess,
  correctGuesses,
  seconds,
  minutes,
  wrongGuesses,
}) {
  return (
    <StyledSection>
      <Timer dispatch={dispatch} minutes={minutes} seconds={seconds} />

      <FetchedItem
        dispatch={dispatch}
        fetchedItem={fetchedItem}
        correctGuesses={correctGuesses}
        formattedName={formattedName}
        wrongGuesses={wrongGuesses}
      />
      <Input dispatch={dispatch} fetchedItem={fetchedItem} guess={guess} />
    </StyledSection>
  );
}

export default Game;
