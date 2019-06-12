import React from "react";
import Aux from "../../hoc/Aux";
import Header from "./../layout/header";
import Menu from "./../layout/menu";
import Footer from "./../layout/footer";
import Pages from "../pages/pages";
const Home = props => {
  return (
    <Aux>
      <Header />
      <Menu />
      <Pages />
      <Footer />
    </Aux>
  );
};

export default Home;
