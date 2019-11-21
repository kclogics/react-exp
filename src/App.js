
import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home,{newContact,FancyButton} from './home'
import Home1  from './home1'
import Home2  from './home2'
import Home3  from './home3'
import Home4  from './home4'
import Home5  from './home5'
import Home6  from './home6'
import Home7  from './home7'



export default function App() {
  return (
    <Router>
      
      <div className="container">
      <div className="box">
        <div className="index">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/home1">home1</Link>
            </li>
            <li>
              <Link to="/home3">home3 <small>(Context)</small> </Link>
            </li>
            <li>
              <Link to="/home4">home4</Link>
            </li>
            <li>
              <Link to="/home5">home5</Link>
            </li>
            <li>
              <Link to="/home6">home6<small>(style)</small> </Link>
            </li>
            <li>
              <Link to="/home7">home7<small>(aus:264d004d)</small></Link>
            </li>
          </ul>
        </nav>
        </div>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        <div className="content">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/home1">
            <Home1 />
          </Route>
          <Route path="/home2">
            <Home2 />
          </Route>
          <Route path="/home3">
            <Home3 />
          </Route>
          <Route path="/home4">
            <Home4 />
          </Route>
          <Route path="/home5">
            <Home5 />
          </Route>
          <Route path="/home6">
            <Home6 />
          </Route>
          <Route path="/home7">
            <Home7 />
          </Route>
        </Switch>
        </div>
     
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

function isAnExecutortrue() {
  console.log("true", newContact().isAnExecutor = true)
}

function isAnExecutorflase() {
  console.log("false", newContact().isAnExecutor = false)
}

const refs = React.createRef();

function About() {
  return (
  <>
  <h2>About</h2>
  <button onClick={isAnExecutortrue}>true</button>
  <button onClick={isAnExecutorflase}>false</button>
  {/* <FancyButton ref={refs}>Click me!</FancyButton>; */}
  </>
  
  )
}

function Users() {
  return <h2>Users</h2>;
}
