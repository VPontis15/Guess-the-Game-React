import styled, { css, keyframes } from "styled-components";

const animateRotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(120deg, #f652a0 0%, #36eee0 50%, #36eee0 100%);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  ${(props) =>
    props.animation &&
    css`
      animation: ${animateRotate} 1s linear infinite;
    `}
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <StyledSpinner animation={true}></StyledSpinner>
    </SpinnerContainer>
  );
}

export default Spinner;
