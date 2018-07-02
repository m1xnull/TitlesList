import React, { Component } from "react";
import styles from "../App/styles.css";
import '../../styles.css'

import Header from '../Header';
import Footer from '../Footer';
import Search from '../Search';
import Main from '../Main';

import { Provider } from "mobx-react";
import TitleStore from '../../stores/TitleStore.js';

export default class App extends Component {
    render() {
        return (
            <Provider titleStore={TitleStore}>
                <div className={styles.flexContainer}>
                    <div className={styles.container}>
                        <div>
                            <Header />
                            <Search />
                            <Main />
                        </div>
                        <Footer />
                    </div>
                </div>
            </Provider>
        );
    }
}