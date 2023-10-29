import React from "react";
import styled from "styled-components";

function NavBar(props) {
  const { apodData } = props;

  const Header = styled.div`
    width: 100%;
    border-bottom: 1px solid #3333;
    height: 8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-image: url(${apodData});
  `;
  const Button = styled.button`
    margin-right: 0.5rem;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px,
      4px 4px 0px 0px, 5px 5px 0px 0px;

    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  `;
  const NavBtn = styled.div`
    padding-left: 1rem;
    justify-content: center;
    flex-direction: row;
  `;
  const SearchBar = styled.div`
    display: flex;
    justify-content: center;
  `;
  const Logo = styled.div`
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
    width: 6rem;
    margin-right: 1rem;
    cursor: pointer;
    border: 3px solid;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px,
      4px 4px 0px 0px, 5px 5px 0px 0px;
  `;
  return (
    <Header>
      <NavBtn>
        <Button> Home </Button>
        <Button> About </Button>
        <Button> Explore Mars</Button>
      </NavBtn>{" "}
      <SearchBar>
        <Input type="text" placeholder="Search" />
      </SearchBar>
      <Logo>
        {" "}
        <Img src="https://logowik.com/content/uploads/images/158_nasa.jpg" />
      </Logo>
    </Header>
  );
}

export default NavBar;
