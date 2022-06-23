import React from 'react';
import * as SC from './styles';
import * as WC from '../../UIComponents/Wrapper/wrappers';
import { NavLink } from "react-router-dom";

const Index = (props) => {
    return (
        <SC.GalleryPage background={props.background}>
            <WC.MainWrapper>
                <SC.Nav>
                    {props.sections.map((section) => (
                        <SC.StyledNavLink to={`/#${section.name}`}>
                            {section.name}
                        </SC.StyledNavLink>
                    ))}
                </SC.Nav>
            </WC.MainWrapper>
        </SC.GalleryPage>
    );
};

export default Index;