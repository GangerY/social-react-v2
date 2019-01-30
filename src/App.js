import React from "react";
import "./App.css";
import Header from "./main-structure/Header";
import Footer from "./main-structure/Footer";
import Navigation from "./main-structure/menu/Navigation";
import Profile from "./main-structure/content/Profile";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="middle-wrapper">
          <Navigation />
          <Profile />
      </div>
      <Footer />
    </div>
  );
};

export default App;
