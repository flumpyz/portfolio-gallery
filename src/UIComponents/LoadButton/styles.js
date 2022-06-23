import styled from "styled-components";

export const Button = styled.button`
  width: 170px;
  height: 48px;
  
  background-color: #FFFFFF;

  border-radius: 5px;
  border: none;
  
  margin-bottom: 184px;
  
  cursor: pointer;

  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #391400;
  
  outline: none;
  
  transition: 0.3s ease-in-out;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid #391400;
  }
`