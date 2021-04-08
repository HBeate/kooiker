import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
    AboutUs: "",
    Offspring: "",
    News: "",
    Contact: "",
    Parents: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
   
    if (this.props.language === "de") {
      this.setState({
        AboutUs: "Über uns",
        Ivy: "Ivy",
        Offspring: "Nachkommen",
        News: "Aktuel",
        Contact: "Kontakt",
        Parents: "Eltern",
      });
    } else if (this.props.language === "en") {
      this.setState({
        AboutUs: "About us",
        Ivy: "Ivy",
        Offspring: "Offspring",
        News: "News",
        Contact: "Contact",
        Parents: "Parents",
      });
    }else if (this.props.language === "fr") {
      this.setState({
        AboutUs: "à propos de nous",
        Ivy: "Ivy",
        Offspring: "Progéniture",
        News: "Actuel",
        Contact: "Contacter",
        Parents: "Parents",
      });
    }
  }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this.handleScroll);
  }

  closeMobileMenu = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  // handleScroll = () => {
  //   if (window.pageYOffset > 1) {
  //     if (!this.state.nav) {
  //       this.setState({ nav: true });
  //     }
  //   } else {
  //     if (this.state.nav) {
  //       this.setState({ nav: false });
  //     }
  //   }
  // };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
newsFunktionen=()=>{
  this.closeMobileMenu();
  this.props.togglePoppiesNews();
}
  render() {
    return (
      <>
      <div className="navbar-container">
        {/* <nav className={`navbar ${this.state.nav && "navbar__brown"}`}> */}
        <nav className="navbar">
            <NavLink to="/" >
              <div className="navbar-logo">
              <h2>Kooikerhondje</h2>
              <h3>"de la bande de rigolos"</h3>
              </div>
            </NavLink>
            <div className="menu-icon" onClick={this.handleClick}><i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i></div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              <li><NavLink to="/" onClick={this.closeMobileMenu}><i class="fas fa-home"></i></NavLink></li>
              <li><NavLink to="/aboutus" onClick={this.closeMobileMenu}>{this.state.AboutUs}</NavLink></li>
              <li><NavLink to="/ivy" onClick={this.closeMobileMenu}>Ivy</NavLink></li>
              <li><NavLink to="/offspring" onClick={this.closeMobileMenu}>{this.state.Offspring}</NavLink></li>
              <li><NavLink to="/news" onClick={this.newsFunktionen}>{this.state.News}</NavLink></li>
              <li><NavLink to="/contact" onClick={this.closeMobileMenu}>{this.state.Contact}</NavLink></li> 
              <li><NavLink to="/parents" onClick={this.closeMobileMenu}>{this.state.Parents}</NavLink></li>   
            </ul>
        </nav>
        </div>
      </>
    );
  }
}

export default Navbar;