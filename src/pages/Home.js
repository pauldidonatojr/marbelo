import React from 'react'
import Hero from '../components/Hero.js'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Submenu from '../components/Submenu'
const HomePage = () => {
 return (
  <Wrapper>
   <Sidebar />
   <Hero />
   <Submenu />
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
