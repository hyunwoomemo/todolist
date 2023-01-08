import React from "react";
import styled from "@emotion/styled";
import { AiOutlineUnorderedList, AiFillStar, AiFillHome, AiFillPieChart } from "react-icons/ai";
import { BsLightningChargeFill } from "react-icons/bs";

const Base = styled.div`
  background-color: #252337;
  color: #fff;
  position: fixed;
  width: 100%;
  display: flex;
  bottom: 0;
  align-items: center;
  padding: 1rem;
`;

const MenuWrapper = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
`;

const Footer = () => {
  return (
    <Base>
      <MenuWrapper>
        <MenuItem>
          <AiOutlineUnorderedList />
        </MenuItem>
        <MenuItem>
          <AiFillStar />
        </MenuItem>
        <MenuItem>
          <AiFillHome />
        </MenuItem>
        <MenuItem>
          <BsLightningChargeFill />
        </MenuItem>
        <MenuItem>
          <AiFillPieChart />
        </MenuItem>
      </MenuWrapper>
    </Base>
  );
};

export default Footer;
