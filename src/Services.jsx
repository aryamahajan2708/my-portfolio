import React from 'react'
import './Services.css';

function Services() {
  return (
    <>
      <div id="Services" className='services'>
        <h1 data-aos="fade-up" className='services-heading'>Services</h1>
        <div data-aos="fade-up" className='services-div'>
            <div className='service-container con-1'>
              <div className='con-logo logo-1'><img src="https://cdn-icons-png.flaticon.com/128/3159/3159310.png" alt="" /></div>
              <h1 className='con-heading'>Website Desiner</h1>
              <p className='con-para'>I create modern, responsive, and user-friendly websites that help businesses establish a strong online presence. My designs focus on clean layouts, fast performance, mobile compatibility, and an excellent user experience. Whether you need a portfolio, business website, landing page, or custom web solution, I deliver websites that are visually appealing and built to achieve your goals.</p>
            </div>
            <div className='service-container middleCon'>
              <div className='con-logo'><img src="https://cdn-icons-png.flaticon.com/128/11743/11743795.png" alt="" /></div>
              <h1 className='con-heading'>Frontend Dev</h1>
              <p className='con-para'>I specialize in building modern, responsive, and interactive user interfaces using the latest web technologies. My focus is on creating fast, accessible, and visually appealing websites that provide a seamless experience across all devices and browsers.I develop responsive and interactive web interfaces that combine clean design, smooth functionality, and excellent user experience across all devices.</p>
            </div>
            <div className='service-container con-1'>
              <div className='con-logo logo-1'><img src="https://cdn-icons-png.flaticon.com/128/7710/7710466.png" alt="" /></div>
              <h1 className='con-heading'>Web Developer</h1>
              <p className='con-para'>As a Web Developer, I specialize in creating dynamic and responsive websites using modern technologies. My goal is to build functional, attractive, and performance-driven web solutions that provide seamless experiences across all devices.Turning ideas into powerful digital experiences. I design and develop websites that combine creativity, functionality, and performance to help brands stand out in the digital world.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Services
