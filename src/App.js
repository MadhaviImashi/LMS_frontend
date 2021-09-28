//import the styled-components package
//import styled from "styled-components/";
import React from "react";
import { Suspense } from "react";
//import themeprovider
import {ThemeProvider} from "styled-components";//this component injects the theme into all styled components via the context API
//import react-icons package
import {BsBookHalf} from "react-icons/bs";
//import Router packages
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


//import the layout components
import {Header, Main, Footer} from "./components/Layout";
import {NavBar, NavItem, NavLink} from "./components/Navbar";
import Spinner from "./components/Spinner";
//import the Routes that we created in the shared file
import { DASHBOARD, CATALOG } from "./shared/routes";

//enable Lazy Loading feature in React to import Dashboard component(then it will load this only when needed i think. not sure)
const Dashboard = React.lazy(() => {
  return import("./containers/Dashboard");
});

//create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 3em;
//   text-align: center;
//   color: palevioletred;
// `;

// const Wrapper = styled.section`
//   pading: 4em;
//   background: papayawhip;
// `;

function App() {

  //switch component
  let switchRoutes = (
    <Suspense fallback = {<Spinner/>}> {/* using Suspense, create a fallback component onbehalf of Dashboard component(so this fallback component will be displayed until the lazy component get downloaded)*/}
        <Switch>
              {/* <Route path="/about"><Dashboard/></Route> */}
              <Route path={DASHBOARD}><Dashboard/></Route>
              <Route exact path={CATALOG} component={Spinner}/>
        </Switch>
    </Suspense>

  );

  //an array obj to store the common colors
  const themeObj = {
     primary: {
       main: "#29b6f6",
       light: "#73e8ff",
       dark: "#0086c3",
       textColor: "#000",
     },
     secondary: {
       main: "#fff",
     },
     spacing: (factor) => `${factor * 8}px`, //this function has a factor parameter. (spacing attribute value will be equal to factor*8 px)
  };

  return (
    <>
      {/* pass the themeObj to the ThemeProvider prop which is 'theme' */}
      <ThemeProvider theme={themeObj}>
        <Header>
          <NavBar>
            <NavItem>
              <NavLink href={CATALOG}><BsBookHalf /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={CATALOG}>Catalog</NavLink></NavItem>
            <NavItem>
              <NavLink href={DASHBOARD}>Dashboard</NavLink>
            </NavItem>
          </NavBar>
        </Header>

        <Main>
            {/* <Dashboard></Dashboard> */}
            {/* call the Router component to enable 'switchRoutes' component that we created */}
            <Router>
              {switchRoutes} {/*this will render the correct component which matches to the Route/path*/}
            </Router>
        </Main>

        <Footer>
          Copyright date @ Spark Academy
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
