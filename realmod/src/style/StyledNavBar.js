import styled from "styled-components";

export const StyledLink = styled.a`
    margin: 0 20px 0 20px;
    text-decoration: none;
    cursor:pointer;
    color:black;
    font-weight:400;
    &:hover{
        color: #00C194;
    }
`
export const StyledLinkLogo = styled.a`
    text-decoration: none;
    cursor:pointer;
    line-height:90%;
`
export const StyledLogo = styled.div`
    display:flex;
    margin-right:15px;
`
export const StyledNav = styled.div`
    padding: 5px 10px;
    margin:0px 10px;
    display:flex;
    font-family: 'Ubuntu', sans-serif;
    justify-content: space-between;
    align-items: center;
    height:80px;
    background-color:#ffffff;
`
export const StyledTitleNav = styled.h2`
    margin:0px;
    color: black;
    font-weight:bold;
`
export const StyledSubitleNav = styled.h6`
    margin: 0px;
    padding:0px;
    color: #00C194;
    font-weight:300;
    font-size:11.5px;
`
export const LinkS = styled.div `
    display:flex;
    justify-content: space-between;
    margin: 0 20px 0 20px;
    text-decoration: none;
    cursor:pointer;
    color:black;
    font-weight:400;
    &:hover{
        color: #00C194;
    }
`
export const Link = styled.div `
    display:flex;
    justify-content: space-between;
    margin: 0 20px 0 20px;
    text-decoration: none;
    cursor:pointer;
    color:black;
    font-weight:400;
    &:hover{
        color: #00C194;
    }
`
export const OptionsNavBar = styled.div`
    display:flex;
`
export const HoverLine = styled.a`
    display:none;

    ${StyledLink}:hover & {
        display:block;
    }
`
export const ButtonAddProperty = styled.button`
    width:150px;
    color:white;
    background-color:#00C194;
    height:35px;
    border: none;
    border-radius:20px;
`