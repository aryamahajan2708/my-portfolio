import "./Contact.css";
import ContectForm from "./ContectForm";
import { MdEmail } from "react-icons/md";


function Contact() {
  return (
    <div id='Contact' >
      <div data-aos="fade-up" className="Contact">
        <div className="Contact-link">
          <h1>Let's work <br /> together</h1>
          <p>I'm a Web Developer & Web Designer building responsive websites and web applications that are fast, modern, and user-friendly. From landing pages to full-stack web solutions, I turn ideas into digital experiences.</p>
          <div className="link-con">
            {/* <div className="link-conItem">
              <a href="https://www.google.com/?hl=en-US"><span><img className="link-img" src="/gmailicon.png" alt="" /></span></a>
            </div> */}
          
            <div className="link-conItem">
              <a href="https://www.linkedin.com/in/arya-mahajan-2708-aum/"><span><img className="link-img" src="/linkedinlogo.png" alt="" /></span></a>
            </div>

            <div className="link-conItem">
              <a href="https://github.com/aryamahajan2708"><span><img className="link-img" src="/githublogo-3.png"  alt="" /></span></a>
            </div>
          </div>
        </div>
        <div className="Contact-form">
          <div>
            <ContectForm />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact