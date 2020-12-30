import React, { Component } from "react";
import "./CSS/topnavbar.css";
import {Navbar, Nav, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaHome, FaReact, FaEnvelopeOpenText, FaFacebook, FaInstagramSquare, FaLinkedinIn, } from "react-icons/fa";
import {IoLanguage} from "react-icons/io5"
import { Translation } from 'react-i18next';
import HomeIcon from 'react-ionicons/lib/IosHome'
import SchoolIcon from 'react-ionicons/lib/IosSchoolOutline'
import GitIcon from 'react-ionicons/lib/LogoGithub'
import { withRouter } from "react-router-dom";
import i18next from "i18next";
class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en"
    };
    this.changeL = this.changeL.bind(this);
  }
  
 changeL(){
    if(this.state.language === 'en'){
      i18next.changeLanguage("chinese");
      this.setState({
        language: "chinese"
      })
    }else{
      i18next.changeLanguage("en");
      this.setState({
        language: "en"
      })
    }
 }

  render() {
    return (
      <Translation>
      { (t, { i18n }) => (
      <div className="fade-in-left">
        <Navbar bg="none" className ="navbar" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#/" className ="navlink" style ={{color: "white"}}><FaHome fontSize="35px" /><span style={{whiteSpace: "nowrap"}}>{t('Home')}</span></Nav.Link>
        <Nav.Link href="#/Degreepage" className ="navlink" style ={{color: "white"}}><SchoolIcon color ="white" fontSize = "35px" className="Nfa"/><span style={{whiteSpace: "nowrap"}}>{t('MDS')}</span></Nav.Link>
        <Nav.Link href="https://github.com/DongMZ1" className ="navlink"style ={{color: "white"}}><GitIcon color ="white" fontSize = "35px" className="Nfa" /><span style={{whiteSpace: "nowrap"}}>{t('Mgit')}</span></Nav.Link>
        <Nav.Link href="#/Projectlist" className ="navlink" style ={{color: "white"}}><FaReact fontSize ="40px" /><span style={{whiteSpace: "nowrap"}}>{t('MProject')}</span></Nav.Link>
        <Nav.Link href="#/Contactme" className ="navlink" style ={{color: "white"}}><FaEnvelopeOpenText fontSize = "40px" /><span style={{whiteSpace: "nowrap"}}>{t('ContactMe')}</span></Nav.Link>
        </Nav>
        </Navbar.Collapse>              
                            <a class="socialicon" onClick={this.changeL} style= {{color: "white"}}><IoLanguage fontSize = "35px" /></a>
                            <a class="socialicon" href="https://www.facebook.com/mingming.dong.79" style= {{color: "white"}}><FaFacebook fontSize = "35px" /></a>
                            <a class="socialicon" href="https://www.linkedin.com/in/dong-mingzhou-181732107/" style ={{color: "white"}}><FaLinkedinIn fontSize = "35px"/></a>
                            <a class="socialicon" href="https://www.instagram.com/partinggggton/" style ={{color: "white"}}><FaInstagramSquare fontSize = "35px"/></a>   

        </Navbar>
      </div>
      )
  }
  </Translation>
    );
  }
}

export default TopNavbar;
