import { useState } from 'react'
import Artboard1 from './assets/Image/Artboard 1.jpg'
import Artboard2 from './assets/Image/Artboard 2.jpg'
import Artboard3 from './assets/Image/Artboard 3.jpg'
import Artboard4 from './assets/Image/Artboard 4.jpg'
import Artboard5 from './assets/Image/Artboard 5.jpg'
import Artboard6 from './assets/Image/Artboard 6.jpg'
import Artboard7 from './assets/Image/Artboard 7.jpg'
import video8 from './assets/videos/8.mp4'
import video9 from './assets/videos/9.mp4'
import video12 from './assets/videos/12.mp4'
import Artboard8 from './assets/Image/Artboard 8.jpg'
import Artboard9 from './assets/Image/Artboard 9.jpg'
import Artboard10 from './assets/Image/Artboard 10.jpg'
import Artboard11 from './assets/Image/Artboard 11.jpg'
import Artboard12 from './assets/Image/Artboard 12.jpg'
import Artboard13 from './assets/Image/Artboard 13.jpg'
import Artboard14 from './assets/Image/Artboard 14.jpg'
import Artboard15 from './assets/Image/Artboard 15.jpg'
import Artboard16 from './assets/Image/Artboard 16.jpg'
import Artboard17 from './assets/Image/Artboard 17.jpg'
import styleace from './assets/videos/styleace.mp4'
import Romeo from './assets/videos/Romeo.mp4'
import myBar from './assets/videos/myBar.mp4'
import Zess from './assets/videos/Zess.mp4'
import snapinsta from './assets/videos/snapinsta.mp4'
import Bhasin from './assets/videos/Bhasin.mp4'
import Art1 from './assets/Image/Art1.jpg'
import Art2 from './assets/Image/Art2.jpg'
import Art3 from './assets/Image/Art3.jpg'
import Art4 from './assets/Image/Art4.jpg'
import Art5 from './assets/Image/Art5.jpg'
import Art6 from './assets/Image/Art6.jpg'
import Art7 from './assets/Image/Art7.jpg'
import Art8 from './assets/Image/Art8.jpg'
import Art9 from './assets/Image/Art9.jpg'
import Art10 from './assets/Image/Art10.jpg'
import Artboard20 from './assets/Image/Artboard 20.jpg'
import Artboard21 from './assets/Image/Artboard 21.jpg'
import Artboard22 from './assets/Image/Artboard 22.jpg'
import Artboard23 from './assets/Image/Artboard 23.jpg'
import Artboard24 from './assets/Image/Artboard 24.jpg'
import Artboard25 from './assets/Image/Artboard 25.jpg'
import Artboard26 from './assets/Image/Artboard 26.jpg'
import Artboard27 from './assets/Image/Artboard 27.jpg'
import Artboard28 from './assets/Image/Artboard 28.jpg'
import packaging from './assets/videos/packaging.mp4'
import s1 from './assets/Image/Silver Spring Presentation/1.png'
import s2 from './assets/Image/Silver Spring Presentation/2.png'
import s3 from './assets/Image/Silver Spring Presentation/3.png'
import s4 from './assets/Image/Silver Spring Presentation/4.png'
import s5 from './assets/Image/Silver Spring Presentation/5.png'
import s6 from './assets/Image/Silver Spring Presentation/6.png'
import s7 from './assets/Image/Silver Spring Presentation/7.png'
import s8 from './assets/Image/Silver Spring Presentation/8.png'
import s9 from './assets/Image/Silver Spring Presentation/9.png'
import s10 from './assets/Image/Silver Spring Presentation/10.png'
import s11 from './assets/Image/Silver Spring Presentation/11.png'
import s12 from './assets/Image/Silver Spring Presentation/12.png'
import s13 from './assets/Image/Silver Spring Presentation/13.png'
import s14 from './assets/Image/Silver Spring Presentation/14.png'
import s15 from './assets/Image/Silver Spring Presentation/15.png'
import s16 from './assets/Image/Silver Spring Presentation/16.png'


import './App.css'

function App() {


  return (
    <>
     <div className='w-full h-full flex flex-col justify-center items-center' style={{backgroundColor:"#eaeaea"}}>
     <img src={Artboard1} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain object-cover' srcSet={Artboard1}/>
     <img src={Artboard2} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain object-cover' />
     <img src={Artboard3} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard4} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s1} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s2} alt="loading" className=' h-full w-full' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s3} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s4} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s5} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s6} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s7} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s8} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s9} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s10} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s11} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s12} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s13} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s14} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s15} alt="loading" className=' h-full w-full ' /></div>
     <div className='md:w-[60.6vw] md:h-[100vh] h-full w-full mx-auto '><img src={s16} alt="loading" className=' h-full w-full ' /></div>
     <img src={Artboard5} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard6} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard7} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <video autoPlay loop playsInline muted className='md:w-[90vw] md:h-[100vh] h-full w-full  mx-auto md:object-contain ' >
      <source src={video8} type="video/mp4" />
     </video>
     <video autoPlay loop playsInline muted className='md:w-[90vw] md:h-[100vh] h-full w-full  mx-auto md:object-contain ' >
      <source src={video9} type="video/mp4" />
     </video>
     <video autoPlay loop playsInline muted className='md:w-[90vw] md:h-[100vh] h-full w-full  mx-auto md:object-contain ' >
      <source src={video12} type="video/mp4" />
     </video>
      <img src={Artboard10} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' /> 
      <img src={Artboard13} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard14} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />

      <div className='md:flex md:max-w[90vw] gap-10 justify-between h-[34rem] items-center'>
     <video autoPlay loop playsInline muted className='w-1/2 h-[32.8rem] ' >
      <source src={styleace} type="video/mp4" />
     </video>
     <video autoPlay loop playsInline muted className='w-1/2 h-[32.8rem]' >
      <source src={Bhasin} type="video/mp4" />
     </video>
     <video autoPlay loop playsInline muted className='w-1/2 h-[32.8rem]'  >
      <source src={snapinsta} type="video/mp4" />
     </video>
     </div>

     <div className='md:flex md:max-w[90vw] gap-10 justify-between h-[34rem]  items-center '>
     <video autoPlay loop playsInline muted className=' w-1/2 h-[32.8rem]' >
      <source src={Romeo} type="video/mp4" />
     </video>
     <video autoPlay loop playsInline muted className='w-1/2 h-[32.8rem]' >
      <source src={myBar} type="video/mp4" />
     </video>
     <video autoPlay loop playsInline muted className='w-1/2 h-[32.8rem]'  >
      <source src={Zess} type="video/mp4" />
     </video>
     </div>
     <img src={Art1} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Art2} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Art3} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Art4} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Art5} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Art6} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Art7} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Art8} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard20} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard21} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <div className='md:w-[60.5vw] md:h-[100vh] h-full w-full bg-white'>
     <video autoPlay loop playsInline muted className='md:w-[90vw] md:h-[100vh] h-full w-full  mx-auto md:object-contain ' >
      <source src={packaging} type="video/mp4" />
     </video>
     </div>
     <img src={Artboard23} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard24} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard25} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard26} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard27} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard28} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     
     </div> 
    </>
  )
}

export default App
