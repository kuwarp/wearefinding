import React from 'react'
import {FaPhone,FaLocationArrow, FaLaptop, FaGithubSquare, FaLinkedinIn, FaTwitterSquare,}from 'react-icons/fa'
import "./footer.css"
import "../../base.css"

function Footer() {
  return (
 <>
 <section id="contact">


<div id="info" className="row contact-info">

   <div className="col-four tab-full">

       <div className="icon">
           <FaLocationArrow/>
       </div>

       <h5>I am Here</h5>

       <p>
    Bundelkhand University<br/>
    Kanpur Road Jhansi<br/>
    Uttar Pradesh
    </p>

   </div>

   <div class="col-four tab-full collapse">

       <div class="icon">
           <FaLaptop/>
       </div>

       <h5>Chat with me</h5>

       <p>kuwar0560@gmail.com<br/>
       bundelkhanduniversityteam@gmail.com			     
       </p>

   </div>

   <div class="col-four tab-full">

       <div class="icon">
           <FaPhone/>
       </div>

       <h5>Call Me At</h5>

       <p>Phone: (+91)7017949440<br/>
           Mobile: (+91)7500073704<br/>
             
       </p>

   </div>
   
</div> 
</section>




<footer>
 <div class="row">

     <div class="col-six tab-full pull-right social">

         <ul class="footer-social">        
           <li><a href="/#"> <FaGithubSquare/></a></li>
          <li><a href="/#"><FaLinkedinIn/></a></li>
          <li><a href="/#"><FaTwitterSquare/></a></li>
         
          <li><a href="/#"><i class="fa fa-instagram"></i></a></li>
       </ul> 
          
  </div>

  <div class="col-six tab-full">
      <div class="copyright">
            <span>© Copyright KuwarP 2022.</span> 
            <span>Design by <a href="https://www.instagram.com/being_dev.eloper/" >Kuwarp</a></span>	         	
         </div>		                  
      </div>
      </div>
      </footer>
      </>
 )
}

export default Footer