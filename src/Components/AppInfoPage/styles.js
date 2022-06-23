import styled from 'styled-components';

export const AppInfoPage = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 400px;

  background-color: ${props => props.background};
`

export const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

export const AppInfoTitle = styled.h1`
  margin-bottom: 29px;
  
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 96px;

  color: #FFFFFF;
`

export const AppInfoDescription = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: rgba(255, 255, 255, 0.64);
`