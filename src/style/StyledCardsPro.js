import styled from 'styled-components';

export const CardContainer = styled.div `
    margin-left:100px;
    margin-right:100px;
    display:flex;
    font-family: 'Ubuntu', sans-serif;
`

export const Card = styled.div`
    margin-top: 20px;
    width:340px;
    height:360px;
    background-color:#ffffff;
    overflow:hidden;
`

export const ImgCard = styled.img`
    width:100%;
    height:200px;
    object-fit:cover;
`
export const Price = styled.h3`
    font-weight:500;
    color:white;
    position:absolute;
    margin: 160px 0 0px 30px;
`

export const Forto = styled.p`
    aling-content:center;
    color:white;
    background-color:#00C194;
    width:50px;
    height:22px;
    padding:7px 15px 0px 15px;
    font-size: 14px;
    position:absolute;
    margin:20px 0px 0px 30px;
`
export const Tipo = styled.h4`
    margin: 15px 0 0px;
    padding: 0 30px;
    color:#00C194;
    font-weight:500;  
`
export const Nombre = styled.h3`
    font-weight:600;
    margin: 15px 0 0 0px;
    padding: 0 30px;
`

export const Ubicacion = styled.h5`
    margin: 15px 0 0 0px;
    padding: 0 30px;
    font-weight:500; 
`

export const LogoUbication = styled.img`
    width:20px;
    margin:0 5px 0 0;
`

export const ContainerLogos = styled.div`
    display:flex;
`

export const LogoName = styled.h5`
    display:flex;
    margin:15px 0 0 30px;
    font-size:14px;
    font-weight:550; 
`

export const LogoLogo = styled.img`
    width:20px;
    margin:0 5px 0 0;
`
