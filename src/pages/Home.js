import React from 'react'
import Hero from '../components/Hero.js'
import styled from 'styled-components'
import Hero3 from '../components/Hero3.js'
import Footer from '../components/Footer.js'
const HomePage = () => {
 return (
  <Wrapper>

         <Hero3 />
   {/* <Hero /> */}
  </Wrapper>
 )
}
const Wrapper = styled.div`
 height: 50%;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`
export default HomePage
