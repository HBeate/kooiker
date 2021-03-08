import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  closeMobileMenu = () =>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleScroll = () => {
    if (window.pageYOffset > 240) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className={`navbar ${this.state.nav && "navbar__brown"}`}>
          <div className="navbar-container">
            <NavLink to="/" className="navbar-logo">
              IVY
            </NavLink>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' onClick={this.closeMobileMenu}>
                Home
              </NavLink> 
            </li>
            <li className='nav-item'>
              <NavLink to='/aboutus' className='nav-links' onClick={this.closeMobileMenu}>
                Über Uns
              </NavLink> 
            </li>
            <li className='nav-item'>
              <NavLink to='/ivy' className='nav-links' onClick={this.closeMobileMenu}>
                IVY
              </NavLink> 
            </li>
            <li className='nav-item'>
              <NavLink to='/offspring' className='nav-links' onClick={this.closeMobileMenu}>
                nachkommen
              </NavLink> 
            </li>
            <li className='nav-item'>
              <NavLink to='/news' className='nav-links' onClick={this.closeMobileMenu}>
                Aktuell
              </NavLink> 
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' onClick={this.closeMobileMenu}>
                Contact
              </NavLink> 
            </li> 
          </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;