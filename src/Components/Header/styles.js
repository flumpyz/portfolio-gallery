import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 80px;

  background-color: #28293E;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  width: 1170px;
  
  @media(max-width: 1170px) {
    width: 1040px;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 523px;
  
  @media(max-width: 1040px) {
    display: none;
  }
`

export const Link = styled.a`
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #FFFFFF;

  text-decoration: none;

  transition: 0.3s ease-in-out;

  &:hover {
    color: #EF6D58;
  }
`