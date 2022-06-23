import React from 'react';
import * as SC from './styles';

const Index = ({onclick}) => {
    return (
        <SC.Button onClick={onclick}>
            LOAD MORE
        </SC.Button>
    );
};

export default Index;