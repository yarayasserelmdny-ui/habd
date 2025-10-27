import React from 'react'
import Card from './Card'


export default function My_portfolio() {
  return (
    <section id='portfolio'>
      <div>
        <h1 className=' text-4xl font-bold text-center pt-[10px]'> <span className='text-[#FF6500]'>My </span><span className='text-white'>Portfolio</span></h1>
      </div>
      <div className='grid grid-cols-3 gap-6 justify-center items-center mx-auto max-w-7xl pt-[50px] pb-[80px]'>
        <Card imgs="/Bassit.png" title="Bassit" description="A clean and responsive blog website featuring engaging articles and creative content for readers." link="https://yarayasserelmdny-ui.github.io/bassit/" />

        <Card imgs="/Shop.png" title="Shop.co" description="A stylish e-commerce website for clothing, offering a wide range of fashion items with an easy shopping experience and secure checkout." link="https://yarayasserelmdny-ui.github.io/Shop.co/" />

        <Card imgs="/amr.png" title="Amr El Haddad" description="A professional personal website showcasing Amr El Haddad’s business journey, services, and leadership insights." link="https://amr-alhadad-beta.vercel.app/" />

        <Card imgs="/derma.png" title="Queen Derma"description="A modern beauty services website offering skincare, hair, and body treatments with easy booking and elegant design." link="https://queen-website.vercel.app/" />


        <Card imgs="/nafis.png" title="NAFIS" description="A fully functional e-commerce platform with product catalog, shopping cart, and secure checkout." link="https://www.nafisegypt.com/" />
        
        <Card imgs="/msar.png" title="Track Point Website" description="A professional services website for Track Point, offering fast and reliable governmental and investment solutions for companies, institutions, and individual investors." link="https://www.trackpoint-ksa.com/ar" />
      </div>
    </section>
  )
}
