import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../utils/context.js'
import Carousel from './Carousel'
const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 height: 100vh;
 background-color: black;
 border: 5px solid white;
`

const Header = styled.header`
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: whitesmoke;

 height: 165px;
 width: 100%;
 .logo {
  max-width: 25vh;
  height: auto;
 }
 @media screen and (min-width: 800px) {
  height: 170px;
 }
`

const Nav = styled.nav`
 height: 6rem;
 display: flex;
 align-items: center;
 justify-content: center;
 background: transparent;
 position: relative;
 z-index: 1;
 background-color: #0055a5;
 .nav-center {
  width: 90vw;
  max-width: var(--max-width);
 }
 .nav-header {
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .btn {
  font-size: 1rem;
  width: 15vh;
  height: 3vh;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  border-color: transparent;
  color: white;
  background: var(--clr-black);
  cursor: pointer;
  transition: var(--transition);
 }
 .btn:hover {
  background: var(--clr-grey-5);
 }
 .nav-links {
  display: none;
 }
 .signin-btn {
  display: none;
 }
 .hero::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 65%;
  top: 0;
  left: 0;
  background: url(./images/hero.svg);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
 }
 .hero {
  position: relative;
  min-height: 100vh;
  margin-top: -5rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
 }
 .hero-center {
  width: 90vw;
  max-width: var(--max-width);
  display: grid;
  align-items: center;
 }

 .hero-info h1 {
  text-transform: none;
  max-width: 500px;
  margin-bottom: 2rem;
 }
 .hero-info p {
  max-width: 35em;
  line-height: 1.8;
 }
 .hero-images {
  display: none;
 }

 /* nav media query */
 @media screen and (min-width: 800px) {
  .nav-center {
   display: grid;
   grid-template-columns: auto 1fr auto;
   align-items: center;
  }
  .toggle-btn {
   display: none;
  }
  .signin-btn {
   display: inline-block;
  }
  .nav-links {
   display: block;
   justify-self: center;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   text-align: center;
   height: 100%;
   display: grid;
   align-items: center;
  }
  .nav-links li {
   height: 100%;
  }
  .link-btn {
   height: 100%;
   background: transparent;
   border-color: transparent;
   font-size: 1.1rem;
   color: white;
   text-transform: capitalize;
   letter-spacing: 1px;
   width: 10rem;
  }
 }

 /* hero media query */
 @media screen and (min-width: 800px) {
  .hero::before {
   background-size: contain;
   height: 100%;
  }
  .hero-center {
   grid-template-columns: 2fr 1fr;
  }

  .hero-info h1 {
   font-size: 3rem;
  }
  .hero-info p {
   font-size: 1.25rem;
  }
  .hero-images {
   display: block;
   justify-self: center;
  }
  .phone-img {
   width: 12rem;
  }
 }

 @media screen and (min-width: 1200px) {
  .hero-center {
   grid-template-columns: 2fr 1fr;
   align-items: end;
   padding-bottom: 12vh;
  }
  .hero-info h1 {
   max-width: 100%;
   font-size: 5.5rem;
  }
  .hero-images {
   align-self: end;
  }
  .phone-img {
   width: 15rem;
  }
 }
 @media screen and (min-width: 1400px) {
  .hero-center {
   padding-bottom: 20vh;
  }
  .phone-img {
   width: 17rem;
  }
 }
`

const Main = styled.main`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 50vh;

 background-color: #e2b75c;

 margin-top: 3rem;
 margin-bottom: 3rem;
`

// const Section = styled.section`
//  background-color: #f8f8f8;

//  height: 30vh;
// `
// const Article = styled.article`
//  background-color: #f8f8f8;

//  height: 30vh;
// `
const Footer = styled.footer`
 background-color: #222;
 color: #fff;

 text-align: center;
 bottom: 0;
 width: 100%;
 height: 20vh;
`
const images = [
 {
  src: 'https://res.cloudinary.com/elpawl-llc/image/upload/v1675866967/skyline_fhftgi.jpg',
  alt: 'Image 1',
  title: 'Image 1',
  description:
   'Mar Belo Restaurant is a Portuguese, Spanish restaurant and wine bar featuring local and sustainable ingredients. We are located in Long Branch, NJ.',
 },
 {
  src: 'https://res.cloudinary.com/elpawl-llc/image/upload/v1676508521/pexels-filippo-bergamaschi-2767737_fidye2.jpg',
  alt: 'Image 2',
  title: 'Image 2',
  description:
   'Inspired by the Beatiful Sea, our intimate dining experience is itself a destination. Immerse yourself in Portugal. Let use help you celebrate that special occasion.',
 },
 {
  src: 'https://res.cloudinary.com/elpawl-llc/image/upload/v1676846332/902207_1e34262fb393244_ezgb7q.jpg',
  alt: 'Image 3',
  title: 'Image 3',
  description:
   ' Book your party today. Because we have limited space in our dining rooms, we recommend you reserve in advance.',
 },
]

function Hero() {
 const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

 const displaySubmenu = (e) => {
  const page = e.target.textContent
  const tempBtn = e.target.getBoundingClientRect()
  const center = (tempBtn.left + tempBtn.right) / 2
  const bottom = tempBtn.bottom - 3
  openSubmenu(page, { center, bottom })
 }
 const handleSubmenu = (e) => {
  if (!e.target.classList.contains('link-btn')) {
   closeSubmenu()
  }
 }
 return (
  <Container>
   <Header>
    <img src={logo} className="logo" alt="" />
   </Header>
   <Nav onMouseOver={handleSubmenu}>
    <div className="nav-center">
     <div className="nav-header">
      <button className="btn toggle-btn" onClick={openSidebar}>
       <FaBars />
      </button>
     </div>

     <ul className="nav-links">
      <li>
       <button className="link-btn" onMouseOver={displaySubmenu}>
        menu
       </button>
      </li>
      <li>
       <button className="link-btn" onMouseOver={displaySubmenu}>
        reversations
       </button>
      </li>
      <li>
       <button className="link-btn" onMouseOver={displaySubmenu}>
        contact
       </button>
      </li>
     </ul>
    </div>
   </Nav>

   <Main>
    <Carousel images={images} />
   </Main>

   {/* <Section>
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
   </Article> */}

   <Footer>
    <p>&copy; 2023 My Website</p>
   </Footer>
  </Container>
 )
}

export default Hero
