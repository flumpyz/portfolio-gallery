import React, {useEffect, useLayoutEffect, useState} from 'react';
import * as SC from './styles';
import {getSomeCards} from "./cards";
import Card from "./Card";
import LoadButton from "../../UIComponents/LoadButton";
import {useLocation} from "react-router";

const Index = () => {
    const location = useLocation();
    const [cardsArray, setCardsArray] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        setCardsArray(getSomeCards());
    }, [])

    const setCardsCountHandler = () => {
        setCardsArray([...cardsArray, ...getSomeCards()]);
    }

    return (
        <SC.CardWrapper>
            <SC.Cards>
                {(location.hash !== '' && location.hash.slice(1) !== "Show%20All") ?
                    cardsArray?.filter(card => card.category === location.hash.slice(1)).map((card) => (
                        <SC.StyledCard name={card.name}
                                       img={card.img}
                                       category={card.category}
                        />
                    )) : cardsArray?.map((card) => (
                        <SC.StyledCard name={card.name}
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