"use client"

import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-gray-900/50 h-full pb-20">
      <div className="bg-gradient-to-b from-black via-gray-900 to-blue-950 h-96 relative">
        <div className="absolute inset-0  bg-[size:60px]" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 -mt-72">
        <BackgroundGradient className="rounded-[22px] p-2 ">
          <div className="bg-black/90 backdrop-blur-3xl w-full shadow-2xl rounded-2xl p-8 sm:p-12">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-center mb-8">I&apos;d love to hear from you. Send me a message!</p>
            <form action="" method="post">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-200 mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Rohit"
                    className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-200 mb-2">Phone</label>
                  <input 
                    type="tel"
                    placeholder="+918953014140" 
                    className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <label className="font-medium text-gray-200 mb-2">Email address</label>
                <input 
                  type="email"
                  placeholder="rc3881425@gmail.com"
                  className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <div className="flex flex-col mt-6">
                <label className="font-medium text-gray-200 mb-2">Message</label>
                <textarea 
                  placeholder="Your message here..."
                  rows={5}
                  className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-center mt-8">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  )
}

export default Contact