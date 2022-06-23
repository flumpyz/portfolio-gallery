import React from 'react';
import * as SC from './styles';
import {Card} from "./styles";

const Index = (props) => {
    return (
        <SC.Card img={props.img}>
            <SC.CardInfo>
                <SC.CardCategory>
                    {props.category}
                </SC.CardCategory>
                <SC.CardTitle>
                    {props.name}
                </SC.CardTitle>
            </SC.CardInfo>
        </SC.Card>
    );
};

export default Index;