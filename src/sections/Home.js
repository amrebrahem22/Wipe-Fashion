import React from "react";
import styled from "styled-components";
import CoverVideo from "../Components/CoverVideo";
import Logo from "../Components/Logo";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section>
      <CoverVideo />
      <Logo />
      <h1>Navbar</h1>
    </Section>
  );
};

export default Home;
