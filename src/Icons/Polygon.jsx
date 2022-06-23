import React from 'react';

const Polygon = (props) => {
    return (
        <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 6.18035L6.05254 18.4934L12.5259 38.4164H33.4742L39.9475 18.4934L23 6.18035ZM23 0L45.8254 16.5836L37.1069 43.4164H8.89319L0.174683 16.5836L23 0Z"
                  fill={props.color}/>
            <path d="M22.5 14L31.535 20.564L28.084 31.186H16.916L13.465 20.564L22.5 14Z"
                  fill={props.color}/>
        </svg>
    );
};

export default Polygon;