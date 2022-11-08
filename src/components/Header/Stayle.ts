import styled from 'styled-components';

import svg from '../../img/cart.svg'

export const StyledFlex = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between
    `;

export const StyledLogo = styled.a`
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.19;
    color: blue;
`;

export const StyledLogoColor = styled.span`
    color: black;
`;

export const StyledNav = styled.nav`
    display: flex;
`;

export const StyledNavItem = styled.a`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export const StyledCart = styled.li`
 &::after {
    display: block;
    content: "";
    height: 100px;
    width: 100px;
    background-image: url(../../img/cart.svg);
    fill: black;
   
 }
`;
``