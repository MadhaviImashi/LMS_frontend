//import the styled-components package
import styled from "styled-components/";
//import the layout components
import {Header, Main, Footer} from "./components/Layout";
import {NavBar, NavItem, NavLink} from "./components/Navbar";


//create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  pading: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <>
      <Header>
        <NavBar>
          <NavItem href="#">
            <NavLink>Catalog</NavLink>
          </NavItem>
          <NavItem href="#">
            <NavLink>Dashboard</NavLink>
          </NavItem>
        </NavBar>
      </Header>
      <Main>
        This is the main section
        <Wrapper>
          <Title> Hi, Welcome</Title>
        </Wrapper>
      </Main>
      <Footer>This is the footer</Footer>
    </>
  );
}

export default App;
