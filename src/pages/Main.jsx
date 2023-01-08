import React from "react";
import Footer from "../components/common/Footer";
import GlobalStyle from "../components/common/GlobalStyle";
import Header from "../components/common/Header";
import ToDoList from "../components/ToDo/ToDoList";

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ToDoList />
      <Footer />
    </>
  );
};

export default Main;
