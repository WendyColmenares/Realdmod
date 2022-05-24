import React, { Component } from 'react'
import { Card, CardContainer, Forto, ImgCard, Price, Tipo, Nombre, Ubicacion, LogoUbication, ContainerLogos, LogoName, LogoLogo } from '../style/StyledCardsPro'

export default class CardsPropiedades extends Component {
  render() {
    const {imgpro,price ,name, for_to, type, ubication, beds, baths, size}= this.props.propiedades
  
    return (
          <CardContainer>
                <Card>
                    <Forto>For {for_to}</Forto>
                    <Price>${price}/mo</Price>
                    <ImgCard src={imgpro} className='' alt='' width='245px' height='300px' />
                        <Tipo> {type} </Tipo>
                        <Nombre>{name}</Nombre>
                        <Ubicacion><LogoUbication src='https://w7.pngwing.com/pngs/263/1017/png-transparent-computer-icons-scar-scar-love-people-heart.png' alt='' />
                         {ubication} </Ubicacion>
                        <ContainerLogos>
                          <LogoName>
                          <LogoLogo src='https://w7.pngwing.com/pngs/263/1017/png-transparent-computer-icons-scar-scar-love-people-heart.png' alt=''/>
                          Beds {beds} </LogoName>
                          <LogoName>
                          <LogoLogo src='https://w7.pngwing.com/pngs/263/1017/png-transparent-computer-icons-scar-scar-love-people-heart.png' alt=''/>
                          Baths{baths}
                          </LogoName>
                          <LogoName>
                          <LogoLogo src='https://w7.pngwing.com/pngs/263/1017/png-transparent-computer-icons-scar-scar-love-people-heart.png' alt=''/>
                          {size} Sqft</LogoName>
                        </ContainerLogos>
                </Card>    
          </CardContainer>
    )
  }
}
