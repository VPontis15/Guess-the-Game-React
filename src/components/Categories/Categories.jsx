import Button from "../Resuable Components/Button";
import styled from "styled-components";

const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  background-color: transparent;
  margin-bottom: 6rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1.125rem;
`;

function Categories({ dispatch }) {
  return (
    <App>
      <Title>Choose the game's category:</Title>
      <Row>
        <Button
          disabled={true}
          functionality={() =>
            dispatch({ type: "startGame", payload: "movies" })
          }
          variant={"secondary"}
        >
          Movies
        </Button>
        <Button
          variant={"primary"}
          functionality={() =>
            dispatch({ type: "startGame", payload: "games" })
          }
        >
          Games
        </Button>
      </Row>
    </App>
  );
}

export default Categories;
