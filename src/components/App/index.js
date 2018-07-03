import React, { Component } from "react";
import styles from "./styles.css";
import '../../styles.css'

import Header from '../Header';
import Footer from '../Footer';
import Search from '../Search';
import Main from '../Main';

export default class App extends Component {
    render() {
        return (
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
        );
    }
}