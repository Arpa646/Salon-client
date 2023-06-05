import React from 'react';
import Bphoto from '../../../assets/im/3.jpg'
 import meh from '../../../assets/im/meh2.jpg'
import "./banner.css"
const Banner = () => {
    return (
        <div className='color row bg1  p-4 '>
            <div class="col-lg-5 p-4 p">
            
                  <div>
                  <img src={meh} class=" img-fluid w-75 rounded " />
                   
                  </div>
               
            </div>
            <div class=" col-lg-6  display1">
                <div class=" ">
                   
                    <div >
                        <h1 class="">Your problem We make solution</h1>
                        <p class="">we provide solution as required Your skin</p>
                        <button class="btn2">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;