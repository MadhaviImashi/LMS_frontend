import styled from "styled-components";
import { DASHBOARD } from "../shared/routes";
// import Dashboard from "./containers/Dashboard";

import { FluidContainer } from "../components/CommonComponents";

const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 0;
`;

const Subtitle = styled.h6`
    font-size: 2.5em;
    margin-top: 0;
`;

const NotFoundPage = () => (
    <FluidContainer>
        <Title>
            404!
        </Title>
        <br/>
        <Subtitle>The page you're looking for doesn't exist.</Subtitle>
        <br/><a href={DASHBOARD}><span>Go to Dashboard</span></a>
    </FluidContainer>
);

export default NotFoundPage;