import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;

  background-color: #28293E;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  width: 1170px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 523px;
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