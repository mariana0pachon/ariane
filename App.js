import React from "react";
import { HashRouter, Switch, Route  } from "react-router-dom";
import Navbar from '~components/Navbar';
import Home from '~components/Home';
import AboutMe from '~components/AboutMe';
import MyWork from '~components/MyWork';
import MyMethodology from '~components/MyMethodology';
import MyMethodologySlider from '~components/MyMethodologySlider';
import Testimonials from '~components/Testimonials';
import Contact from '~components/Contact';
import Publications from '~components/MyWork/Publications';
import Research from '~components/MyWork/Research';
import Workshops from '~components/MyWork/Workshops';
import Conferences from '~components/MyWork/Conferences';
import Lectures from '~components/MyWork/Lectures';
import Trips from '~components/MyWork/Trips';

const HomePage = () => <>
  <Home />
  <MyWork />
  <MyMethodology/>
  <Testimonials />
  <Contact/>
</>;

const App = () =><HashRouter>
  <Navbar/>
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/aboutme' component={AboutMe}/>
    <Route path='/publications' component={Publications}/>
    <Route path='/research' component={Research}/>
    <Route path='/workshops' component={Workshops}/>
    <Route path='/conferences' component={Conferences}/>
    <Route path='/lectures' component={Lectures}/>
    <Route path='/trips' component={Trips}/>
    <Route path='/mymethodology' component={MyMethodologySlider}/>
  </Switch>
</HashRouter>;

export default App;
