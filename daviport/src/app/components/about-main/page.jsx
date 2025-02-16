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
      className='flex w-screen justify-evenly items-center p-10 bg-[#F4F4F4]'
    >
      <Link className='relative -translate-x-20' href="/">  
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image className='hover:scale-105 transition-transform duration-300' 
                 src="/images/backward.png" alt='Indicador Direito' width={40} height={40} />
        </motion.div>
      </Link>

      <main className='flex flex-col w-1/2 space-y-6 text-justify '>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className='font-aboreto text-[#3A7D44] space-y-2'
        >
          <h1 className='text-5xl'>Davi Souza Braga</h1>
          <h2 className='text-4xl'>Nutrição</h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }} 
          className='font-notoserif text-[#DF6D14]'
        >
          Davi Souza Braga é um estudante dedicado de Nutrição, atualmente no segundo semestre da faculdade. Dedicado por saúde e bem-estar, ele busca aprofundar seus conhecimentos sobre alimentação equilibrada e seus impactos no organismo. Desde o início da graduação, Davi tem se destacado por sua curiosidade e compromisso com a profissão, sempre buscando novas pesquisas e práticas que possam ajudá-lo a se tornar um nutricionista qualificado.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }} 
          className='font-notoserif text-[#DF6D14]'
        >
          “ Cada pessoa tem necessidades únicas, e meu trabalho é criar estratégias nutricionais que se encaixem na sua rotina, tornando a alimentação um aliado no seu bem-estar. Se você busca melhorar sua qualidade de vida, desempenho esportivo ou tem alguma necessidade específica, posso te ajudar com um plano alimentar eficiente e sustentável. Estou sempre atualizado com as melhores práticas e estudos da área para garantir recomendações seguras e eficazes. Se você deseja melhorar sua alimentação sem dietas restritivas e de forma prática, estou pronto para te acompanhar nesse processo. ”
        </motion.p>
      </main>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }} 
        className='mt-5'
      >
        <Image src="/images/nutrition.png" alt='Nutrição' width={280} height={100} />
      </motion.div>

      <Link className='relative translate-x-10' href="/certificacoes">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
        >
          <Image className='hover:scale-105 duration-300'
                 src="/images/forward.png" alt='Indicador Direito' width={40} height={40} />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default Main
