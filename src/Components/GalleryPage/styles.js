import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const GalleryPage = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  background-color: ${props => props.background};
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  
  width: 564px;
  
  margin-top: 81px;
  
  @media(max-width: 1040px) {
    display: none;
  }
`

export const Select = styled.select`
    
`

export const StyledNavLink = styled(NavLink)`
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: rgba(57, 20, 0, 0.64);
  
  text-decoration: none;
  
  transition: 0.3s ease-in-out;
  
  &:hover {
    color: #16CD53;
  }
`