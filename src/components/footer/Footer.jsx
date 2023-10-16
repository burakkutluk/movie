import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerImg">
        <img src="src/assets/footer.jpg" alt="" />
      </div>

      <div className="footerItem">
        <img src="src/assets/persona.jpg" alt="" />

        <ul className="items">
          <li className="item">Home</li>
          <li className="item">Contact Us</li>
          <li className="item">Term Of Services</li>
        </ul>

      </div>
    </div>
  )
}

export default Footer