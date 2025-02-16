import Image from 'next/image'
import React from 'react'

const certificados = Array.from({ length: 8 }, (_, i) => `/images/certificado${i + 1}.png`)

const Main = () => {
  return (
    <div className='h-screen'>
      <main className='flex h-full justify-center items-center' data>
        {certificados.map((src, index) =>(
            <Image className='w-full'
            key={index} src={`/images/certificado${index + 1}.png`} alt='Certificado' width={100} height={100}/>
        ))}
      </main>
      <section>

      </section>
    </div>
  )
}

export default Main
