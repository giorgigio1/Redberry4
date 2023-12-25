import Header from "./Header";
import SecondHeader from "./SecondHeader";
import Category from "./Category";
import Blog from "./Blog";
import "../App.css";
import { useState } from "react";
import LoginModal from "./LoginModal";

const Main = () => {

  return (
    <main className="main">
      <Header />
      <SecondHeader />
      <Category />
      <Blog />
      
    </main>
  );
};

export default Main;
