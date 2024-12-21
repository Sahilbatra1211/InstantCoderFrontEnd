import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At Instant Coder, our mission is simple: to help coders overcome roadblocks quickly and efficiently. Whether you’re stuck on a challenging problem or need guidance to move forward, we’ve got your back.</p>
          <p>We connect you with experienced coders from top companies, including FAANG, who are ready to assist you in real-time. Need help right now? You can schedule a video call, chat, or even a WhatsApp call with one of our expert coders and get your questions answered instantly. For quick queries, just text us your question, and we’ll provide a tailored solution in no time.</p>
          <p>Our platform is designed for speed, reliability, and quality, ensuring you can unblock yourself without delay and continue working on what matters most.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We aim to bridge the gap between aspiring coders and seasoned experts from top-tier companies. By fostering this connection, we empower new coders to learn, grow, and achieve their goals. Our vision is to provide mentorship, guidance, and instant support to coders everywhere—so no one has to stay stuck.</p>
          <p>With Instant Coder, you’re never alone in your coding journey.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>INSTANT HELP:</b>
        <p>Get quick solutions to your coding challenges with just a message or call.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>ACCESS TO EXPERTS:</b>
        <p>Connect with experienced coders from top companies like FAANG instantly.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>FLEXIBLE SUPPORT:</b>
        <p>Schedule video calls, chats, or WhatsApp sessions based on your needs.</p>
      </div>
      </div>

    </div>
  )
}

export default About
