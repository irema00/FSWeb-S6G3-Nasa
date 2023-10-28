import React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #3333;
  height: 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: url("https://apod.nasa.gov/apod/image/2307/MandelWilson9_GabrielRodriguesSantos_APOD1024.jpg");
`;

const Button = styled.button`
  flex-direction: row;
  margin-right: 1rem;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

const Container = styled.div``;
const NavBtn = styled.div`
  padding-left: 1rem;
  justify-content: center;
`;
const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Input = styled.input`
  padding: 0.25em 0.5em;
  border: 2px solid #000;
  border-radius: 4px;
  background-color: light-gray;
  font-family: "Open Sans", sans-serif;
`;
const Img = styled.img`
  width: 12%;
  margin-right: 1rem;
  cursor: pointer;
  border: 3px solid;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
`;

function NavBar() {
  return (
    <Header>
      <Container>
        <NavBtn>
          <Button> Home </Button>
          <Button> About </Button>
          <Button> Explore Mars</Button>
        </NavBtn>
      </Container>
      <SearchBar>
        <Input type="text" placeholder="Search" />
      </SearchBar>
      <Container2>
        {" "}
        <Img src="https://logowik.com/content/uploads/images/158_nasa.jpg" />
      </Container2>
    </Header>
  );
}

export default NavBar;
