import React from 'react';
import * as SC from './styles';
import * as WC from '../../UIComponents/Wrapper/wrappers';
import CardWrapper from "../CardWrapper";

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
                <SC.Select>
                    {props.sections.map((section) => (
                        <option>
                            <SC.StyledNavLink to={`/#${section.name}`}>
                                {section.name}
                            </SC.StyledNavLink>
                        </option>
                    ))}
                </SC.Select>
                <CardWrapper />

            </WC.MainWrapper>
        </SC.GalleryPage>
    );
};

export default Index;