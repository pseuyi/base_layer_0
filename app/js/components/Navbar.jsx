import React from 'react'

const Navbar = ()=>(
  <div data-spy="scroll" data-target="#navbar-links">
    <nav id="navbar-links" className="navbar navbar-fixed-top">
      <ul className="nav navbar-nav navbar-left">
        <li><a className="nav-link" href="/" id="face">( ͡° ͜ʖ ͡°)</a></li>
        <li className="nav-item"><a className="nav-link" href="#chapter-a">a)</a></li>
        <li className="nav-item"><a className="nav-link" href="#chapter-b">b)</a></li>
        <li className="nav-item"><a className="nav-link" href="#chapter-c">c)</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">dropdown menu <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a className="nav-link" href="#chapter-a">1)</a></li>
            <li><a className="nav-link" href="#chapter-b">2)</a></li>
            <li><a className="nav-link" href="#chapter-c">3)</a></li>
            <li role="separator" className="divider"></li>
            <li><a className="nav-link" href="#">hey!</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
)

export default Navbar
