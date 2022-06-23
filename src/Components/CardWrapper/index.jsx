import React from 'react';
import * as SC from './styles';
import {getCardsInfo} from "./cards";
import Card from "./Card";

const Index = () => {
    const cards = getCardsInfo(9);

    return (
        <SC.CardWrapper>
            {cards.map((card) => (
                <Card name={card.name}
                      img={card.img}
                      category={card.category}
                />
            ))}
        </SC.CardWrapper>
    );
};

export default Index;