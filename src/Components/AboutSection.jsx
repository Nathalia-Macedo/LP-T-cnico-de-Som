// "use client"

// import { useState, useEffect } from "react"

// const AboutSection = () => {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     const section = document.getElementById("sobre")
//     if (section) {
//       observer.observe(section)
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section)
//       }
//     }
//   }, [])

//   const highlights = [
//     {
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
//           />
//         </svg>
//       ),
//       title: "Shows e Festivais",
//       description: "Experiência em grandes eventos",
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
//           />
//         </svg>
//       ),
//       title: "Mixagem Profissional",
//       description: "Técnicas avançadas de áudio",
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
//           />
//         </svg>
//       ),
//       title: "Áudio de Alta Qualidade",
//       description: "Som cristalino e potente",
//     },
//   ]

//   return (
//     <section
//       id="sobre"
//       className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50"
//     >
//       {/* Elementos decorativos */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Badge */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-8 border border-emerald-200">
//             <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
//             Sobre o Técnico
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Foto do Eduardo - redesenhada para mostrar a imagem completa */}
//           <div
//             className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//           >
//             <div className="relative group">
//               <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-stone-100 p-2 shadow-2xl">
//                 <img
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.02_4e9c5024.jpg-jNkSAHGCGHQhHkFd7lBdFyFaWtjXQ6.jpeg"
//                   alt="Eduardo Souza - Técnico de Som"
//                   className="w-full aspect-[4/5] object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Conteúdo */}
//           <div
//             className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//           >
//             <p className="text-xl text-slate-600 leading-relaxed">
//               Com uma trajetória musical vasta e eclética, trago na bagagem a expertise de ter trabalhado com os mais
//               diversos gêneros, do suingue contagiante do pagode à melodia envolvente do sertanejo, sem deixar de lado o
//               ritmo vibrante do forró. Sou especialista em áudio e mixagem, com um ouvido apurado e uma paixão
//               inigualável por criar experiências sonoras únicas e memoráveis.
//             </p>

//             {/* Cards de destaque redesenhados */}
//             <div className="space-y-4">
//               {highlights.map((highlight, index) => (
//                 <div
//                   key={index}
//                   className={`group relative bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
//                   style={{ transitionDelay: `${600 + index * 150}ms` }}
//                 >
//                   <div className="flex items-center space-x-4">
//                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       {highlight.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-slate-900 text-lg mb-1">{highlight.title}</h3>
//                       <p className="text-slate-600">{highlight.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="pt-8">
//               <a
//                 href="https://wa.me/5511976970388"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-2xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
//               >
//                 <svg
//                   className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
//                 </svg>
//                 Falar no WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AboutSection



"use client"

import { useState, useEffect } from "react"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("sobre")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      title: "Shows e Festivais",
      description: "Experiência em grandes eventos",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      title: "Mixagem Profissional",
      description: "Técnicas avançadas de áudio",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ),
      title: "Áudio de Alta Qualidade",
      description: "Som cristalino e potente",
    },
  ]

  return (
    <section
      id="sobre"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-8 border border-emerald-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            Sobre o Técnico
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Eduardo Souza
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Foto do Eduardo - redesenhada para mostrar a imagem completa */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-stone-100 p-2 shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.02_4e9c5024.jpg-jNkSAHGCGHQhHkFd7lBdFyFaWtjXQ6.jpeg"
                  alt="Eduardo Souza - Técnico de Som"
                  className="w-full aspect-[4/5] object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay com glassmorphism */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-800 font-semibold">Eduardo em ação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-xl text-slate-600 leading-relaxed">
              Com uma trajetória musical vasta e eclética, trago na bagagem a expertise de ter trabalhado com os mais
              diversos gêneros, do suingue contagiante do pagode à melodia envolvente do sertanejo, sem deixar de lado o
              ritmo vibrante do forró. Sou especialista em áudio e mixagem, com um ouvido apurado e uma paixão
              inigualável por criar experiências sonoras únicas e memoráveis.
            </p>

            {/* Cards de destaque redesenhados */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{highlight.title}</h3>
                      <p className="text-slate-600">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-8 flex justify-start md:justify-start">
              <a
                href="https://wa.me/5511976970388"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-2xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-full md:w-auto justify-center md:justify-start"
              >
                <svg
                  className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
