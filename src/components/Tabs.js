import styled from "styled-components";

export const Tabs = styled.div`
    overflow: hidden;
    background: #fff;
    height: 100%;
`;
//overflow: hidden - to show the content of the selected tab only(rest of the content will be hidden)

export const Tab = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    possition: relative;
    margin-right: 0.1em;
    font-size: 1em;
    border: ${(props) => (props.active ? "" : "1px solid #ccc")};
    border-bottom: none;
    background-color: ${(props) => (props.active ? "#fff": "#000")};
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    :hover{
        background-color: #4fc3f7;
    }
`;

export const TabContent = styled.div`
    border: 0.25em solid #039be5;
    border-top: 0.5em solid #039be5;
    border-top-right-radius: 1em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    min-height: 80vh;
`;

export const Content = styled.div`
    #{(props) => (props.active ? "" : "display: none")}
`;
//display: none will not display anything if the component state is not active*
//only the content of the active tab will be displayed