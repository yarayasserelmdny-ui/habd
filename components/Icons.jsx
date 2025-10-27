import { Facebook, Linkedin, Mail, Github, Phone } from 'lucide-react'
import React from 'react'

export default function Icons() {
  return (
    <div className='flex gap-2 '> 
    <a target='blank' href="https://www.facebook.com/share/17VGyF6ph8/"><Facebook className='text-[#FF6500] size-8' /></a>
     <a href="mailto:yara.yasser.elmdny@gmail.com" target='blank'><Mail className='text-[#FF6500] size-8' /></a>
     <a href="tel:+201005699697" target='blank'><Phone className='text-[#FF6500] size-8' /></a>
      <a href="https://www.linkedin.com/in/yara-yasser-elmadany-32064a23b/" target='blank'><Linkedin className='text-[#FF6500] size-8' /></a>
       <a href="https://github.com/yarayasserelmdny-ui" target='blank'><Github className='text-[#FF6500] size-8' /></a> </div>
  )
}
