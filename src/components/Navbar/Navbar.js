import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


class Navbar extends Component {
  state = {
    clicked: false,
    token: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);  }  

  getLinks = () => {
    let links = "";
    switch (this.props.language) {
      case "de":
        links = "Links";
        break;
      case "en":
        links = "Links";
        break;
      default:
        links = "Liens";
    }
    return links;
  };

  getContact = () => {
    let contact = "";
    switch (this.props.language) {
      case "de":
        contact = "Kontakt";
        break;
      case "en":
        contact = "Contact";
        break;
      default:
        contact = "Contacter";
    }
    return contact;
  };

  getPuppys = () => {
    let puppy = "";
    switch (this.props.language) {
      case "de":
        puppy = "Würfe";
        break;
      case "en":
        puppy = "Litter";
        break;
      default:
        puppy = "Portées";
    }
    return puppy;
  };

  getAboutUS = () => {
    let aboutUS = "";
    switch (this.props.language) {
      case "de":
        aboutUS = "Über uns";
        break;
      case "en":
        aboutUS = "About us";
        break;
      default:
        aboutUS = "à propos de nous";
    }
    return aboutUS;
  };


  closeMobileMenu = () => {
    this.setState({clicked: !this.state.clicked, });
  };

  handleClick = () => {this.setState({ clicked: !this.state.clicked });};

  newsFunktionen = () => {
    this.closeMobileMenu();
    this.props.defaultSwitch();
  };

  languagueTranslator = () => {
    let token = "";
    if (this.props.language === "de") {
      token = "DE";
    } else if (this.props.language === "en") {
      token = "EN";
    } else {
      token = "FR";
    }
    return token;
  };

  linksFunction=()=>{
    this.closeMobileMenu();
    this.props.scroollto3()
  }
  render() {
    return (
      <>
        <div className="navigation_container">
          {/* <nav className={`navbar ${this.state.nav && "navbar__brown"}`}> */}
          <nav className="navigation">
            <NavLink to="/"><div className="navigation_logo"><h2>Kooikerhondje</h2><h3>"de la bande de rigolos"</h3></div></NavLink>
            <div className="menu_icon" onClick={this.handleClick}> <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i></div>
            <ul className={this.state.clicked ? "navigation_menu active" : "navigation_menu"}>
              <div><p>DEV</p></div>
              <li><NavLink to="/" onClick={this.closeMobileMenu}><i className="fas fa-home"></i> </NavLink></li>
              <li> <NavLink to="/aboutus" onClick={this.closeMobileMenu}> {this.getAboutUS()}</NavLink></li>
              <li><NavLink to="/ivy" onClick={this.closeMobileMenu}>Ivy</NavLink></li>
              <li><NavLink to="/puppys" onClick={this.newsFunktionen}>{this.getPuppys()}</NavLink></li>
              <li> <NavLink to="/contact" onClick={this.closeMobileMenu}>{this.getContact()}</NavLink></li>
              <li><NavLink to="/" onClick={this.linksFunction}>{this.getLinks()}</NavLink></li>
              <li><Dropdown>
                  <Dropdown.Toggle split  variant="success" id="dropdown-split-basic">
                    <li>{" "}<i className="fas fa-globe"></i>{"  " + this.languagueTranslator()}</li>
                  </Dropdown.Toggle>
                  <DropdownMenu>
                    <DropdownItem href="#" onClick={this.props.toggleLanguagueEN}>English</DropdownItem>
                    <DropdownItem href="#" onClick={this.props.toggleLanguagueFR}>Français</DropdownItem>
                    <DropdownItem  href="#"onClick={this.props.toggleLanguagueDE}>Deutsch</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
