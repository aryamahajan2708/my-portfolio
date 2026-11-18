import React from 'react'
import './HomePage.css';
import { TypeAnimation } from 'react-type-animation';

function HomePage() {
  return (
    <>
      <div data-aos="fade-up" className='home-container' id='home'>
        <div className="home-con-1">
            {/* <h1 className='heading'>Hi, I'm <b>Arya</b></h1> */}
            <h1 className="heading">
              <b className='heading-b'>Hi, I'm </b>
             <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  ' Arya Mahajan.',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  ' a Web developer.',
                  1000,
                  ' a Frontend & Backend Developer.',
                  1000,
                  ' a Web Designer.',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{fontSize:'35px' ,display: 'inline-block' ,color: "orangered"}}
                repeat={Infinity}
              />
            </h1>
            <p className='head-about'>I'm Arya. I design and build digital and Responsive Website and Application that people love to use — fast, clean, and accessible.</p>
            {/* <button className='home-btn-1' >View my work</button> */}
            <a href="#Work" className='home-btn-1'>View my work</a>
            {/* <button className='home-btn-2'>Get in touch</button> */}
            <a href="#ContectForm" className='home-btn-2'>Get in touch</a>
            <div className="home-myexperience">
                <div className='projectDone div-1'>
                    <p className='p-1'>10+</p>
                    <p className='p-2'>Projects done</p>
                </div>
                <div className='clients div-2'>
                    <p className='p-1'>20+</p>
                    <p className='p-2'>Happy clients</p>
                </div>
                <div className='year-experience div-3'>
                    <p className='p-1'>1y</p>
                    <p className='p-2'>Experience</p>
                </div>
            </div>
        </div>
        <div className="home-con-2">
            {/* <img src="https://drive.google.com/file/d/1-pEw194r2jCSzt2giD09h3GVr7JL7L0I/view?usp=drive_link" alt="" width={100} className='home-img'/> */}
            <img src="/Myhomephoto.jpg" alt="" width={100} className='home-img'/>
        </div>
      </div>
    </>
  )
}
export default HomePage