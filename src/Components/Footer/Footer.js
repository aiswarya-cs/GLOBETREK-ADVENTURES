import React, { useEffect } from 'react';
import video2 from "../../assests/video(2).mp4";
import {FiChevronRight, FiSend} from "react-icons/fi";
import "./Footer.css"
import {MdOutlineTravelExplore} from "react-icons/md";
import {FaTripadvisor} from "react-icons/fa";
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai"
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
     <>
     <section className='footer'>
        <div className='videoDiv'>
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className='secContent container'>
          <div className='contactDiv flex'>
            <div data-aos='fade-up' className='text'>
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div className='inputDiv flex'>
              <input data-aos='fade-up' type='text' placeholder='Enter Email Address'/>
              <button data-aos='fade-up' className='btn flex' type='submit'>
                SEND<FiSend className="icon"/>
              </button>
            </div>
          </div>

          <div className='footerCard flex'>
              <div className='footerIntro flex'>
                  <div className='logoDiv'>
                    <a href='#' className='logo flex'>
                    <MdOutlineTravelExplore className='icon'/>Travel.
                    </a>
                  </div>

                  <div data-aos='fade-up' className='footerParagraph'>
                  Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.[1] Travel can also include relatively short stays between successive movements, as in the case of tourism.
                  </div>

                  <div data-aos='fade-up' className='footerSocials'>
                    <AiOutlineTwitter className='icon'/>
                    <AiFillYoutube className='icon'/>
                    <AiFillInstagram className='icon'/>
                    <FaTripadvisor className='icon'/>
                  </div>
              </div>

        
          <div className='footerLinks grid'>
          {/* one */}
            <div data-aos='fade-up' data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

            <li className='footerList flex'>
                <FiChevronRight className='icon'/>Service
            </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Insurance        </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>Agency
            </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>tourism
            </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>Payment
            </li>
            </div>
            {/* two */}
            <div data-aos='fade-up' data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

            <li className='footerList flex'>
                <FiChevronRight className='icon'/>Bookings
            </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                RentCars       </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>HotelWorld
            </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>Trivago
            </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>TripAdvisor
            </li>
            </div>
            {/* three */}
            <div data-aos='fade-up' data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

            <li className='footerList flex'>
                <FiChevronRight className='icon'/>London
            </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                California       </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>Indonesia
            </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>Europe
            </li>
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>Oceania
            </li>
            </div>


          </div>

          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHT @TRAVEL</small>
          </div>
        </div>
      </div>
      </section>
      
     </>
   )
 }
 
 export default Footer