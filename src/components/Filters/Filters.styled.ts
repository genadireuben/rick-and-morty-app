import styled from "styled-components";

export const StyledFiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 58px;
`;

export const StyledInput = styled.div`
  position: relative;
  width: 240px;
  height: 56px;
  margin: 0 10px;
  input,
  select {
    text-align: left;
    padding: 16 0px;
    padding-left: 32px;
    gap: 8px;
    height: 56px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 6px;
    height: 56px;
    width: 40px;
    z-index: 999;
  }
`;
