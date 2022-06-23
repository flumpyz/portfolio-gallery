import styled from 'styled-components';

export const Button = styled.button`
  width: 138px;
  height: 48px;

  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(255, 255, 255, 0.29);
  border-radius: 5px;

  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: ${props => props.color};

  cursor: pointer;
  
  transition: 0.3s ease-in-out;
  
  &:hover {
    color: #EF6D58;
    border: 1px solid rgba(239, 109, 88, 0.5);
  }
`