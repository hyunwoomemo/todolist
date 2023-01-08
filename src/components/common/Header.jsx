import React from "react";
import styled from "@emotion/styled";

const Base = styled.div`
  display: flex;
  background-color: #252337;
  color: #fff;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: beige;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const Title = styled.h1`
  margin-left: 2rem;
`;

const Header = () => {
  return (
    <Base>
      <Logo>Img</Logo>
      <Title>To Do List</Title>
    </Base>
  );
};

export default Header;
