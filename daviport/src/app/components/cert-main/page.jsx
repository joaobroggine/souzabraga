"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const certificados = Array.from({ length: 8 }, (_, i) => `/images/certificado${i + 1}.png`)

const Main = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col justify-center items-center px-3 py-6 md:px-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Meus Certificados
      </h1>
      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-5xl">
        {certificados.map((src, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              className="object-cover hover:scale-105 transition-transform duration-300"
              src={src}
              alt={`Certificado ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        ))}
      </main>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[85vw] h-[85vh] max-w-3xl">
            <Image
              src={selectedImage}
              alt="Certificado Expandido"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-3 right-3 text-white text-2xl font-bold cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <section className="mt-8 text-center">
        <p className="text-gray-600 text-base">
          Clique em qualquer certificado para visualizar em tela cheia.
        </p>
      </section>
    </div>
  )
}

export default Main
