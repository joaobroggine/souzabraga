import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

const Main = () => {
  return (
    <>
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className='h-screen bg-[#F4F4F4]'
    >
      <main className='h-screen flex flex-col justify-center items-center pb-7'>
        
        {/* Imagem com animação */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Image 
            className='border-b border-[#3A7D44] pb-3' 
            src="/images/souzabraga.jfif" 
            alt='Davi Souza Braga' 
            width={370} 
            height={370}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }} 
          className='pr-5 pt-4 text-center'
        >
          <h1 className='font-aboreto text-2xl text-[#3A7D44]'>Davi Souza Braga, 18 anos</h1>
          <h2 className='font-aboreto text-xl text-[#3A7D44]'>Nutricionista</h2>
          <ul className='font-notoserif text-xs text-[#3A7D44] pt-4'>
            <li>UniFECAF</li>
            <li>Estudante de Nutrição</li>
            <li>Ex-Professor</li>
            <li>Jovem Prodígio</li>
          </ul>
        </motion.div>

        {/* Botões com animação */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className='flex justify-center mt-4 space-x-5 w-full'
        >
          <button className='border border-[#087bb9] rounded-md hover:shadow-lg hover:scale-110 duration-500
            p-2 h-10 w-40 font-thin text-xl 
            flex justify-center items-center'>
            <Image className='mr-3' src="/images/linkedin.png" alt='Linkedin' width={25} height={30}/> 
            LinkedIn
          </button>
          <button className='border border-[#ec4b3a] rounded-md hover:shadow-lg hover:scale-110 duration-500
            p-2 h-10 w-40 font-thin text-xl
            flex justify-center items-center'>
            <Image className='mr-5' src="/images/gmail.png" alt='Gmail' width={28} height={30}/> 
            Gmail
          </button>
        </motion.div>
      </main>
    </motion.div>
    </>
  )
}

export default Main
