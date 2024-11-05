import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function Header() {
  return (
    <div className="main-header">
    <div className="site-mobile-menu site-navbar-target">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close">
        <span className="icofont-close js-menu-toggle"></span>
      </div>
    </div>
    <div className="site-mobile-menu-body"></div>
  </div>

  <nav className="site-nav">
    <div className="container">
      <div className="menu-bg-wrap">
        <div className="site-navigation">
          <Link to="http://127.0.0.1:3001/" className="logo m-0 float-start">Property</Link>

          <ul
            className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
          >
            <li className=""><Link to="http://127.0.0.1:3001/">Home</Link></li>
            <li className="has-children">
              <Link to="/properties">Properties</Link>
              <ul className="dropdown">
                <li><a href="#">Buy Property</a></li>
                <li><a href="#">Rent Property</a></li>
                {/* <li className="has-children">
                  <a href="#">Catagory</a>
                  <ul className="dropdown">
                    <li><a href="#">Apartment</a></li>
                    <li><a href="#">Office</a></li>
                    <li><a href="#">Land</a></li>
                  </ul>
                </li> */}
              </ul>
            </li>
            <li><a href="services.html">Services</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>

          <a
            href="#"
            className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Header