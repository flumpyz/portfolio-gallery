import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: flex-end;
  
  width: 370px;
  height: 416px;

  margin-bottom: 32px;

  background: url("${props => props.img}");

  border-radius: 7px;
  
  cursor: pointer;
`

export const CardInfo = styled.div`
  margin-left: 48px;
  margin-bottom: 50px;
`

export const CardTitle = styled.h3`
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 53px;

  color: #FFFFFF;
`

export const CardCategory = styled.div`
  display: inline-flex;

  align-items: center;

  height: 38px;
  
  margin-bottom: 19px;

  padding-left: 16px;
  padding-right: 20px;

  background-color: #FFFFFF;

  border-radius: 20px;

  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #391400;
`
