import React from "react";
import "./App.css";
import NASA from "./components/NASA";
import styled from 'styled-components';
import MenuBar from "./components/MenuBar";
import FooterBar from "./components/FooterBar";

const AppStyle = styled.div`
     text-align: center;
     max-width:100vw;
`;



function App() {
  return (
    <AppStyle>
      
      <div >
        <h1>NASA Daily Photo Apps</h1>
      </div>
      <MenuBar className ="menuBar"/>
      <NASA />
      <FooterBar />
    </AppStyle>
    
  );
}

export default App;
