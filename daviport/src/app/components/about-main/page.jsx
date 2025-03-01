"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const motion = require('./motionComponent');

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: 'easeOut' }}
      className='flex flex-col sm:flex-row w-screen sm:h-1/2 min-h-screen justify-between items-center p-6 custom:p-0 md:p-0  bg-[#F4F4F4]'
    >
      <Link className='mb-3 sm:mb-0 sm:mr-5 self-start sm:self-center' href="/">  
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image 
            className='hover:scale-105 transition-transform duration-300 w-10 h-10 sm:w-14 sm:h-14 custom:w-10 custom:h-10 md:ml-5 md:w-10 md:h-10' 
            src="/images/backward.png" 
            alt='Indicador Esquerdo' 
            width={40} 
            height={40} 
          />
        </motion.div>
      </Link>
      <main className='flex flex-col justify-center sm:w-2/3 custom:w-full custom:justify-center custom:flex md:w-1/2 md:pr-5 md:pl-5 w-full space-y-6'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className='font-aboreto text-[#3A7D44] space-y-1 md:space-y-2 w-full'
        >
          <h1 className='text-3xl sm:text-4xl md:text-5xl'>Davi Souza Braga</h1>
          <h2 className='text-xl sm:text-2xl md:text-3xl'>Nutrição</h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }} 
          className='font-notoserif text-[#DF6D14] text-justify text-sm sm:text-base custom:w-full md:text-md md:w-full leading-relaxed sm:w-11/12'
        >
          Davi Souza Braga é um estudante dedicado de Nutrição, atualmente no segundo semestre da faculdade. Dedicado por saúde e bem-estar, ele busca aprofundar seus conhecimentos sobre alimentação equilibrada e seus impactos no organismo. Desde o início da graduação, Davi tem se destacado por sua curiosidade e compromisso com a profissão, sempre buscando novas pesquisas e práticas que possam ajudá-lo a se tornar um nutricionista qualificado.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }} 
          className='w-full justify-center hidden custom:flex'
        >
          <Image 
            className='h-auto' 
            src="/images/image.png" 
            alt='Frutas e Vegetais' 
            width={580} 
            height={100} 
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }} 
          className='w-full flex justify-center sm:hidden'
        >
          <Image 
            className='w-full max-w-xs h-auto' 
            src="/images/vegetables.jpg" 
            alt='Vegetais' 
            width={280} 
            height={100} 
          />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }} 
          className='font-notoserif text-[#DF6D14] text-justify text-sm sm:text-base md:text-md custom:w-full md:w-full leading-relaxed sm:w-11/12'
        >
          “ Cada pessoa tem necessidades únicas, e meu trabalho é criar estratégias nutricionais que se encaixem na sua rotina, tornando a alimentação um aliado no seu bem-estar. Se você busca melhorar sua qualidade de vida, desempenho esportivo ou tem alguma necessidade específica, posso te ajudar com um plano alimentar eficiente e sustentável. Estou sempre atualizado com as melhores práticas e estudos da área para garantir recomendações seguras e eficazes. Se você deseja melhorar sua alimentação sem dietas restritivas e de forma prática, estou pronto para te acompanhar nesse processo. ”
        </motion.p>
      </main>
      <div className='hidden custom:hidden sm:flex sm:w-1/3 md:w-1/3 justify-center items-center'>
        <Image 
          className='h-auto max-h-[50%]' 
          src="/images/nutrition.png" 
          alt='Nutrição' 
          width={300} 
          height={150} 
        />
      </div>
      <Link className='mt-3 sm:mt-0 sm:ml-5 self-end sm:self-center' href="/certificacoes">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
        >
          <Image 
            className='hover:scale-105 transition-transform duration-300 w-10 h-10 sm:w-14 sm:h-14 custom:w-10 custom:h-10 md:mr-5 md:w-10 md:h-10'
            src="/images/forward.png" 
            alt='Indicador Direito' 
            width={40} 
            height={40} 
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default Main
