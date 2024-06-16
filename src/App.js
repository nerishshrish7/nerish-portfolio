import './App.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBrush } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

function App(){
  let navbar=document.querySelector('.navbar');
  let section=document.querySelectorAll('section');
  let navlinks=document.querySelectorAll('header navbar a');

  window.onscroll = () =>{
    section.forEach(sec=>{
      let top= window.scrollY;
      let offset= sec.offsetTop - 150;
      let height= sec.offsetHeight;
      let id= sec.getAttribute('id');

      if(top>= offset && top < offset + height){
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header navbar a [href*=' + id + ']').classList.add('active');
        })
      }
    })
  }
  return(
    <>
    <header className='header'>
      <a href='#home' className='logo'>PORTFOLIO</a>
      <nav className='navbar'>
        <a href='#home' className='active'>Home</a>
        <a href='#abo'>About Me</a>
        <a href='#ser'>Services</a>
        <a href='#edu'>Education</a>
        <a href='#con'>Contact</a>
      </nav>
    </header>

    <section className='home' id='home'>
      <div className='home-content'>
        <h1>Hello, It's Me</h1>
        <h3>Nerish Shrish</h3>
        <h2 class="text-animation">And I'm a <span></span></h2>
        <p>Hi, I am recently grade 12th pass-out student from Tilottama Campus, Butwal and I have created many websites using UI/UX Design & Front-End. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='social'>
          <a href='#' className='group'><FaFacebookF className='text-[1.5vw] text-[#00ffee] group-hover:text-[white]'/></a>
          <a href='#' className='group ml-[3vw]'><FaTwitter className='text-[1.5vw] text-[#00ffee] group-hover:text-[white]'/></a>
          <a href='#' className='group ml-[3vw]'><FaInstagram className='text-[1.5vw] text-[#00ffee] group-hover:text-[white]'/></a>
          <a href='#' className='group ml-[3vw]'><FaLinkedinIn className='text-[1.5vw] text-[#00ffee] group-hover:text-[white]'/></a>
        </div>
        <div className='btn-box'>
          <a href='#'>Hire Me</a>
          <a href='#'>Let's Talk</a>
        </div>
      </div>
      <div className='pp'><img src='' alt='pp'/></div>
    </section>

    <div id='abo'></div>
    <section className='about' id='about'>
      <h2 className='about-head'>About <span className='text-[#00ffee]'>Me</span></h2>
      <div className='skill-row'>
        <div className='skill-column'>
          <h3 className='title'>Coding Skills</h3>
          <div className='skill-box'>
            <div className='skill-content'>
              <div className='progress'>
                <h4>HTML <span>90%</span></h4>
                <div className='bar'><span className='h-[1.05vh] w-[90%] bg-[#00ffee] rounded-sm block z-10 mt-[-0.56vh] ml-[-0.3vw]'></span></div>
              </div>
              <div className='progress'>
                <h4>CSS <span>90%</span></h4>
                <div className='bar'><span className='h-[1.05vh] w-[90%] bg-[#00ffee] rounded-sm block z-10 mt-[-0.56vh] ml-[-0.3vw]'></span></div>
              </div>
              <div className='progress'>
                <h4>Javascript <span>80%</span></h4>
                <div className='bar'><span className='h-[1.05vh] w-[80%] bg-[#00ffee] rounded-sm block z-10 mt-[-0.56vh] ml-[-0.3vw]'></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className='skill-column'>
          <h3 className='title'>Professional Skills</h3>
          <div className='skill-box'>
            <div className='skill-content'>
              <div className='progress'>
                <h4>Web Design <span>90%</span></h4>
                <div className='bar'><span className='h-[1.05vh] w-[90%] bg-[#00ffee] rounded-sm block z-10 mt-[-0.56vh] ml-[-0.3vw]'></span></div>
              </div>
              <div className='progress'>
                <h4>Web Development <span>80%</span></h4>
                <div className='bar'><span className='h-[1.05vh] w-[80%] bg-[#00ffee] rounded-sm block z-10 mt-[-0.56vh] ml-[-0.3vw]'></span></div>
              </div>
              <div className='progress'>
                <h4>Graphic Design <span>60%</span></h4>
                <div className='bar'><span className='h-[1.05vh] w-[60%] bg-[#00ffee] rounded-sm block z-10 mt-[-0.56vh] ml-[-0.3vw]'></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div id="ser"></div>
    <section className='services' id='services'>
      <h1 className='service-head'>Our <span className='text-[#00ffee]'>Services</span></h1>
      <div className='service-row'>
        <div className='service-box'>
          <BsBrush className='text-[#00ffee] text-[3vw] mb-[-2vh]'/>
          <h2>UI/UX Designer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consequat vel bibendum eu, ornare eu augue.</p>
          <div className='read-btn'>Read More</div>
        </div>
        <div className='service-box'>
          <FaCode className='text-[#00ffee] text-[3vw] mb-[-2vh]'/>
          <h2>Web Developer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consequat vel bibendum eu, ornare eu augue.</p>
          <div className='read-btn'>Read More</div>
        </div>
        <div className='service-box'>
          <SlGlobe className='text-[#00ffee] text-[3vw] mb-[-2vh]'/>
          <h2>Digital Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consequat vel bibendum eu, ornare eu augue.</p>
          <div className='read-btn'>Read More</div>
        </div>
      </div>
    </section>
    
    <div id='edu'></div>
    <section className='eductaion' id='education'>
      <h2 className='heading'>Educa<span className='text-[#00ffee]'>tion</span></h2>
      <div className='date'>
        <div className='item'>
          <div className='dot'></div>
          <div className='year'>2021</div>
          <div className='edu-content'>
            <h3>Primary School</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id augue diam. Ut vel ipsum sit amet tellus lobortis ullamcorper eu sit amet nulla. Donec lacinia maximus lacus sed consectetur.</p>
          </div>
        </div>
        <div className='item'>
          <div className='dot'></div>
          <div className='year'>2023</div>
          <div className='edu-content'>
            <h3>High School</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id augue diam. Ut vel ipsum sit amet tellus lobortis ullamcorper eu sit amet nulla. Donec lacinia maximus lacus sed consectetur.</p>
          </div>
        </div>
        <div className='item'>
          <div className='dot'></div>
          <div className='year'>2023</div>
          <div className='edu-content'>
            <h3>Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id augue diam. Ut vel ipsum sit amet tellus lobortis ullamcorper eu sit amet nulla. Donec lacinia maximus lacus sed consectetur.</p>
          </div>
        </div>
        <div className='item'>
          <div className='dot'></div>
          <div className='year'>2024</div>
          <div className='edu-content'>
            <h3>Intern</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id augue diam. Ut vel ipsum sit amet tellus lobortis ullamcorper eu sit amet nulla. Donec lacinia maximus lacus sed consectetur.</p>
          </div>
        </div>
      </div>
    </section>

    <div id='con'></div>
    <section className='contact' id='contact'>
      <h1 className='contact-head'>Contact <span className='text-[#00ffee]'>Me!</span></h1>
      <form action='#'>
        <div className='input-box'>
          <div className='input-field'>
            <input type='text' placeholder='Full Name' required/>
          </div>
          <div className='input-field'>
            <input type='email' placeholder='Email Address' required/>
          </div>
        </div>
        <div className='input-box'>
          <div className='input-field'>
            <input type='text' placeholder='Mobile Number' required/>
          </div>
          <div className='input-field'>
            <input type='text' placeholder='Email Subject' required/>
          </div>
        </div>
        <div className='textarea'>
          <textarea name='' id='' cols={30} rows={10} placeholder='Your Message' required/>
        </div>
        <div className='contact-btn'>Submit</div>
      </form>
    </section>

    <footer className='footer'>
      <div className='footer-social'>
        <a href='#' className='group'><FaFacebookF className='text-[1.5vw] text-[#00ffee] group-hover:text-[white]'/></a>
        <a href='#' className='group ml-[3vw]'><FaTwitter className='text-[1.5vw] text-[#00ffee] group-hover:text-[white]'/></a>
        <a href='#' className='group ml-[3vw]'><FaInstagram className='text-[1.5vw] text-[#00ffee] group-hover:text-[white]'/></a>
        <a href='#' className='group ml-[3vw]'><FaLinkedinIn className='text-[1.5vw] text-[#00ffee] group-hover:text-[white]'/></a>
      </div>
      <ul className='list'>
        <li><a href='#'>FAQs</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Education</a></li>
      </ul>
    </footer>
    </>
  );
}
export default App;