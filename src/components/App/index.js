import React, { Component } from "react";
import { injectGlobal } from '../../styles';

import Header from '../Header';
import Footer from '../Footer';
import Search from '../Search';
import Main from '../Main';

import Wrapper from './Wrapper';
import Container from './Container';

import { Provider } from "mobx-react";
import TitleStore from '../../stores/TitleStore.js';

const App = () =>
    <Provider titleStore={TitleStore}>
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