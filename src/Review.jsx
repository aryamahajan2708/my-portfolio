import './Review.css';

function Review() {
  return (
    <div id='Review'>
     <h1 data-aos="fade-up" className='services-heading'>Clients Reviews</h1>
     <div className="Review-con">
        <div data-aos="fade-up" className="review-item">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Arya did an excellent job creating our business website. The design is modern, responsive, and easy to navigate. He paid close attention to every detail and delivered the project on time. His professionalism and frontend development skills are truly impressive. I highly recommend Arya for web development projects."</p> 
            <div className='namediv'> 
                <div className='client-img'>
                    <img src="https://passport-photo.in/_next/static/media/IndianMan.99521520.png" alt=""  style={{padding:"15px "}}/>
                </div>
                <div>
                    <p>Rahul Sharma</p>
                    <p className='p'>Business Owner</p>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" className="review-item review-1">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Working with Arya was a wonderful experience. He understood our vision perfectly and transformed it into a beautiful, responsive website. The user interface is clean, fast, and works flawlessly across all devices. We are extremely satisfied with the final result and would gladly work with him again."</p> 
            <div className='namediv'> 
                <div className='client-img'>
                    <img src="https://helpingprompt.in/wp-content/uploads/2026/01/passport-size-photo-prompts-clean-background-15.webp" alt="" style={{padding:"20px "}}/>
                </div>
                <div>
                    <p>Priya Verma</p>
                    <p className='p'>Startup Founder</p>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" className="review-item">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Arya is a talented frontend developer with a great eye for design. He built my portfolio website exactly as I imagined, with smooth animations and excellent responsiveness. His communication was clear throughout the project, and he delivered high-quality work within the deadline. I highly recommend Arya to anyone looking for a skilled web developer."</p> 
            <div className='namediv'> 
                <div className='client-img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpn8zp5NG4_a59OfdvTOB4Ar9jj2eGp73en7hC2JAUe4vN-6Ie_UmRjg&s=10" alt=""  style={{padding:"15px "}}/>
                </div>
                <div>
                    <p>Amit Patel</p>
                    <p className='p'>Digital Marketing Consultant</p>
                </div>
                
            </div>
        </div>
     </div>
    </div>
  )
}

export default Review
