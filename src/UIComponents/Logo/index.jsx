import React from 'react';
import styled from 'styled-components';
import Polygon from "../../Icons/Polygon";

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 140px;
  height: 44px;
`

const LogoText = styled.p`
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  
  color: #FFFFFF;
`

const Index = () => {
    return (
        <Logo>
            <Polygon color={'#EF6D58'}/>
            <LogoText>Agency</LogoText>
        </Logo>
    );
};

export default Index;