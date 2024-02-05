import React, { useEffect } from 'react'
import "./main.css"
import img from '../../assests/img(1).jpg';
import img2 from '../../assests/img(2).jpg';
import img3 from '../../assests/img(3).jpg';
import img4 from '../../assests/img(4).jpg';
import img5 from '../../assests/img(5).jpg';
import img6 from '../../assests/img(6).jpg';
import img7 from '../../assests/img(7).jpg';
import img8 from '../../assests/img(8).jpg';
import img9 from '../../assests/img(9).jpg';
import {IoLocationOutline} from "react-icons/io5";
import {HiClipboardDocumentCheck} from "react-icons/hi2";

import Aos from 'aos'
import 'aos/dist/aos.css'
const Main = () => {

  useEffect(()=>{
      Aos.init({duration:2000})
  },[])

   const Data=[
    {
      id:1,
      imgSrc:img,
      destTitle:'Bora Zealand',
      location:'New Zealand',
      grade:'CULTURAL RELAX',
      fees:'$700',
      description:'The epitome of romance, Bora is one of the best tracel destination in the world. this place is known for its luxurious stays and adventuorus activities.'
    },
    {
      id:2,
      imgSrc:img2,
      destTitle:'Machu Picchu',
      location:'Peru',
      grade:'CULTURAL RELAX',
      fees:'$600',
      description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourist as the sunrise from the Gate is simply spectacular.'
    },
    {
      id:3,
      imgSrc:img3,
      destTitle:'Great Barrier Reef',
      location:'Australia',
      grade:'CULTURAL RELAX',
      fees:'$700',
      description:"One of the most remarkable Australian natural gifts is the Great barrier Reef.The gallmark of this place is 'lavish' and 'beauty'.Always interesting to be in this place. "
    },
    {
      id:4,
      imgSrc:img4,
      destTitle:'Cappadocia',
      location:'Turkey',
      grade:'CULTURAL RELAX',
      fees:'$800',
      description:'According to the world Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia.This place is know for its luxurious stays and adventurous activities'
    },
    {
      id:5,
      imgSrc:img5,
      destTitle:'Guanajuato',
      location:'Maxico',
      grade:'CULTURAL RELAX',
      fees:'$1100',
      description:'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always Welcome'
    },
    {
      id:6,
      imgSrc:img6,
      destTitle:'Cinque Terre',
      location:'Italy',
      grade:'CULTURAL RELAX',
      fees:'$840',
      description:'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will n=be exhilarated with the choich=e you are about to get here. Happy exploring great food!.'
    },
    {
      id:7,
      imgSrc:img7,
      destTitle:'Angkor Wat',
      location:'Cambodia',
      grade:'CULTURAL RELAX',
      fees:'$7990',
      description:'Angkot wat represents the entire range of khmer art from the 9th to the 15th century.This temple is considered the heart and soul of Cambodia. This place is konwn for its luxurious stays and adventurous activities.'
    },
    {
      id:8,
      imgSrc:img8,
      destTitle:'Taj Mahal',
      location:'India',
      grade:'CULTURAL RELAX',
      fees:'$900',
      description:'An immense mausoleum of white marble, built-in agra by Mugal emperor Shah Jahan in memory of his wife Mumtaz, the moument is breathtakingly beautyful. This place is known for its luxurious stays and adventurous activities.'
    },
    {
      id:9,
      imgSrc:img9,
      destTitle:'Bali IsLand',
      location:'Indonesia',
      grade:'CULTURAL RELAX',
      fees:'$500',
      description:'Bali is an Indonesian Island and one of the  best holiday destinations in the indonesian archipelago.BAli is known for its volcanic mountains, history,art & culture ,food temples and beautyful sandy beaches..'
    },
  ]
 


  return (
    <>
    <section className='main container section'>
        <div className='secTitle'>
          <h3 data-aos='fade-up' className='title'>
            Most Visited Destinations
          </h3>
        </div>

        <div className='secContent grid'>
        {Data.map(({id, imgSrc, destTitle, location, grade, fees, description }) => {
  
    return (
        <div data-aos='fade-up' key={id} className='singleDestination'>
            <div className='imageDiv'>
                <img src={imgSrc} alt={destTitle} />
            </div>
            <div className='cardInfo'>
                <h4 className='destTitle'>{destTitle}</h4>
                <span className='continent flex'>
                  <IoLocationOutline className='icon'/>
                  <span className='name'>
                    {location}
                  </span>
                  </span>
                  <div className='fees flex'>
                        <div className='grade'>
                          <span>{grade}<small>+1</small></span>
                          </div>
                          <div className='price'>
                            <h1>{fees}</h1>
                          </div>
                      </div>

                      <div className='desc'>
                        <p>{description}</p>
                      </div>

                      <button className='btn flex'>
                        DETAILS <HiClipboardDocumentCheck  className='icon'/>
                      </button>
            </div>
        </div>
    );
})}

  </div>
      </section>
      </>
  )
}

export default Main