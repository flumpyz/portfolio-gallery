import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
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
`

const Index = (props) => {
    return (
        <Button color={props.color}>
            {props.text}
        </Button>
    );
};

export default Index;