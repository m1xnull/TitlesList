import React from "react";

import { Provider } from "mobx-react";
import { configure } from "mobx";
import TitlesStore from "../../stores/TitlesStore";

import Header from "../Header";
import Footer from "../Footer";
import Search from "../Search";
import Main from "../Main";

import { Wrapper, Container } from "./styles";

import injecGlobalCss from "../../styles";

configure({ enforceActions: "strict" });

const App = () => {
  injecGlobalCss();
  return (
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
    </Provider>
  );
};

export default App;
