import styled from "styled-components";

export const Okay = styled.div`
  align-items: center;
  background-color: #38c47f;
  border-radius: 50%;
  display: flex;
  margin: 20px auto;
  justify-content: center;
  height: 80px;
  width: 80px;

  &::after {
    border-bottom: 6.4px solid white;
    border-left: 6.4px solid white;
    content: "";
    display: block;
    height: 16px;
    width: 32px;
    transform: rotate(-45deg) translateX(3.2px) translateY(-3.2px);
  }
`;

export const Error = styled.div`
  align-items: center;
  background-color: #ff4c47;
  border-radius: 50%;
  display: flex;
  color: white;
  font-family: sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin: 20px auto;
  justify-content: center;
  height: 80px;
  width: 80px;
`;
