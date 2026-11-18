import './Blog.css';

function Blog() {
  return (
    <>
    <div id='Blog' className='blog'>
        <h1 data-aos="fade-up"  className="Blog-heading">From the blog</h1>
        <div data-aos="fade-up" className="blog-con">
            <div  className="blog-item">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80" alt="" className="blog-img" />
                <button className='blog-btn1'>Programming</button>
                <h3 className='bloghead'>Why Every Beginner Should Learn Python First</h3>
                <p className='blog-para'>Python is one of the easiest programming languages for beginners. In this blog, I explain why Python is a great first language and how students can start building real-world projects.</p>
                {/* <button className='blog-btn2'>Read more --</button> */}
            </div>
            <div  className="blog-item">
                <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80" alt="" className="blog-img" />
                <button className='blog-btn1'>Web Development</button>
                <h3 className='bloghead'>How I Built My Personal Portfolio Website</h3>
                <p className='blog-para'>A behind-the-scenes look at how I designed and developed my portfolio using HTML, CSS, and JavaScript, along with the lessons I learned during the process.</p>
                {/* <button className='blog-btn2'>Read more --</button> */}
            </div>
            <div  className="blog-item">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80" alt="" className="blog-img" />
                <button className='blog-btn1'>Projects</button>
                <h3 className='bloghead'>Beginner-Friendly Programming Projects</h3>
                <p className='blog-para'>Explore easy yet practical coding projects that help beginners strengthen their programming skills and build an impressive portfolio.</p>
                {/* <button className='blog-btn2'>Read more --</button> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog