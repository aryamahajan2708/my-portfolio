import './About.css';


function About() {
  return (
    <div id="About" className='About'>
      <div data-aos="fade-up" className='About-img'>
        {/* <img src="https://drive.google.com/file/d/1pwUNC0GSSEd4nYwRnFhivfPY6zECLDha/view?usp=drive_link" alt="" /> */}
         <img src="/Myaboutphoto.jpg" alt="" />
      </div>
      <div data-aos="fade-up" className='About-content'>
        <h1 className='about-heading'>A bit about <br />who I am</h1>
        <p className='about-para'>I'm Arya, a Frontend Web Designer and Web Developer based in Burhanpur, Madhya Pradesh, India, with over 2 years of experience building modern, responsive, and user-focused websites. I specialize in creating clean, visually appealing, and high-performance web experiences using HTML, CSS, JavaScript, Bootstrap, and modern frontend technologies..</p>
        <p className='about-para'>I enjoy turning ideas into functional digital products that not only look great but also deliver a seamless user experience. I believe the best websites combine beautiful design with clean, maintainable code. Every project I build is optimized for speed, accessibility, responsiveness, and performance across all devices.</p>
        <h5 className='about-tool'>STACK & TOOLS</h5>
        <button className='about-btn'>HTML</button>
        <button className='about-btn'>CSS</button>
        <button className='about-btn'>Bootstrap 5</button>
        <button className='about-btn'>JavaScript</button>
        <button className='about-btn'>React</button>
        <button className='about-btn'>React library</button>  
        <button className='about-btn'>API</button>
        <button className='about-btn'>GitHub</button>
        <button className='about-btn'>VS code</button>
      </div>
    </div>
  )
}

export default About
