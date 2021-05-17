import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import News from "./News";
import Donate from "./Donate";
// import NewsList from "./NewsList";
// import HeroList from "./HeroList";



function Main(){
  {
    return (
    <HashRouter>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navigationBar">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
          <li class="navLink"><NavLink to="/">HOME</NavLink></li>
          <li class="navLink"><NavLink to="/about">Mission</NavLink></li>
          </ul>
        </div>

    <a class="navbar-brand" href="/">The Protectors Fund</a>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
          <li class="navLink"><NavLink to="/news">News</NavLink></li>
          <li class="navLink"><NavLink to="/donate">Donate</NavLink></li>
          </ul>
        </div>
      </nav>


<div className="mainContent">
          <div class="content">
          <Route exact path="/" component = {Home}/>
          <Route path="/about" component = {About}/>
          <Route path="/news" component = {News}/>
          <Route path="/donate" component = {Donate}/>
          </div>

        </div>

      </HashRouter>
    );
  }
}


export default Main;
