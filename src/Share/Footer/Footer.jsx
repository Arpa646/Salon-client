import React from 'react';

const Footer = () => {
    return (
        <div className='bg-design container-fluid'>
<footer class="footer row p-10 bg-base-200 text-base-content">
  <div className='col-lg-3' >
    <h3 class="footer-title">Services</h3> 
    <li>Branding</li> 
    <li>Branding</li> 
    <li>Design</li> 
    <li>Marketing</li> 
    <a>Advertisement</a>
  </div> 
  <div className='col-lg-3'>
    <h3 class="footer-title">Company</h3> 
    <li class="link link-hover">About us</li> 
    <li class="link link-hover">Contact</li> 
    <li class="link link-hover">Jobs</li> 
    <li class="link link-hover">Press kit</li>
  </div> 
  <div className='col-lg-3'>
    <h3 class="footer-title">Legal</h3> 
    <li class="link link-hover">Terms of use</li> 
    <li class="link link-hover">Privacy policy</li> 
    <li class="link link-hover">Cookie policy</li>
  </div> 
  <div className='col-lg-3'>
    <h3 class="footer-title">Newsletter</h3> 
    <div class="form-control w-80">
      <label class="label">
        <h3 class="label-text">Enter your email address</h3>
      </label> 
      <div class="relative">
        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
              
            
           
        </div>
    );
};

export default Footer;
