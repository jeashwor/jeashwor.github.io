import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Bio from "./pages/Bio";
import Resume from "./pages/Resume";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Bio} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/resume" component={Resume} />
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
