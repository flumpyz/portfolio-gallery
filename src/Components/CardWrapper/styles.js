import styled from 'styled-components';
import Card from "./Card";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-top: 74px;
`

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
`

export const StyledCard = styled(Card)`
`
