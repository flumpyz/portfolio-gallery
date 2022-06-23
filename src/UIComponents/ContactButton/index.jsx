import React from 'react';
import * as SC from './styles';

const Index = (props) => {
    return (
        <SC.Button color={props.color}>
            {props.text}
        </SC.Button>
    );
};

export default Index;