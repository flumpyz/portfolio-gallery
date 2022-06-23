import React, {useEffect, useLayoutEffect, useState} from 'react';
import * as SC from './styles';
import {getSomeCards} from "./cards";
import Card from "./Card";
import LoadButton from "../../UIComponents/LoadButton";
import {useLocation} from "react-router";

const Index = () => {
    const [cardsArray, setCardsArray] = useState(null);
    console.log(cardsArray);

    useEffect(() => {
        setCardsArray(getSomeCards());
    }, [])

    const setCardsCountHandler = () => {
        setCardsArray([...cardsArray, ...getSomeCards()]);
    }

    return (
        <SC.CardWrapper>
            <SC.Cards>
                {cardsArray?.map((card) => (
                    <Card name={card.name}
                          img={card.img}
                          category={card.category}
                    />
                ))}
            </SC.Cards>
            <LoadButton onclick={setCardsCountHandler}/>
        </SC.CardWrapper>
    );
};

export default Index;