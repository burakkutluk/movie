import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerImg">
        <img src="src/assets/footer.jpg" alt="" />
      </div>

      <div className="footerItem">
        
          <Link to={"/"}><img src="src/assets/logo.png" alt="" /></Link>

        <div className="footerMenus">
          <div className="footerMenu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footerMenu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footerMenu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer