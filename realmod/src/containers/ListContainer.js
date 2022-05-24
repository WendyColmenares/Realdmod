import React, { Component } from 'react'
import CardsPropiedades from '../components/CardsPropiedades'
import { CardContainer } from '../style/StyledCardsPro'


export default class ListContainer extends Component {
    constructor(){
        super()
        this.state = {
            propiedad : []
        }
    }
    async componentDidMount(){
        const url = 'https://realmodpf.herokuapp.com/propiedades'
        const res = await fetch(url)
        const data = await res.json()
        this.setState({propiedad:data})
    }
  render() {
    return (
      <div>
        <CardContainer>
        {
              this.state.propiedad.map((pro, index)=>{
                  return(
                    <CardsPropiedades key={pro.id} propiedades={pro} />
                      )
              })
          }
        </CardContainer>
      </div>
    )
    
  }
}

