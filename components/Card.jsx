import React from 'react'

export default function Card({ imgs, title, description, link }) {
    return (
        <div className="w-100 h-[400px] bg-[#0B192C] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 flex flex-col justify-between hover:scale-105">
            <img src={imgs} className="w-full h-50 object-cover" />

            <div className="p-5 text-center flex flex-col flex-grow justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-[#FF6500] mb-2">{title}</h2>
                    <p className="text-white text-sm">{description}</p>
                </div>
                <a href={link} target='blank'>
                    <button className="bg-[#FF6500] text-white rounded-xl p-2 hover:scale-105 transition w-full mt-4 ">
                        Visit Website
                    </button>
                </a>

            </div>
        </div>
    )
}
