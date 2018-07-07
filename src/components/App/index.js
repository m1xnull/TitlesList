import React, { Component } from "react";

import Header from '../Header';
import Footer from '../Footer';
import Search from '../Search';
import Main from '../Main';

import { Wrapper, Container } from './styles.js'

import { Provider } from "mobx-react";
import TitlesStore from '../../stores/TitlesStore';

const App = () =>
    <Provider titlesStore={TitlesStore}>
        <Wrapper>
            <Container>
                <div>
                    <Header />
                    <Search />
                    <Main />
                </div>
                <Footer />
            </Container>
        </Wrapper>
    </Provider>;

export default App;