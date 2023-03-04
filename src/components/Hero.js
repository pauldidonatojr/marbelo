import React, { useState, useEffect } from 'react'
import Hero2 from './Hero2.js'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../images/hero-bcg.jpeg'
import heroBcg2 from '../images/hero-bcg-2.jpeg'
import logo from '../images/marbelo.png'
import { FaAdn, FaFacebook, FaInstagram } from 'react-icons/fa'
const slides = [
 {
  description: 'This is the content for slide 1',
  gradient: 'linear-gradient(180deg, #ff7f50 0%, #ff4b2b 100%)',
 },
 {
  description: 'This is the content for slide 2',
  gradient: 'linear-gradient(180deg, #6495ed 0%, #4169e1 100%)',
 },
 {
  description: 'This is the content for slide 3',
  gradient: 'linear-gradient(180deg, #ff1493 0%, #c71585 100%)',
 },
]

const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 height: 150vh;
 transition: background-color 1s ease;
 .btn2 {
  text-transform: uppercase;
  background: var(--clr-blue);
  color: var(--clr-primary-10);
  padding: 0.575rem 0.85rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 1.075rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  border-color: transparent;
  margin-bottom: 4rem;
 }

 .btn2:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-7);
 }
 .content {
  margin-top: 3rem;

  height: 65vh;

  width: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
 .logo {
  width: 50vh;
  height: 20vh;

  object-fit: cover;
 }
 .img-container {
  display: none;
 }

 p {
  line-height: 2;
  max-width: 45em;
  margin-bottom: 2rem;
  color: var(--clr-grey-5);
  font-size: 1.3rem;
 }
 @media (min-width: 992px) {
  height: calc(100vh - 5rem);
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  h1 {
   margin-bottom: 2rem;
  }
  p {
   font-size: 1.25rem;
  }
  .hero-btn {
   padding: 0.75rem 1.5rem;
   font-size: 1rem;
  }
  .img-container {
   display: block;
   position: relative;
  }
  .main-img {
   width: 100%;
   height: 550px;
   position: relative;
   border-radius: var(--radius);
   display: block;
   object-fit: cover;
  }
  .accent-img {
   position: absolute;
   bottom: 0;
   left: 0;
   width: 250px;
   transform: translateX(-50%);
   border-radius: var(--radius);
  }
  .img-container::before {
   content: '';
   position: absolute;
   width: 10%;
   height: 80%;

   bottom: 0%;
   left: -8%;
   border-radius: var(--radius);
  }
 }
`

const Main = styled.section`
 min-height: 45vh;

 display: grid;
 place-items: center;
 .img-container {
  display: none;
 }

 p {
  line-height: 2;
  max-width: 25em;
  margin-bottom: 2rem;
  color: var(--clr-grey-5);
  font-size: 0.75rem;
  font-weight: bold;
 }
 @media (min-width: 992px) {
  height: calc(100vh - 5rem);
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  h1 {
   margin-bottom: 2rem;
  }
  p {
   font-size: 1.25rem;
  }
  .hero-btn {
   padding: 0.75rem 1.5rem;
   font-size: 1rem;
  }
  .logo {
   width: 50vh;
   height: 20vh;
  }
  .img-container {
   display: block;
   position: relative;
  }
  .main-img {
   width: 100%;
   height: 550px;
   position: relative;
   border-radius: var(--radius);
   display: block;
   object-fit: cover;
  }
  .accent-img {
   position: absolute;
   bottom: 0;
   left: 0;
   width: 250px;
   transform: translateX(-50%);
   border-radius: var(--radius);
  }
  .img-container::before {
   content: '';
   position: absolute;
   width: 10%;
   height: 80%;
   background: var(--clr-primary-9);
   bottom: 0%;
   left: -8%;
   border-radius: var(--radius);
  }
 }
`

const Section = styled.section`
 background-color: #f8f8f8;
 width: 100%;

 height: 30vh;
`
const Article = styled.article`
 background-color: #f8f8f8;
 width: 100%;
 height: 30vh;
`
const Footer = styled.footer`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background-color: #222;
 color: #fff;
 text-align: center;
 bottom: 0;
 width: 100%;
 height: 30vh;

 .social-icons {
  display: flex;
  margin-top: 2rem;

  svg {
   margin: 0 0.5rem;
   font-size: 1.5rem;
  }
 }

 p {
  font-size: 0.85rem;
  margin-top: 2rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
 }
`

const Carousel = ({ items, interval }) => {
 const [index, setIndex] = useState(0)

 useEffect(() => {
  const timer = setInterval(() => {
   setIndex((index) => (index + 1) % items.length)
  }, interval)
  return () => clearInterval(timer)
 }, [items.length, interval])

 return items[index]
}
const MainCarousel = () => (
 <Carousel
  items={[
   <>
    {' '}
    <p>
     {' '}
     Indulge in the flavors of Portugal with our intimate dining experience,
     inspired by the beauty of the sea. Our restaurant is the perfect
     destination for any occasion, from a romantic evening for two to a
     celebration with family and friends. With limited space in our dining
     rooms, we recommend reserving in advance to ensure availability. Book your
     party today and let us help you create a memorable experience{' '}
    </p>{' '}
   </>,
   <p>
    {' '}
    Indulge in the flavors of Portugal with our intimate dining experience,
    inspired by the beauty of the sea. Our restaurant is the perfect destination
    family and friends. With limited space in our dining rooms, we recommend
    reserving in advance to ensure availability. Book your party today and let
    us help you create a memorable experience{' '}
   </p>,
   <p>
    {' '}
    inspired by the beauty of the sea. Our restaurant is the perfect destination
    for any occasion, from a romantic evening for two to a celebration with
    family and friends. With limited space in our dining rooms, we recommend
    reserving in advance to ensure availability. Book your party today and let
    us help you create a memorable experience{' '}
   </p>,
  ]}
  interval={5000}
 />
)

const gradient1 = 'linear-gradient(to bottom right, #88c3d0, #e3f6f5)'
const gradient2 = 'linear-gradient(to bottom right, #b2d8e5, #d0e8f2)'
const gradient3 = 'linear-gradient(to bottom right, #d3e9f0, #f4fcff)'
const gradient4 = 'linear-gradient(to bottom right, #e4f2f8, #f4fcff)'

function Hero() {
 const [currentSlide, setCurrentSlide] = useState(0)
 const [backgroundGradient, setBackgroundGradient] = useState(gradient1)

 useEffect(() => {
  const intervalId = setInterval(() => {
   switch (backgroundGradient) {
    case gradient1:
     setBackgroundGradient(gradient2)
     break
    case gradient2:
     setBackgroundGradient(gradient3)
     break
    case gradient3:
     setBackgroundGradient(gradient4)
     break
    case gradient4:
     setBackgroundGradient(gradient1)
     break
    default:
     setBackgroundGradient(gradient1)
     break
   }
  }, 5000)

  return () => clearInterval(intervalId)
 }, [backgroundGradient])

 return (
  <Container style={{ background: backgroundGradient }}>
   {/* <Carousel images={images} /> */}
   <Main>
    <article className="content">
     <img src={logo} alt="logo" className="logo" />

     <MainCarousel />

     <span style={{ display: 'grid', justifyContent: 'center' }}>
      <Link to="/products" className="btn2 hero-btn2">
       Order Online
      </Link>{' '}
     </span>
    </article>
    <article className="img-container">
     <img src={heroBcg} alt="nice table" className="main-img" />
     <img src={heroBcg2} alt="person working" className="accent-img" />
    </article>
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
    <div>
     <FaAdn />
    </div>
    <div>
     <p>611 Broadway, Long Branch, NJ 07740</p>
    </div>
    <div className="social-icons">
     <FaFacebook className="fb" />
     <FaInstagram className="ig" />
    </div>
   </Footer>
  </Container>
 )
}

export default Hero
