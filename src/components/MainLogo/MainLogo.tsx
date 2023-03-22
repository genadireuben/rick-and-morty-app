import styled from "styled-components";

const StyledMainLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 16px 16px;
`;

const MainLogo = () => {
  return (
    <StyledMainLogo>
      <img src="assets/images/main-logo.svg" alt="" />
    </StyledMainLogo>
  );
};
export default MainLogo;
