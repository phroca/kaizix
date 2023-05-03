/**
 * Layout component
 */
import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Header from "../header/header"
import "./layout.css"
import Footer from "../footer/footer"
import ContactModal from "./contact-modal/contact-modal"
 
 const MainModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000A0;
  z-index: 120;
  display: grid;
  justify-content: center;
}
 `
 const Layout = ({ children }) => {
    const [isContactTouched, setIsContactTouched] = useState(false);
    const handleContact = (event) => {
      event.preventDefault();
      setIsContactTouched(true)
    }
    const handleCloseModal = (event) => {
      event.preventDefault();
      setIsContactTouched(false);
    }
   return (
       <>
         <Header onclick={(e) => handleContact(e)}/>
         <main>{children}</main>
         <Footer />
         {isContactTouched && <MainModal><ContactModal closeModal={(e) => handleCloseModal(e)}/></MainModal>}
       </>
     
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 