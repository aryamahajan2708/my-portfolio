import './Work.css';

function Work() {
  return (
    <div id="Work">
        <h1 data-aos="fade-up" className='services-heading'>Selected work</h1>
        <div className="work-container">
            <div data-aos="fade-up" className="work-con-1">
                <div className='workitem-1'>
                    <img src="/calculatorphoto.jpg" alt="" />
                    <h1 className='work-heading'>Calculator App</h1>
                    <p className='work-para'>The Calculator Project is a responsive web application developed to perform essential mathematical calculations quickly and accurately. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division through a clean and user-friendly interface. The project was built using HTML, CSS, and JavaScript, allowing me to strengthen my understanding of DOM manipulation, event handling, and JavaScript functions.</p> 
                    <p className='work-para'>Special attention was given to creating a responsive design so that the calculator works smoothly on desktops, tablets, and mobile devices. Error handling was also implemented to prevent invalid operations and improve the overall user experience.</p>
                     <p className='work-para'>This project demonstrates my ability to build interactive web applications while writing clean, organized, and maintainable code. It reflects my knowledge of front-end development principles and showcases my problem-solving skills in creating a practical and efficient application.</p>
                    {/* <button className='work-btn'> <a style={{textDecoration:"none", color:"orangered"}} href="aryacalculator.netlify.app">View Project -{">"}</a></button> */}
                    <a style={{textDecoration:"none", color:"orangered"}} href="https://aryacalculator.netlify.app">View Project -{">"}</a>
                </div>
            </div>
            <div data-aos="fade-up"  className="work-con-2">
                <div className='workitem-2'>
                    <img src="/studentmanagementsystem.png" alt="" />
                    <h1 className='work-heading1'>Student Management System App</h1>
                    <p className='work-para1'>A Student Management System (SMS) is a comprehensive software application designed to streamline and automate administrative and academic operations within educational institutions. It acts as a centralized digital database that securely stores and manages critical student information, ranging from personal details and admission records to enrollment histories. </p>
                    {/* <button className='work-btn1'> <a style={{textDecoration:"none", color:"orangered"}} href="">View Project -{">"}</a></button> */}
                    <a style={{textDecoration:"none", color:"orangered"}} href="https://github.com/aryamahajan2708/Django-Student-Management-">View Project -{">"}</a>
                </div>
                <div className='workitem-3'>
                    <img src="/marksheetapp.png" alt="" />
                    <h1 className='work-heading1'>Marksheet App</h1>
                    <p className='work-para1'>The Marksheet Project is a web-based application designed to calculate and display student examination results accurately and efficiently. Users can enter marks for multiple subjects, after which the system automatically calculates the total marks, percentage, grade, and pass/fail status.</p>
                    {/* <button className='work-btn1'> <a style={{textDecoration:"none", color:"orangered"}} href="aryamarksheet.netlify.app">View Project -{">"}</a></button> */}
                    <a style={{textDecoration:"none", color:"orangered"}} href="https://aryamarksheet.netlify.app">View Project -{">"}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
