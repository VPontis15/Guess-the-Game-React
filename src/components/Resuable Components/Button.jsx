import styled, { css, keyframes } from "styled-components";
import React from "react";
// Keyframes for button animation
const btnAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledButton = styled.button`
  border-radius: 5px;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 1.25em 3em;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? ".3" : "1")};

  background-color: ${(props) =>
    props.variant === "primary" ? "#36eee0" : "transparent"};
  color: ${(props) => (props.variant === "primary" ? "#0b0b0b" : "#36eee0")};
  outline: ${(props) =>
    props.variant === "secondary" ? "1px solid #36eee0" : "none"};

  ${(props) =>
    props.animation &&
    css`
      animation: ${btnAnimation} 1.25s ease-out;
      backface-visibility: hidden;
    `}
`;
function Button({
  children,
  disabled = false,
  animation = false,

  functionality,
  variant,
}) {
  return (
    <StyledButton
      animation={animation}
      variant={variant}
      disabled={disabled}
      onClick={functionality}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
