import styled, { css, keyframes } from "styled-components";
import Button from "../Resuable Components/Button";
import React from "react";

const AnimateTitle = keyframes`
  0% {
    transform: scale(0.25);
    opacity: 0;
  }

  80% {
    transform: scale(1.1);
    opacity: 0.8;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Main = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

const Title = styled.h1`
  font-size: 6rem;
  ${(props) =>
    props.animation &&
    css`
      animation: ${AnimateTitle} 1.25s ease-out;
    `}
`;

const Row = styled.div`
  display: flex;
  gap: 1.125rem;
`;

function StartScreen({ dispatch }) {
  return (
    <Main>
      <Title animation={true}>
        Welcome <br></br>to <br></br> Guess The Game
      </Title>
      <Row>
        <Button
          animation={true}
          variant={"primary"}
          functionality={() =>
            dispatch({ type: "chooseCategory", payload: "chooseCategory" })
          }
          type={"btn-primary"}
        >
          Start the game
        </Button>
      </Row>
    </Main>
  );
}

export default StartScreen;
