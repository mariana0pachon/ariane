import React from "react";
import Navbar from '~components/Navbar';
import Home from '~components/Home';
import AboutMe from '~components/AboutMe';
import MyWork from '~components/MyWork';
import MyMethodology from '~components/MyMethodology';
import Contact from '~components/Contact';

const App = () => <>
  <Navbar/>
  <Home/>
  <MyWork/>
  <MyMethodology/>
  <Contact/>
</>;

export default App;
