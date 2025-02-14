"use client"

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
const motion = require('./motionComponent');

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: 'easeOut' }}
      className='h-screen bg-[#F4F4F4] flex items-center justify-center'
    >
      <main className='w-full max-w-md p-6 bg-white shadow-[rgba(0,0,0,0.2)_-18px_20px_0px_-5px] flex flex-col items-center hover:scale-105 duration-500'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <Image 
            className='shadow-lg' 
            src='/images/souzabraga.jfif' 
            alt='Davi Souza Braga' 
            width={300} 
            height={150}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }} 
          className='border-t border-[#3A7D44] pt-3 text-center mt-4'
        >
          <h1 className='text-2xl font-aboreto text-[#3A7D44]'>Davi Souza Braga, 18 anos</h1>
          <h2 className='text-lg font-aboreto text-[#3A7D44]'>Nutricionista</h2>
          <ul className='text-sm text-[#3A7D44] mt-3 space-y-1'>
            <li>🎓 UniFECAF</li>
            <li>📚 Estudante de Nutrição</li>
            <li>🧑‍🏫 Ex-Professor</li>
            <li>🌟 Jovem Prodígio</li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
          className='flex justify-center mt-6 space-x-4'
        >
          <motion.a 
             href='https://www.linkedin.com/in/davi-souza-braga-395674302/'
             target='_blank' 
            whileHover={{  boxShadow: '0px 8px 15px rgba(0, 123, 185, 0.3)' }}
            className='flex items-center px-4 py-2 border border-[#087bb9] text-[#087bb9] font-medium shadow-sm transition-all duration-300'
          >
            <Image src='/images/linkedin.png' alt='LinkedIn' width={20} height={20} className='mr-2'/> 
            LinkedIn
          </motion.a>

          <motion.a 
            href='https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRmTpLFjQnxDrNBcXGFbLjLZqBFBfZKxLzcCvLmwJFblRRvgZMLkXdqbqRdLtfFgmhSFZBG'
            target='_blank' 
            whileHover={{  boxShadow: '0px 8px 15px rgba(236, 75, 58, 0.3)' }}
            className='flex items-center px-4 py-2 border border-[#ec4b3a] text-[#ec4b3a] font-medium shadow-sm transition-all duration-300'
          >
            <Image src='/images/gmail.png' alt='Gmail' width={22} height={22} className='mr-2'/> 
            Gmail
          </motion.a>
        </motion.div>
      </main>
      <Link href="/about">
        <Image className='relative translate-x-96 hover:scale-105 duration-300'
        src="/images/forward.png" alt='Indicador Direito' width={40} height={40} />
      </Link>
    </motion.div>
  )
}

export default Main
