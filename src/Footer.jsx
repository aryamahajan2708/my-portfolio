import React from 'react'
import './Footer.css'
  
function Footer() {
  return (
    <div>
      <footer class="footer">
    <div class="footer-container">


        <div class="footer-box">
            <h2>Arya</h2>
            <p>
                Frontend Web Designer and Web Developer creating
                responsive and user-friendly websites with modern designs.
            </p>
        </div>


        <div class="footer-box">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Work">Work</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Review">Reviews</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>

        <div class="footer-box">
            <h3>Contact</h3>
            <p>Email: aryamahajan2708@gmail.com</p>
            <p>Phone: +91 7771931401</p>
            <p>Burhanpur, Madhya Pradesh</p>
        </div>


        <div class="footer-box">
            <h3>Follow Me</h3>

            <div class="social-icons">
                <div className="link-conItem">
                    <a href="https://www.linkedin.com/in/arya-mahajan-2708-aum/"><span><img className="link-img" src="/linkedinlogo.png" alt="" /></span></a>
                </div>

                <div className="link-conItem">
                    <a href="https://github.com/aryamahajan2708"><span><img className="link-img" src="/githublogo-3.png"  alt="" /></span></a>
                </div>
            </div>
        </div>

    </div>

    <div class="footer-bottom">
        <p>@ 2026 Arya | Web Developer</p>
    </div>
</footer>
    </div>
  )
}

export default Footer
