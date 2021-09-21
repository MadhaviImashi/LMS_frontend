import styled from 'styled-components';

export const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: ${(props) => props.theme.spacing(1)} 0;
    overflow: hidden;
    background-color: ${(props) => props.theme.primary.main};
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    max-height: 5vh;
`;
//instead of hard coding the colors everywhere, now u can use those defined colors in our theme obj in the App.js class using 'theme' prop
//we can embed javascript codes using ${} inside these Template literals which encloses with backticks
export const NavItem = styled.li`
    display: inline;
`;

export const NavLink = styled.a`
    color: ${(props) => props.theme.textColor};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1.25em;

    :hover{
        background-color: ${(props) => props.theme.primary.light};
    }

    .active{
        background-color: ${(props) => props.theme.primary.dark};
    }
`;