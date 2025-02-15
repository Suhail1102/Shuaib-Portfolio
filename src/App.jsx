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

import './App.css'

function App() {


  return (
    <>
    {/* <div className='w-full h-full flex flex-col justify-center items-center' style={{backgroundColor:"#eaeaea"}}>
     <img src={Artboard1} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain object-cover' srcSet={Artboard1}/>
     <img src={Artboard2} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain object-cover' />
     <img src={Artboard3} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard4} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
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
     </video> */}
     {/* <img src={Artboard8} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' /> */}
     {/* <img src={Artboard9} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' /> */}
     {/* <img src={Artboard10} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' /> */}
     {/* <img src={Artboard11} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' /> */}
     {/* <img src={Artboard12} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' /> */}
     {/* <img src={Artboard13} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Artboard14} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' /> */}
     {/* <img src={Artboard15} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' /> */}

     {/* <div className='md:flex md:max-w[90vw] gap-10 justify-between h-[34rem] items-center'>
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
     <img src={Art9} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     <img src={Art10} alt="loading" className='md:w-[90vw] md:h-[100vh] h-full w-full mx-auto md:object-contain' />
     </div> */}
    </>
  )
}

export default App
