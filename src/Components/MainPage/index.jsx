import React from 'react';
import MainLayout from "../../UIComponents/MainLayout";
import {useLocation} from "react-router";

const Index = () => {
    return (
        <MainLayout sections={[
            {name: "Show All"},
            {name: "Design"},
            {name: "Branding"},
            {name: "Illustration"},
            {name: "Motion"}
        ]}>

        </MainLayout>
    );
};

export default Index;