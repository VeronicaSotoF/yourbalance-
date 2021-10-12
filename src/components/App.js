import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Banner from "./Banner";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";

const AppContainer = styled.div`
  background-color: #6bb1be;
  min-height: 99vh;

  font-family: "Poppins", sans-serif;

  h1 {
    margin: 0;
  }
  .box-shadow {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }

  --accent-color: #aad153;
  --light-bg-color: white;
  --light-bg-color2: #ccc0c3;
  --blue-color: #6bb1be;
  --teal-color: coral;
  --green-color: #9ac444;
  --lime-color: pink;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Banner title="" subTitle="" />
      <Services />
      <About />
      <Footer />
    </AppContainer>
  );
};

export default App;
