import React, {FC} from 'react';
import HeaderAbove from "./Header/HeaderAbove";
import HeaderUnder from "./Header/HeaderUnder";
import Main from "./Main";
import Advantage from "./Advantage";
import Categories from "./Categories";
import About from "./About";
import Footer from "./Footer";
import Contacts from "./Contacts";

const App: FC = () => {
    return (
        <div className="App">
            <header className="header _pos-sticky _pos-top _pos-left _index-99999">
                <HeaderAbove/>
                <HeaderUnder/>
            </header>
            <Main />
            <Advantage />
            <Categories />
            <About />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
