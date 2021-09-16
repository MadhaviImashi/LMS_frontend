//import the styled-components
import styled from "styled-components/";

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
    <Wrapper>
      <Title> Hi, Welcome</Title>
    </Wrapper>
  );
}

export default App;
