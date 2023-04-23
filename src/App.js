import React from "react";
import Article from "./Article";
import Comment from "./Comment";
import About from "./componenets/About";
import Home from "./componenets/Home";
import Navbar from "./componenets/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Article />
      <Comment />
      
     
      
    </div>
  );
}

export default App;
