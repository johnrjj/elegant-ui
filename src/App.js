/* @flow */

import React, { Component } from 'react';
// import logo from './logo.svg';
import styled from 'styled-components';

const palette = {
  offwhite: '#F6F6FA',
}

const AppContainer = styled.div`
  position: relative;
  height: 100%;
`;

const MainContainer = styled.div`
  padding-left: 18rem;
`;

const SideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 18rem;
  left: 0;
  top: 0;
  background: linear-gradient(to bottom, rgba(238,104,200,1) 0%,rgba(239,202,120,1) 100%); 
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 6rem;
  border-bottom: 1px solid #EEEEEE;
  margin-bottom: 2rem;
`;

const NavBarItem = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.85rem;
  margin: 1rem;
  opacity: ${props => props.active ? 1 : 0.4};
  cursor: pointer;
  padding: 1rem;
  :hover {
    opacity: ${props => props.active ? 1 : 0.8};
  }
`;

const SearchInput = styled.input`
  line-height: normal;
  border: none;
  border: 1px solid #fff;
  border-radius: .5rem;
  outline: 0;
  width: 100%;
  max-width: 100%;
  margin: 0 0 1rem;
  padding: 1.5rem;
  height: auto;
  font-size: 1.1rem;
  box-shadow: rgba(95,42,80,0.10) 0 7px 42px;
`;

const PillButton = styled.button`
  background-color: ${props => props.selected ? '#F9F9F9' : '#DD4DB3'};
  position: relative;
  vertical-align: middle;
  text-align: center;
  padding: ${props => props.selected ? '0.75rem 1.5rem' : '1rem 1.5rem'};
  line-height: 1rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  box-shadow: ${props => props.selected ? 'none' : 'rgba(221,77,179,0.50) 0 .25rem 1rem'};
  letter-spacing: 1px;
  color: ${props => props.selected ? '#DD4DB3' : '#fff'};
  border: none;
  min-width: 5.8rem;
  height: 50px;
  cursor: pointer;
`;

const PillOutlineButton = styled.button`
  background-color: transparent;
  position: relative;
  vertical-align: middle;
  text-align: center;
  padding: 1rem 1.5rem;
  line-height: 1rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  letter-spacing: 1px;
  color: #E44C7A;
  border: 1px solid #E44C7A;
  min-width: 5.8rem;
  cursor: pointer;
  opacity: 0.8;
`;



const Card = styled.div`
  height: 18rem;
  width: 17rem;
  background-color: #fff;
  box-shadow: rgba(95,42,80,0.10) 0 7px 42px;
  border-radius: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <SideNav />
        <MainContainer>
          <NavBar>
            <NavBarItem active>Search</NavBarItem>
            <NavBarItem>Talent</NavBarItem>
            <NavBarItem>Jobs</NavBarItem>
            <NavBarItem>Help</NavBarItem>
          </NavBar>
          <SearchInput placeholder="UX Designer" />
          <CardGrid>
            <Card>
              <PillOutlineButton>Load More</PillOutlineButton>
              <PillButton>Hire</PillButton>
            </Card>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card>
              <PillButton selected>          
                <i className="material-icons">check</i>
              </PillButton>
            </Card>
          </CardGrid>
        </MainContainer>
      </AppContainer>
    );
  }
}

export default App;


