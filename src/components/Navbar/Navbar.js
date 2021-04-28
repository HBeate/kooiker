import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

class Navbar extends Component {
  state = {
    clicked: false,
    AboutUs: "",
    Offspring: "",
    Puppys: "",
    Contact: "",
    Parents: "",
    token: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    if (this.props.language === "de") {
      this.setState({
        AboutUs: "Über uns",
        Ivy: "Ivy",
        Offspring: "Nachkommen",
        Puppys: "Würfe",
        Contact: "Kontakt",
        Parents: "Eltern",
        Links: "Links",
      });
    } else if (this.props.language === "en") {
      this.setState({
        AboutUs: "About us",
        Ivy: "Ivy",
        Offspring: "Offspring",
        Puppys: "Litter",
        Contact: "Contact",
        Parents: "Parents",
        Links: "Links",
      });
    } else if (this.props.language === "fr") {
      this.setState({
        AboutUs: "à propos de nous",
        Ivy: "Ivy",
        Offspring: "Progéniture",
        Puppys: "Portées",
        Contact: "Contacter",
        Parents: "Parents",
        Links: "Liens",
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
  newsFunktionen = () => {
    this.closeMobileMenu();
    // this.props.togglePoppiesNews();
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
  render() {
    return (
      <>
        <div className="navigation_container">
          {/* <nav className={`navbar ${this.state.nav && "navbar__brown"}`}> */}
          <nav className="navigation">
            <NavLink to="/">
              <div className="navigation_logo">
                <h2>Kooikerhondje</h2>
                <h3>"de la bande de rigolos"</h3>
              </div>
            </NavLink>

            <div className="menu_icon" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul
              className={
                this.state.clicked
                  ? "navigation_menu active"
                  : "navigation_menu"
              }
            >
              <li>
                <NavLink to="/" onClick={this.closeMobileMenu}>
                  <i className="fas fa-home"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" onClick={this.closeMobileMenu}>
                  {this.state.AboutUs}
                </NavLink>
              </li>
              <li>
                <NavLink to="/ivy" onClick={this.closeMobileMenu}>
                  Ivy
                </NavLink>
              </li>

              {/* <li><NavLink to="/offspring" onClick={this.closeMobileMenu}>{this.state.Offspring}</NavLink></li> */}
              <li>
                <NavLink to="/puppys" onClick={this.newsFunktionen}>
                  {this.state.Puppys}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={this.closeMobileMenu}>
                  {this.state.Contact}
                </NavLink>
              </li>
              <li>
                <NavLink to onClick={this.closeMobileMenu}>
                  Links
                </NavLink>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    split
                    variant="success"
                    id="dropdown-split-basic"
                  >
                    <li>
                      {" "}
                      <i className="fas fa-globe"></i>
                      {"  " + this.languagueTranslator()}
                    </li>
                  </Dropdown.Toggle>
                  <DropdownMenu>
                    <DropdownItem
                      href="#"
                      onClick={this.props.toggleLanguagueEN}
                    >
                      English
                    </DropdownItem>
                    <DropdownItem
                      href="#"
                      onClick={this.props.toggleLanguagueFR}
                    >
                      Français
                    </DropdownItem>
                    <DropdownItem
                      href="#"
                      onClick={this.props.toggleLanguagueDE}
                    >
                      Deutsch
                    </DropdownItem>
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
