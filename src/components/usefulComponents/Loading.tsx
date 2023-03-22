import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 30%;
`;

const Loading = () => {
  return (
    <StyledLoading>
      <img src="assets/images/loading-image.svg" alt="" />
    </StyledLoading>
  );
};

export default Loading;
