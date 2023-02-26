import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 display: flex;
 flex-direction: column;

 background-color: lightblue;
`

const Header = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #fff;

 height: 80px;
 width: 100%;


 @media screen and (max-width: 768px) {
  height: 60px;
 }
`

const Nav = styled.nav`
 display: flex;
 align-items: center;
`

const NavLinks = styled.ul`
 display: flex;
 align-items: center;
 margin: 0;
 padding: 0;
 list-style-type: none;


`

const NavItem = styled.li`
 margin-right: 1.5rem;
`

const NavLink = styled.a`
 color: #333;
 text-decoration: none;
 font-weight: 600;
`

const Main = styled.main`
 height: 30vh;
 width: 100%;
 background-color: lightgray;
`

const Section = styled.section`
 background-color: #f8f8f8;


 height: 30vh;
 width: 100%;
`
const Article = styled.article`
 background-color: #f8f8f8;

 height: 30vh;
 width: 100%;
`
const Footer = styled.footer`
 background-color: #222;
 color: #fff;

 text-align: center;
 bottom: 0;
width: 100%;
`

function Hero() {
 return (
  <Container>
   <Header>
    <h1>My Website</h1>
    <Nav>
     <NavLinks>
      <NavItem>
       <NavLink href="#about">About</NavLink>
      </NavItem>
      <NavItem>
       <NavLink href="#services">Services</NavLink>
      </NavItem>
      <NavItem>
       <NavLink href="#contact">Contact</NavLink>
      </NavItem>
     </NavLinks>
    </Nav>
   </Header>

   <Main>
    <h2>Welcome to my website</h2>
    <p>Explore my portfolio and blog</p>
   </Main>

   <Section>
    <h2>About Me</h2>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu elit ac
     elit malesuada lobortis.
    </p>
   </Section>

   <Article>
    <h2>About Me</h2>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu elit ac
     elit malesuada lobortis.
    </p>
   </Article>

   <Footer>
    <p>&copy; 2023 My Website</p>
   </Footer>
  </Container>
 )
}

export default Hero
