import styled from "styled-components";
import { DASHBOARD } from "../shared/routes";
// import Dashboard from "./containers/Dashboard";

const FlluidContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 0;
`;

const Subtitle = styled.h6`
    font-size: 2.5em;
    margin-top: 0;
`;

const NotFoundPage = () => (
    <FlluidContainer>
        <Title>
            404!
        </Title>
        <br/>
        <Subtitle>The page you're looking for doesn't exist.</Subtitle>
        <br/><a href={DASHBOARD}><span>Go to Dashboard</span></a>
    </FlluidContainer>
);

export default NotFoundPage;