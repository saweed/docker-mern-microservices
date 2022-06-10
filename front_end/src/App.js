import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import Container from "./components/layout/Container";
import Copyrights from "./components/layout/Copyrights";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

// Redux related
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./helpers/defaultHeaders";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    // store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Container />

        <Footer />
        <Copyrights />
      </Router>
    </Provider>
  );
}

export default App;
