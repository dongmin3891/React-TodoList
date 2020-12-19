import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
