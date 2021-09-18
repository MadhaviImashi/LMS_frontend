//import the styled-components package
import styled from "styled-components/";
//import themeprovider
import {ThemeProvider} from "styled-components";//this component injects the theme into all styled components via the context API
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

  const themeObj = {
     primary: {
       main: "#29b6f6",
       light: "#73e8ff",
       dark: "#0086c3",
       textColor: "#000",
     },
     secondary: {
       main: "#fff",
     }
  };

  return (
    <>
      {/* pass the themeObj to the ThemeProvider prop which is 'theme' */}
      <ThemeProvider theme={themeObj}> 
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
      </ThemeProvider>

    </>
  );
}

export default App;
