import styled from "styled-components";
import { useEffect } from "react";

const StyledTimer = styled.h2`
  font-size: 6.5rem;
`;

function Timer({ minutes, seconds, dispatch }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <StyledTimer>{`${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`}</StyledTimer>
  );
}

export default Timer;
