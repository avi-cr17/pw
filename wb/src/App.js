import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import './App.css';
import Nav from './components/Nav';



function App() {

  const [mobile,setMobile] = useState(0);

  useEffect(
      ()=>{
        if (window.innerWidth < 800)
          setMobile(1);

          console.log(window.innerWidth)
      }
  ,[])

  return (
  <>
  <Nav />
  
  <div className='flex flex-row justify-center content-center w-screen h-fit'>
      <div className='h-screen w-0 lg:w-1/12  sticky top-0'>

      <Fade direction='up' delay={2000}> 
      <div className='relative  text-white h-screen  opacity-0  lg:opacity-100'>
        <div className='absolute right-0 bottom-0 flex flex-col content-end align-end '>
        <ul className='top-0 flex flex-col'>
        <a href={mobile ? '#' : 'https://github.com/avi-cr17'}><i className="fa fa-github icons" aria-hidden="true"></i> </a> 
        <a href={mobile ? '#' : 'https://www.linkedin.com/in/avinandanpal/'}><i className="fa fa-linkedin-square icons" aria-hidden="true"></i> </a>
        <a href={mobile ? '#' : 'https://twitter.com/AvinandanPal7'}><i className="fa fa-twitter-square icons" aria-hidden="true"></i></a>
        <a href={mobile ? '#' : 'https://www.instagram.com/this_is_avi07/'}><i className="fa fa-instagram icons" aria-hidden="true"></i> </a> 
        </ul>

        <div className='w-1 bg-white h-32 ml-2 rounded-lg '></div>
        
        </div>
        </div>

        </Fade> 
      </div>
  
      <div className='t-height w-6/6 lg:w-10/12  '>
       
      </div>
      <div className='h-screen w-0 lg:w-1/12  sticky top-0 ' >
      
      <div className='relative  text-white h-screen opacity-0  lg:opacity-100'>
        <div className='absolute inset-x-0 bottom-0 writing flex flex-column content-start align-start'>
        <Fade direction='down' delay={2000}>
        <div className='w-1 bg-white h-32 mr-3 mb-2 rounded-lg'></div>
        <div className='top-0 h-32'> <a href={mobile ? '#' : 'mailto:avinandan.agt@gmail.com'}>avinandan.agt@gmail.com </a> </div>
        </Fade>
        </div>
        </div>
        
      </div>
  </div>
  </>
  );
}

export default App;
