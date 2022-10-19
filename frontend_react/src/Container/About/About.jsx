import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper';
// import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';


// const Abouts = [
//   {title:'Web Development', description:'I am a good developer', imgUrl:images.about01},
//   {title:'Web Design', description:'I am a good developer', imgUrl:images.about02},
//   {title:'UI/UX', description:'I am a good developer', imgUrl:images.about03},
//   {title:'Web animations', description:'I am a good developer', imgUrl:images.about04}
// ];

const About = ()=> {
  
  const [Abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  

  return (
    
    <>
    <h2 className='head-text'>I Know that <span> Good Design</span><br />means<span> Good Business</span></h2>

    <div className='app__profiles'>
      {Abouts.map((about, index)=>(
        <motion.div
        whileInView={{opasity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}
          className='app__profile-item'
          key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className='bold-text' style={{ marginTop:20 }}>{about.title}</h2>
          <p className='p-text' style={{ marginTop:10 }}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'),
   'about',
   "app__whitebg"
  );