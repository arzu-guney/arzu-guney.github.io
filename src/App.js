import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Blog from "./components/Blog/Blog";
import Products from "./components/Products/Products";
import Projects from "./components/Projects/Projects";
import OpenSource from "./components/OpenSource/OpenSource";
import Speaking from "./components/Speaking/Speaking";
import Footer from "./components/Footer/Footer";
import MusicToggle from "./components/MusicToggle/MusicToggle";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MusicToggle />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/speaking" element={<Speaking />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

