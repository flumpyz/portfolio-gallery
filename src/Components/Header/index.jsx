import React from 'react';
import * as SC from './styles';
import Logo from "../../UIComponents/Logo";
import ContactButton from "../../UIComponents/ContactButton";

const Index = () => {
    return (
        <SC.HeaderContainer>
            <SC.Header>
                <Logo/>
                <SC.Nav>
                    <SC.Link href="#">About</SC.Link>
                    <SC.Link href="#">Services</SC.Link>
                    <SC.Link href="#">Pricing</SC.Link>
                    <SC.Link href="#">Blog</SC.Link>
                </SC.Nav>
                <ContactButton text={"CONTACT"} color={'#FFFFFF'}/>
            </SC.Header>
        </SC.HeaderContainer>
    );
};

export default Index;