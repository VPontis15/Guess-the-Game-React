import { useImage } from "react-image";
import Button from "../Resuable Components/Button";
import Spinner from "../Spinner/Spinner";
import styled from "styled-components";
import { Suspense } from "react";
import React from "react";

const GameCover = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  max-height: 500px;
  overflow: hidden;
`;

const GameTitle = styled.h1`
  font-size: 3rem;
  letter-spacing: 6px;
  margin-block: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 60%;
  align-items: center;
`;

const GameGenres = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  color: #fff;
  font-size: 1.25rem;
`;

const GameModal = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  width: 50vw;
  display: flex;
  flex-direction: column;
  padding-top: 1.75rem;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  border-radius: 20px;
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin-top: 3rem;
  text-align: center;
  margin-bottom: 2.75rem;
`;

const Value = styled.span`
  color: #fff;
  font-weight: bold;
`;

function Won({ fetchedItem, seconds, minutes, dispatch }) {
  const { name, genres, released_date, description, game_cover, score } =
    fetchedItem;
  const { src, isLoading } = useImage({
    srcList: game_cover,
    useSuspense: false,
  });
  console.log(isLoading);
  if (isLoading) return <Spinner />;
  return (
    <GameModal>
      <GameCover src={src} />
      <GameTitle>{name}</GameTitle>
      <Row>
        <h2>
          Metacritic:<Value> {score}</Value>
        </h2>
        <h2>
          Released date: <Value>{released_date}</Value>
        </h2>
        <h2>{description}</h2>
      </Row>{" "}
      <GameGenres>
        {genres.map((genre) => (
          <p key={genre.name}>{genre["name"]}</p>
        ))}
      </GameGenres>
      <Message>
        Congratulations! You found the answer in:
        <Value>
          {minutes && minutes < 10 ? "0" : ""}
          {minutes !== 0 && `${minutes}:`}
          {seconds < 10 ? "0" : ""}
          {seconds}
          {minutes > 0 ? " minutes" : " seconds"}!
        </Value>
      </Message>
      <Button
        variant={"primary"}
        functionality={() => dispatch({ type: "Restart" })}
        type="btn-primary"
      >
        Play Again!
      </Button>
    </GameModal>
  );
}

export default Won;
