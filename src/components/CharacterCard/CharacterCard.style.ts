import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 240px;
  height: 244px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  transition: ease-in-out 200ms;
  cursor: pointer;
  :hover {
    transform: scale(1.03) translate(-5px, -10px) skew(-2deg, 2deg);
  }
`;

export const StyledImageCard = styled.div`
  width: 240px;
  height: 168px;
  overflow: hidden;
  position: relative;
  border-radius: 8px 8px 0px 0px;
  background: #c4c4c4;
  & img {
    width: 240px;
    height: 224px;
    position: absolute;
    left: 0px;
    right: 0px;
    top: -28px;
    bottom: -28px;
  }
`;

export const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  width: 240px;
  height: 76px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  & :first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    align-items: center;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }

  & :last-child {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.6);
    mix-blend-mode: normal;
  }
`;
