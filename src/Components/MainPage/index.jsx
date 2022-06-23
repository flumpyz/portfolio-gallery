import React from 'react';
import MainLayout from "../../UIComponents/MainLayout";

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