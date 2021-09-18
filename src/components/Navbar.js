import styled from 'styled-components';

export const NavBar = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${(props) => props.theme.primary.main};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;
//instead of hard coding the colors everywhere, now u can use those defined colors in our theme obj in the App.js class using 'theme' prop
//we can embed javascript codes using ${} inside these Template literals which encloses with backticks
export const NavItem = styled.li`
    float: left;
`;

export const NavLink = styled.a`
    display: block;
    color: ${(props) => props.theme.textColor};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    :hover{
        background-color: ${(props) => props.theme.primary.light};
    }

    .active{
        background-color: ${(props) => props.theme.primary.dark};
    }
`;