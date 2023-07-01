import Bounce from 'react-reveal/Bounce';
import Jello from 'react-reveal/Jello';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
 import './header.css';
 import imagee from './images/myimage.jpg';
function Header() {
    return (
      <div className='Main-Head'>
      <div classNameName="header">
        <Zoom right>
        <div className="header__content">
            <div className="header__logo-container">
               <div className="header__logo-img-cont">
               <img src='https://d33wubrfki0l68.cloudfront.net/32c48e23e828c42a99a37db81e2a91d7c8eed4de/d134a/assets/png/ram-maheshwari.png' alt="Nitin Yadav Logo Image" className="header__logo-img"/>
               <img src='myimage'/>
               </div>
               <span className="header__logo-sub">Nitin Yadav</span>
            </div>
           
           

            <div className="header__main">
               <ul className="header__links">
                  <li className="header_link-wrapper">
                  <a href="" className="header__link"> Home </a>
                  </li>
                  <li className="header_link-wrapper">
                  <a href="./#about" className="header__link">About </a>
                  </li>
                  <li className="header_link-wrapper">
                  <a href="./#projects" className="header__link"> Projects </a>
                  </li>
                  <li className="header_link-wrapper">
                  <a href="./#contact" className="header__link"> Contact </a>
                  </li>
                </ul>
              <div className="header__main-ham-menu-cont">
                  <img src="" alt="hamburger menu" className="header__main-ham-menu"/>
                  <img src="" alt="hamburger menu close" className="header__main-ham-menu-close d-none"/>
              </div>
            </div>
           </div>
           
          
       </Zoom>
       </div> 

       <div className="home-hero">
      




      <div className="home-hero__content">
      <canvas id="canvas">
  
      </canvas>
        <h1 className="heading-primary"><Fade left>Hey, I'm Nitin Yadav</Fade></h1>
        <div className="home-hero__info">
          <p className="text-primary"><Bounce left>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
            </Bounce>
          </p>
        </div>
        
        <div className="home-hero__cta">
          <a href="./#projects" className="bttn"><Jello>Projects</Jello></a>
        </div>
      </div>
      
      <div className="home-hero__socials">
      <Fade bottom>
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/nitin-yadav-bb81171a4/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
            <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="Nitin Yadav Linkedin Profile" className="home-hero__social-icon"/>
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://twitter.com/4as1910033" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
            <img src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg" alt="Nitin Yadav Twitter Profile" className="home-hero__social-icon"/>
          </a>
        </div>
        
        <div className="home-hero__social">
          <a href="https://github.com/knitin2604" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
            <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="Nitin Yadav Github Profile" className="home-hero__social-icon"/>
          </a>
        </div>
  
        <div className="home-hero__social">
          <a href="https://leetcode.com/knitin/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
            <img src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg" alt="Nitin Yadav Leetcode Profile" className="home-hero__social-icon"/>
          </a>
        </div>
        </Fade>
      </div>
      
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
      </div> 
 
   
       </div>

    
    );
  }
  
  export default Header;