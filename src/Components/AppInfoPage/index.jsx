import React from 'react';
import styled from 'styled-components';
import Header from "../Header";

const AppInfoPageContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 400px;

  background-color: ${props => props.background};
`

const AppInfoPage = styled.div`
  display: flex;
  flex-direction: column;

  width: 1170px;
  height: 100%;
`

const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const AppInfoTitle = styled.h1`
  margin-bottom: 29px;
  
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 96px;

  color: #FFFFFF;
`

const AppInfoDescription = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: rgba(255, 255, 255, 0.64);
`

const Index = (props) => {
    return (
        <AppInfoPageContainer background={props.background}>
            <AppInfoPage>
                <Header/>
                <AppInfo>
                    <AppInfoTitle>
                        Portfolio
                    </AppInfoTitle>
                    <AppInfoDescription>
                        Agency provides a full service range including technical skills, design, business understanding.
                    </AppInfoDescription>
                </AppInfo>
            </AppInfoPage>
        </AppInfoPageContainer>
    );
};

export default Index;