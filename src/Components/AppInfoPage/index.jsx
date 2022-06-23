import React from 'react';
import * as SC from './styles';
import * as WC from '../../UIComponents/Wrapper/wrappers';
import Header from "../Header";

const Index = (props) => {
    return (
        <SC.AppInfoPage background={props.background}>
            <WC.MainWrapper>
                <Header/>
                <SC.AppInfo>
                    <SC.AppInfoTitle>
                        Portfolio
                    </SC.AppInfoTitle>
                    <SC.AppInfoDescription>
                        Agency provides a full service range including technical skills, design, business understanding.
                    </SC.AppInfoDescription>
                </SC.AppInfo>
            </WC.MainWrapper>
        </SC.AppInfoPage>
    );
};

export default Index;