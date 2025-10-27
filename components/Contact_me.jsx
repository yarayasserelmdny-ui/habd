import React from 'react'

export default function Contact_me() {
    return (
        <section id='contact'>
            <div className='bg-[#0B192C] pb-[50px]'>
                <h1 className=' text-4xl font-bold text-center  pt-[40px]'>
                    <span className='text-[#FF6500]'>Contact</span><span className='text-white'> me</span></h1>
                <form className="max-w-2xl mx-auto bg-[#020e1b] text-white p-8 rounded-2xl shadow-2xl space-y-6 mt-[60px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="First Name" className="p-3 bg-[#1A2B4B] rounded-lg w-full"/>
                        <input type="text" placeholder="Last Name" className="p-3 bg-[#1A2B4B] rounded-lg w-full"/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Phone" className="p-3 bg-[#1A2B4B] rounded-lg w-full"/>
                        <input type="text" placeholder="Subject"className="p-3 bg-[#1A2B4B] rounded-lg w-full"/>
                    </div>
                    <input type="email" placeholder="Email" className="p-3 bg-[#1A2B4B] rounded-lg w-full"/>
                    <textarea placeholder="Message" rows="5" className="p-3 bg-[#1A2B4B] rounded-lg w-full"></textarea>
                    <a href="http://" target="_blank">
                    <button type="submit" className="bg-[#FF6500] hover:bg-[#e95d00] text-white font-bold py-3 px-6 rounded-lg w-full" >Submit
                    </button>
                    </a>
                </form>
            </div>
        </section>
    )
}
