import { Facebook, Linkedin, Mail, Github, Phone } from 'lucide-react'
import Icons from './Icons.jsx'

import React from 'react'

export default function Footer() {
  return (
    <footer >
        <div className='bg-[#020e1b] h-[50px] flex justify-between items-center px-20 '>
        <p className='text-white'>© Copyright 2025 All Rights Reserved by Yara Elmadany</p>
                    <Icons/>

      </div>
    </footer>


  )
}
