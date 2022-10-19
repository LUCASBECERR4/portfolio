import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/lucas-becerra-/' target="blank"><BsLinkedin /></a>
        </div>

        <div>
            <a href='https://github.com/LUCASBECERR4' target="blank"><BsGithub /></a>
        </div>

    </div>
  )
}

export default SocialMedia