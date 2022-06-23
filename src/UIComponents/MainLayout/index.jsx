import React from 'react';
import styled from 'styled-components';
import AppInfoPage from "../../Components/AppInfoPage";
import GalleryPage from "../../Components/GalleryPage";

const AppPage = styled.div`

`

const Index = (props) => {
    return (
        <AppPage>
            <AppInfoPage background={'#28293E'}/>
            <GalleryPage background={'#FDF0E9'}
                         sections={props.sections}/>
        </AppPage>
    );
};

export default Index;