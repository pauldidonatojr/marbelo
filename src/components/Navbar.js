import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../utils/data'
import styled from 'styled-components'
const Navbar = () => {
 const [showLinks, setShowLinks] = useState(false)
 const linksContainerRef = useRef(null)
 const linksRef = useRef(null)
 const toggleLinks = () => {
  setShowLinks(!showLinks)
 }
 useEffect(() => {
  const linksHeight = linksRef.current.getBoundingClientRect().height
  if (showLinks) {
   linksContainerRef.current.style.height = `${linksHeight}px`
  } else {
   linksContainerRef.current.style.height = '0px'
  }
 }, [showLinks])
 return (
  <Nav>
   <div className="nav-center">
    <div className="nav-header">
     <h4> Order Online </h4>
    
      <button className="nav-toggle" onClick={toggleLinks}>
       <FaBars />
      </button>

    </div>
    <div className="links-container" ref={linksContainerRef}>
     <ul className="links" ref={linksRef}>
      {links.map((link) => {
       const { id, url, text } = link
       return (
        <li key={id}>
         <a href={url}>{text}</a>
        </li>
       )
      })}
     </ul>
    </div>
    <ul className="social-icons">
     {social.map((socialIcon) => {
      const { id, url, icon } = socialIcon
      return (
       <li key={id}>
        <a href={url}>{icon}</a>
       </li>
      )
     })}
    </ul>
   </div>
  </Nav>
 )
}

const Nav = styled.nav`
 background: var(--clr-white);

 box-shadow: var(--light-shadow);

 .nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
 }

 .nav-toggle {
  font-size: 1.5rem;
  color: var(--clr-primary-5);
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
 }

 .nav-toggle:hover {
  color: var(--clr-primary-1);
  transform: rotate(90deg);
 }

 .logo {
  height: 40px;
 }

 .links a {
  color: var(--clr-grey-3);
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  display: block;
  padding: 0.5rem 1rem;
  transition: var(--transition);
 }

 .links a:hover {
  background: var(--clr-primary-8);
  color: var(--clr-primary-5);
  padding-left: 1.5rem;
 }

 .social-icons {
  display: none;
 }

 .links-container {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
 }

 .show-container {
  height: 10rem;
 }

 @media screen and (min-width: 800px) {
  .nav-center {
   max-width: 1170px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem;
  }

  .nav-header {
   padding: 0;
  }

  .nav-toggle {
   display: none;
  }

  .links-container {
   height: auto !important;
  }

  .links {
   display: flex;
  }

  .links a {
   padding: 0;
   margin: 0 0.5rem;
  }

  .links a:hover {
   padding: 0;
   background: transparent;
  }

  .social-icons {
   display: flex;
  }

  .social-icons a {
   margin: 0 0.5rem;
   color: var(--clr-primary-5);
   transition: var(--transition);
  }

  .social-icons a:hover {
   color: var(--clr-primary-7);
  }
 }
`
export default Navbar
