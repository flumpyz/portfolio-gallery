import styled from 'styled-components';
import './reset.css';
import Header from "./Components/Header";
import AppInfoPage from "./Components/AppInfoPage";

const AppPage = styled.div`

`

function App() {
    return (
        <AppPage>
            <AppInfoPage background={'#28293E'}/>
        </AppPage>
    );
}

export default App;
