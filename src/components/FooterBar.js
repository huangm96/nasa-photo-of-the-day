import React from "react";
import styled from 'styled-components';
import FooterButtons from './FooterButtons';

const Footer = styled.div`
    background:black;
`;
const CopyRight = styled.p`
    color:white;
    font-size:0.75rem;
    padding: 10px 0;
`;


const FooterBar = () =>{

  return (
    
      <Footer >
          <FooterButtons />
        <CopyRight>NASA Daily Photo Apps @2019</CopyRight>
      </Footer>
      
    
  );
}

export default FooterBar;
