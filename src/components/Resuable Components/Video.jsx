import styled from "styled-components";
import React from "react";

import bg_video from "./bg_video.mp4";

const StyledVideo = styled.video`
  position: fixed;
  inset: 0;
  min-height: 100vh;
  width: 100vw;
  z-index: -100;
  object-fit: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
`;
export default function Video() {
  return (
    <div>
      <StyledVideo autoPlay loop muted>
        <source src={bg_video} type="video/mp4" />
        <source src={bg_video} type="video/ogg" />
      </StyledVideo>
    </div>
  );
}
