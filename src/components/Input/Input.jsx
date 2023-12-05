import { memo, useEffect, useRef } from "react";

import styled from "styled-components";

const StyledInput = styled.input`
  color: #f1f1f1;
  font-size: 1.5rem;
  line-height: 1;
  border-style: none;
  outline: none;

  height: calc(1em + 1.6em + 0.5em);
  width: 11.25rem;
  padding: 0.8em 1em;
  border: 0.25em solid transparent;
  background-image: linear-gradient(rgb(0, 0, 0), rgb(22, 0, 21)),
    linear-gradient(120deg, #f652a0 0%, #36eee0 50%, #36eee0 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 1.8em;
  background-size: 200% 100%;

  &::placeholder {
    color: #36eee0;
  }
`;

const Input = memo(function Input({ guess = "", dispatch, fetchedItem }) {
  const formattedName = fetchedItem?.name
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  const inputEl = useRef(null);

  useEffect(
    function () {
      inputEl?.current?.focus();

      function callback() {
        inputEl.current.value = "";
      }

      document.addEventListener("keydown", callback);
      () => document.addEventListener("keydown", callback);
    },
    [formattedName, guess]
  );

  return (
    <StyledInput
      placeholder="Type here"
      maxLength={1}
      type="text"
      value={guess}
      ref={inputEl}
      onChange={(e) =>
        dispatch({
          type: "guess",
          payload: e.target.value,
        })
      }
    />
  );
});

export default Input;
