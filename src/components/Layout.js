import styled from "styled-components";

//vh = view height. so 5vh means, that component will be given 5% height from the website view

export const Header = styled.header`
    height: 5vh;
`;

export const Main = styled.main`
    min-height: 95vh;
    padding: ${(props) => props.theme.spacing(1)};
    display: flex;
    align-items: center;
    flex-direction: column;
`;
//default flex-direction is row

export const Footer = styled.footer`
    display: flex;
    ustify-content: center;
    padding: 1em;
    border-top: 1px solid #ccc;
`;

