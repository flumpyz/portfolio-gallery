import React from 'react';
import styled from 'styled-components';
import Logo from "../../UIComponents/Logo";
import Button from "../../UIComponents/Button";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;

  background-color: #28293E;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  width: 1170px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 523px;
`

const Link = styled.a`
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #FFFFFF;

  text-decoration: none;
`

const Index = () => {
    return (
        <HeaderContainer>
            <Header>
                <Logo/>
                <Nav>
                    <Link href="#">About</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Pricing</Link>
                    <Link href="#">Blog</Link>
                </Nav>
                <Button text={"CONTACT"} color={'#FFFFFF'}/>
            </Header>
        </HeaderContainer>
    );
};

export default Index;