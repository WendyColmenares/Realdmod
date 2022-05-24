import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyledLink, StyledNav, StyledSubitleNav, StyledTitleNav, StyledLinkLogo, LinkS, ButtonAddProperty, StyledLogo, OptionsNavBar } from '../style/StyledNavBar'

export default class Navbar extends Component {
  render() {
      return (
          <StyledNav>
              <StyledLogo>
                <StyledLink className="navbar-brand" to="/">
                  <img src='https://w7.pngwing.com/pngs/263/1017/png-transparent-computer-icons-scar-scar-love-people-heart.png'id="icon" alt="User Icon" width="50px"/>
                </StyledLink>
                <StyledLinkLogo className="navbar-brand" to="/">
                  <StyledTitleNav>Realmod</StyledTitleNav>
                  <StyledSubitleNav>Real Estate Agency</StyledSubitleNav>
                </StyledLinkLogo>
              </StyledLogo>
              <LinkS>
              <StyledLink>
                <Link to="/">Home</Link>
              </StyledLink>
              <StyledLink>
                <Link to="/about">About</Link>
              </StyledLink>
              <StyledLink>
                <Link to="/property">Property</Link>
              </StyledLink>
              <StyledLink>
                <Link to="/pages">Pages</Link>
              </StyledLink>
              <StyledLink>
                <Link to="/blog">Blog</Link>
              </StyledLink>
              <StyledLink>
                <Link to="/contact">Contact</Link>
              </StyledLink>
              </LinkS>
              <OptionsNavBar>
                <StyledLink className="navbar-brand" to="/">
                  <img src="https://w7.pngwing.com/pngs/263/1017/png-transparent-computer-icons-scar-scar-love-people-heart.png" id="icon" alt="User Icon" width="50px"/>
                </StyledLink>
                <StyledLink className="navbar-brand" to="/">
                  <img src="https://w7.pngwing.com/pngs/263/1017/png-transparent-computer-icons-scar-scar-love-people-heart.png" id="icon" alt="User Icon" width="50px"/>
                </StyledLink>
                <StyledLink className="navbar-brand" to="/">
                  <img src="https://w7.pngwing.com/pngs/263/1017/png-transparent-computer-icons-scar-scar-love-people-heart.png" id="icon" alt="User Icon" width="50px"/>
                </StyledLink>
                <StyledLink className="navbar-brand" to="/">
                  <img src="https://w7.pngwing.com/pngs/263/1017/png-transparent-computer-icons-scar-scar-love-people-heart.png" id="icon" alt="User Icon" width="50px"/>
                </StyledLink>
              </OptionsNavBar>
              <div>
                <StyledLink>
                  <ButtonAddProperty>
                    <Link to="/form">Add property</Link>
                  </ButtonAddProperty>
                </StyledLink>
              </div>
          </StyledNav>
        )
    }
}
