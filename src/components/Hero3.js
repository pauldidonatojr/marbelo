import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import marbelo1 from '../images/marbelo1.jpg'
import marbelo2 from '../images/marbelo2.jpg'
import marbelo3 from '../images/marbelo3.jpg'
import marbelo4 from '../images/marbelo4.jpg'
import marbelo6 from '../images/marbelo6.jpg'
import marbelo7 from '../images/marbelo7.jpg'
import TransitioningImages from './TransitioningImages.js'

import logo from '../images/marbelologo.png'
const initialImages = [
 {
  mainImg: marbelo2,
  accentImg: marbelo4,
 },
 {
  mainImg: marbelo1,
  accentImg: marbelo3,
 },

 {
  mainImg: marbelo6,
  accentImg: marbelo7,
 }
]
const gradients = [
 'linear-gradient(to right top, #55a8e0, #7ac2ed, #9bddee, #b6effe)',
 'linear-gradient(to right top, #63b0e3, #87c9ee, #a1d8f3, #b6e3f6, #caeef9)',
 'linear-gradient(to right top, #6db8e6, #8dd1f0, #a9dffb, #c2e8ff, #dcf6ff)',
 'linear-gradient(to right top, #487c9e, #609dbb, #7bbfda, #9bdffe, #b9f5ff)',
 'linear-gradient(to right top, #5e97b2, #82b3cc, #a4cfe5, #c3eaff)',
 'linear-gradient(to right top, #6f8aa6, #8aa7c1, #a3c3dc, #bce0f7)',
 'linear-gradient(to right top, #264b64, #416e86, #5c919a, #7bb5b0, #9ddad7)',
 'linear-gradient(to right top, #73b0e4, #9ecdf0, #c4e7fc, #d5efff)',
 'linear-gradient(to right top, #3479a5, #4f99be, #6bbad8, #88dced, #abf3ff)',
 'linear-gradient(to right top, #3f8f99, #5ba7b0, #7bc0c8, #9dd9e1, #c1f1f9)',
]

const ContentWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 50%;
 transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`

const ButtonWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;

 height: 50%;
 transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`
const Hero3 = () => {
 const [currentGradient, setCurrentGradient] = useState(0)
 const [contentIndex, setContentIndex] = useState(0)
 const [buttonIndex, setButtonIndex] = useState(0)

const [images, setImages] = useState(initialImages)
const [currentImageIndex, setCurrentImageIndex] = useState(0)

useEffect(() => {
 const intervalId = setInterval(() => {
  setCurrentImageIndex((currentImageIndex + 1) % 2)
 }, 4000)
 return () => clearInterval(intervalId)
}, [currentImageIndex])
 const contentArray = [
  'Drawing inspiration from the beautiful sea, our intimate dining experience is a destination in itself. Immerse yourself in Portugal and let us help you celebrate that special occasion. Book your party today. As we have limited space in our dining rooms, we recommend that you reserve in advance.',
  'Experience the fresh flavors of Portugal at our restaurant. Our seasonal menus feature locally sourced ingredients and a carefully curated wine list. Come dine with us today and enjoy a truly unforgettable meal.',
  'Looking for the perfect venue for your next event? Look no further than our stunning restaurant. With its breathtaking ocean views, our space is the ideal setting for your next celebration. Contact us today to learn more.',
 ]

 const buttonArray = ['Order Online', 'Reserve Now', 'View Menu']

 useEffect(() => {
  const contentInterval = setInterval(() => {
   setContentIndex((contentIndex + 1) % contentArray.length)
  }, 8000)

  const buttonInterval = setInterval(() => {
   setButtonIndex((buttonIndex + 1) % buttonArray.length)
  }, 8000)

  return () => {
   clearInterval(contentInterval)
   clearInterval(buttonInterval)
  }
 }, [contentIndex, buttonIndex])

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentGradient((currentGradient + 1) % gradients.length)
  }, 5000)

  return () => clearInterval(interval)
 }, [currentGradient])

 return (
  <Wrapper style={{ background: gradients[currentGradient] }}>
   <article className="content">
    <div style={{ height: '20vh' }}>
     <img src={logo} alt="logo" className="animated-img " />
    </div>
    {/* <div
     style={{
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',

      height: '30vh',
     }}
    >
     <p style={{ fontFamily: 'Tahoma' }}>
      Drawing inspiration from the beautiful sea, our intimate dining experience
      is a destination in itself. Immerse yourself in Portugal and let us help
      you celebrate that special occasion. Book your party today. As we have
      limited space in our dining rooms, we recommend that you reserve in
      advance.
     </p>
    </div>
    <div
     style={{
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
      height: '12vh',
     }}
    >
     <Link to="/products" className="btn hero-btn btn-animation">
      Order Online
     </Link>
    </div> */}
    <ContentWrapper>
     <p style={{ fontFamily: 'roboto' }}>{contentArray[contentIndex]}</p>
    </ContentWrapper>
    <ButtonWrapper>
     <Link to="/products" className="btn  hero-btn btn-animation">
      {buttonArray[buttonIndex]}
     </Link>
    </ButtonWrapper>
   </article>
   <article className="img-container">
    <img
     src={images[currentImageIndex].mainImg}
     alt="nice table"
     className="main-img"
    />
    <img
     src={images[currentImageIndex].accentImg}
     alt="person working"
     className="accent-img"
    />
    <div className="overlay">
     <h2>Hover Text</h2>
    </div>
   </article>
   <TransitioningImages/>
  </Wrapper>
 )
}

const Wrapper = styled.section`
 height: 80vh;
 display: grid;
 justify-content: center;
 place-items: center;
 transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
 width: 100vh;
 position: relative;
 z-index: -1;
 margin-top: 3rem;
 .content {
    margin-top: 3.5rem;
 }
 @keyframes wave {
  0% {
   transform: translateX(0);
  }
  100% {
   transform: translateX(-28.28px);
  }
 }
 .animated-img {
  overflow: hidden;
  position: relative;
 }

 .animated-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-100%);
  background: linear-gradient(
   to bottom,
   rgba(255, 255, 255, 0) 0%,
   rgba(255, 255, 255, 1) 50%,
   rgba(255, 255, 255, 0) 100%
  );
  animation: animated-img 5s linear infinite;
 }

 @keyframes animated-img {
  0% {
   transform: translateY(-100%);
  }
  100% {
   transform: translateY(100%);
  }
 }

 .animated-text {
  overflow: hidden;
  position: relative;
 }

 .animated-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: linear-gradient(
   to right,
   rgba(221, 236, 242, 0) 25%,
   rgba(221, 236, 242, 1) 30%,
   rgba(221, 236, 242, 0) 80%
  );
  animation: animated-text 5s linear infinite;
 }

 @keyframes animated-text {
  0% {
   transform: translateX(-100%);
  }
  100% {
   transform: translateX(100%);
  }
 }

 .content {
 }
 .img-container {
  display: none;
 }

 p {
  line-height: 2;
  width: 40vh;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  color: var(--white);
  font-size: 1.2rem;
  font-weight: bold;
 }

 @media (min-width: 992px) {
  height: calc(100vh - 5rem);
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  width: 200vh;
  h1 {
   margin-bottom: 2rem;
  }

  p {
   font-size: 1.65rem;
   width: 55vh;
  }

  .btn2 {
   text-transform: uppercase;
   background: #0055a5;
   color: var(--clr-primary-10);
   padding: 0.455rem 0.75rem;
   letter-spacing: var(--spacing);
   display: inline-block;
   font-weight: 400;
   transition: var(--transition);
   font-size: 0.955rem;
   cursor: pointer;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
   border-radius: var(--radius);
   border-color: transparent;
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
   width: 60vh;
   height: 560px;
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
   width: 5vh;
   height: 80%;

   bottom: 0%;
   left: -8%;
   border-radius: var(--radius);
  }
 }
`

export default Hero3
