/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

const palette = {
  offwhite: '#F6F6FA',
}

const AppContainer = styled.div`
  position: relative;
  height: 100%;
`;

const MainContainer = styled.div`
  margin-left: 18rem;
  transform: translateX(-3rem);
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 6rem;
  // border-bottom: 1px solid #EEEEEE;
  // margin-bottom: 2rem;
  z-index: -1;
`;

const NavBarItem = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
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



const PillButton = styled.button`
  background-color: ${props => props.selected ? '#F9F9F9' : '#DD4DB3'};
  position: relative;
  vertical-align: middle;
  text-align: center;
  padding: ${props => props.selected ? '0.75rem 1.5rem' : '1rem 1.5rem'};
  line-height: 1rem;
  border-radius: 1.5rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  box-shadow: ${props => props.selected ? 'none' : 'rgba(221,77,179,0.30) 0 .25rem 1rem'};
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
  display: relative;
  height: 18rem;
  width: 17rem;
  background-color: #fff;
  box-shadow: rgba(95,42,80,0.10) 0 7px 42px;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1rem 0;
`;

const Avatar = styled.img`
  display: inline-block;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const StyledName = styled.div`
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const StyledPosition = styled.div`
  color: #F054C0;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 0.8rem;
  text-align: center;
  opacity: 0.8;
`;

const LoadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;




const UserCard = ({ selected, avatarSrc, name, position }) => (
  <Card>
    <FlexContainer>
      <Avatar src={avatarSrc}></Avatar>
      <div>
        <StyledName>{name}</StyledName>
        <StyledPosition>{position}</StyledPosition>
      </div>
      {
        selected 
          ? <PillButton selected><i className="material-icons">check</i></PillButton>
          : <PillButton>Hire</PillButton>

      }
    </FlexContainer>
  </Card>
)

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 17rem);
  grid-gap: 2rem;
  margin-bottom: 4em;
`;

const UnstyledSearchIcon = ({ className }) => 
  (<i className={ "material-icons " + className}>search</i>);

const SearchIcon = styled(UnstyledSearchIcon)`
  width: 2rem;
  display: inline-block;
  margin-right: 1rem;
  opacity: 0.2;
`;

const ThinGrayLine = styled.hr`
  margin-left: 3rem;
  margin-bottom: 2rem;
  background-color: #EEEEEE;
  border-top: 1px solid #EEEEEE;
  border-color: #EEEEEE;
`;

const SearchContainer = styled.div`
  border: 1px solid #fff;
  border-radius: .5rem;
  max-width: calc(36rem);
  min-width: calc(17rem);
  box-shadow: rgba(95,42,80,0.10) 0 7px 42px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  background: #fff;
`;

const SearchInput = styled.input`
  line-height: normal;
  border: none;
  border-radius: .5rem;
  outline: 0;
  width: 100%;
  padding: 1.5rem;
  height: auto;
  font-size: 1.1rem;
  position: relative;
`;

// sidenav
const SideNav = styled.div`
  position: fixed;
  height: 100%;
  width: calc(18rem - 1.5rem);
  left: 0;
  top: 0;
  z-index: 0;
  padding-left: 1.5rem;
  color: #fff;
  background: linear-gradient(to bottom, rgba(238,104,200,1) 0%,rgba(239,202,120,1) 100%); 
`;
const SideNavTitle = styled.div`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 20rem;
`;

const SideNavItemContainer = styled.div`
  padding: 1rem 0;
  margin: 1rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.85;
  :hover {
    opacity: 1;
  }
`;

const SideNavItemText = styled.div`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-left: 0.5rem;

`;

const UnstyledIcon = ({ className, icon }) => 
  (<i className={ "material-icons " + className}>{icon}</i>);

const SideNavIcon = styled(UnstyledIcon)`
  font-size: 1rem;
`;

const users = [
  { 
    name: 'Angelica Montona',
    avatar: 'https://randomuser.me/api/portraits/women/72.jpg', 
    position: 'UX/UI Designer',
    selected: false,
  },
  { 
    name: 'Barny Stoner',
    avatar: 'https://randomuser.me/api/portraits/men/79.jpg', 
    position: 'UX Expert',
  },  
  { 
    name: 'Yury Smirnov',
    avatar: 'https://randomuser.me/api/portraits/men/64.jpg', 
    position: 'Design Lead',
    selected: true,
  },
  { 
    name: 'John Newman',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg', 
    position: 'Junior UX Designer',
  },
  { 
    name: 'Linda Larson',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg', 
    position: 'Junior UX Designer',
  },
  { 
    name: 'Erica Love',
    avatar: 'https://randomuser.me/api/portraits/women/58.jpg', 
    position: 'UX Designer',
    selected: true,
  },
  { 
    name: 'Barny Stoner',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg', 
    position: 'UX Expert',
  },    { 
    name: 'Barny Stoner',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg', 
    position: 'UX Expert',
  },  
];

class App extends Component {
  render() {
    return (
      <AppContainer>
        <SideNav>
          <SideNavTitle>Elegant</SideNavTitle>
          <SideNavItemContainer>
            <SideNavIcon icon={'dashboard'}/>
            <SideNavItemText>My shortlist</SideNavItemText>
          </SideNavItemContainer>
          <SideNavItemContainer>
            <SideNavIcon icon={'class'}/>
            <SideNavItemText>Proposals</SideNavItemText>
          </SideNavItemContainer>          
          <SideNavItemContainer>
            <SideNavIcon icon={'work'}/>
            <SideNavItemText>Projects</SideNavItemText>
          </SideNavItemContainer>         
           <SideNavItemContainer>
            <SideNavIcon icon={'event'}/>
            <SideNavItemText>Calendar</SideNavItemText>
          </SideNavItemContainer>          
        </SideNav>
        <MainContainer>
          <NavBar>
            <NavBarItem active>Search</NavBarItem>
            <NavBarItem>Talent</NavBarItem>
            <NavBarItem>Jobs</NavBarItem>
            <NavBarItem>Help</NavBarItem>
          </NavBar>
          <ThinGrayLine/>
          <SearchContainer>
            <SearchInput placeholder="UX Designer"/>
            <SearchIcon/>
          </SearchContainer>
          <CardGrid>
            {
              users.map(user => 
                <UserCard
                  selected={user.selected}
                  avatarSrc={user.avatar}
                  name={user.name}
                  position={user.position}
                ></UserCard>)
            }
          </CardGrid>
          <LoadMoreButtonContainer>
            <PillOutlineButton>Load More</PillOutlineButton>
          </LoadMoreButtonContainer>
        </MainContainer>
      </AppContainer>
    );
  }
}

export default App;


