// // "use client"

// // import { useState, useEffect } from "react"

// // const GallerySection = () => {
// //   const [filter, setFilter] = useState("all")
// //   const [selectedMedia, setSelectedMedia] = useState(null)
// //   const [isVisible, setIsVisible] = useState(false)

// //   useEffect(() => {
// //     setIsVisible(true)
// //   }, [])

// //   const galleryItems = [
// //     {
// //       id: 1,
// //       type: "image",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.04_449acbff.jpg-ZDO5DKydMBq4igjGukdK6AZBgpOnKd.jpeg",
// //       alt: "Eduardo operando mesa de som durante show",
// //       category: "trabalho",
// //     },
// //     {
// //       id: 2,
// //       type: "image",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.04_e44ef628.jpg-uoVFk5avoBDtdy6st9mZvgwva9zRvY.jpeg",
// //       alt: "Eduardo com óculos durante evento",
// //       category: "perfil",
// //     },
// //     {
// //       id: 3,
// //       type: "video",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2012.51.01_e70dbce4-DVZOOgrSgKzPDJOt1iys5cv5tzWxag.mp4",
// //       alt: "Vídeo do evento em ação",
// //       category: "eventos",
// //     },
// //     {
// //       id: 4,
// //       type: "video",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.30_93c05a82-YZjIocPKKWDNiPezuitWxOqmSra8HY.mp4",
// //       alt: "Vídeo do show ao vivo",
// //       category: "eventos",
// //     },
// //     {
// //       id: 5,
// //       type: "image",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.03_eafe4f42.jpg-vn3d8QrXGKu3k7ekiIYwOkf9BcVU6N.jpeg",
// //       alt: "Vista da mesa de som durante grande evento",
// //       category: "trabalho",
// //     },
// //     {
// //       id: 6,
// //       type: "video",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.31_3c24b97b-SBjzsM5QsyWmLv7cZMyM8t43kQR0Gj.mp4",
// //       alt: "Momento do show com público",
// //       category: "eventos",
// //     },
// //     {
// //       id: 7,
// //       type: "video",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.31_35081426-ilFRGeG9FeiejLPUZLUp6p0WDIT39M.mp4",
// //       alt: "Performance ao vivo",
// //       category: "eventos",
// //     },
// //     {
// //       id: 8,
// //       type: "image",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.04_924cb934.jpg-7RBYIr2I6NUyO1bSoKtJ4GjzX9dbM7.jpeg",
// //       alt: "Eduardo no Suzano Fest",
// //       category: "trabalho",
// //     },
// //     {
// //       id: 9,
// //       type: "image",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J6NLsBSivDQPV8GlXBvUHX2081rO74.png",
// //       alt: "Banda Timbalaie no palco",
// //       category: "bandas",
// //     },
// //     {
// //       id: 10,
// //       type: "image",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.03_99b54b04.jpg-Si3njzPgL9SWaPwagpewDnLr4W9H2b.jpeg",
// //       alt: "Eduardo sorrindo com equipamentos",
// //       category: "perfil",
// //     },
// //     {
// //       id: 11,
// //       type: "video",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.31_782e9cb8-qhV62lWgqBt0udDGkovK3tuopjjJ09.mp4",
// //       alt: "Bastidores do evento musical",
// //       category: "eventos",
// //     },
// //     {
// //       id: 12,
// //       type: "video",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2013.07.17_9d346a0e-qyNwFgplmSP5hOh8ZIY4Rvn8x71Dhd.mp4",
// //       alt: "Show ao vivo com iluminação profissional",
// //       category: "eventos",
// //     },
// //     {
// //       id: 13,
// //       type: "video",
// //       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2012.51.01_041da95a-aB3Q5KQcxANHrByehKw8YdDOvhr6w6.mp4",
// //       alt: "Momento especial durante apresentação",
// //       category: "eventos",
// //     },
// //   ]

// //   const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

// //   const filterButtons = [
// //     { key: "all", label: "Todos", icon: "🎵" },
// //     { key: "trabalho", label: "Trabalho", icon: "🎚️" },
// //     { key: "eventos", label: "Eventos", icon: "🎪" },
// //     { key: "bandas", label: "Bandas", icon: "🎸" },
// //     { key: "perfil", label: "Perfil", icon: "👨‍💼" },
// //   ]

// //   const openLightbox = (item) => {
// //     setSelectedMedia(item)
// //   }

// //   const closeLightbox = () => {
// //     setSelectedMedia(null)
// //   }

// //   return (
// //     <section
// //       id="galeria"
// //       className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
// //     >
// //       {/* Background Elements */}
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />

// //       <div className="container mx-auto px-4 relative z-10">
// //         {/* Header */}
// //         <div
// //           className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
// //         >
// //           <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
// //             <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
// //             Galeria de Momentos
// //           </div>
// //           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
// //             Experiências
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 ml-3">
// //               Visuais
// //             </span>
// //           </h2>
// //           <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
// //             Uma coleção dos melhores momentos, eventos e bastidores do trabalho profissional
// //           </p>
// //         </div>

// //         {/* Filter Buttons */}
// //         <div
// //           className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
// //         >
// //           {filterButtons.map((btn) => (
// //             <button
// //               key={btn.key}
// //               onClick={() => setFilter(btn.key)}
// //               className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
// //                 filter === btn.key
// //                   ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
// //                   : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200"
// //               }`}
// //             >
// //               <span className="flex items-center gap-2">
// //                 <span className="text-lg">{btn.icon}</span>
// //                 {btn.label}
// //               </span>
// //               {filter === btn.key && (
// //                 <div className="absolute inset-0 bg-emerald-600 rounded-full animate-pulse opacity-20"></div>
// //               )}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Gallery Grid */}
// //         <div
// //           className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
// //         >
// //           {filteredItems.map((item, index) => (
// //             <div
// //               key={item.id}
// //               className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
// //               style={{
// //                 animationDelay: `${index * 100}ms`,
// //               }}
// //               onClick={() => openLightbox(item)}
// //             >
// //               <div className="aspect-square overflow-hidden">
// //                 {item.type === "image" ? (
// //                   <img
// //                     src={item.src || "/placeholder.svg"}
// //                     alt={item.alt}
// //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                   />
// //                 ) : (
// //                   <div className="relative w-full h-full">
// //                     <video
// //                       src={item.src}
// //                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                       muted
// //                       loop
// //                       onMouseEnter={(e) => e.target.play()}
// //                       onMouseLeave={(e) => e.target.pause()}
// //                     />
// //                     <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                       <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
// //                         <svg className="w-6 h-6 text-slate-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
// //                           <path d="M8 5v14l11-7z" />
// //                         </svg>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 <div className="absolute bottom-4 left-4 right-4">
// //                   <p className="text-white text-sm font-medium truncate">{item.alt}</p>
// //                   <div className="flex items-center gap-2 mt-1">
// //                     <span className="text-xs text-white/80 capitalize">{item.category}</span>
// //                     <span className="w-1 h-1 bg-white/60 rounded-full"></span>
// //                     <span className="text-xs text-white/80">{item.type === "video" ? "Vídeo" : "Foto"}</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Glass Effect Border */}
// //               <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-emerald-400/50 transition-colors duration-300"></div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Lightbox */}
// //         {selectedMedia && (
// //           <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
// //             <button
// //               onClick={closeLightbox}
// //               className="fixed top-6 left-6 bg-black/70 backdrop-blur-sm hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 z-[10000] border border-white/30 shadow-2xl"
// //             >
// //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             </button>

// //             <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col pt-4">
// //               <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 flex flex-col max-h-full">
// //                 <div className="flex-1 flex items-center justify-center p-6">
// //                   {selectedMedia.type === "image" ? (
// //                     <img
// //                       src={selectedMedia.src || "/placeholder.svg"}
// //                       alt={selectedMedia.alt}
// //                       className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
// //                     />
// //                   ) : (
// //                     <video
// //                       src={selectedMedia.src}
// //                       controls
// //                       autoPlay
// //                       className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
// //                       style={{ width: "auto", height: "auto" }}
// //                     />
// //                   )}
// //                 </div>

// //                 <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10 flex-shrink-0">
// //                   <h3 className="text-white text-xl font-semibold mb-2 truncate">{selectedMedia.alt}</h3>
// //                   <div className="flex items-center gap-3 text-white/80 text-sm">
// //                     <span className="capitalize bg-white/10 px-3 py-1 rounded-full">{selectedMedia.category}</span>
// //                     <span className="w-1 h-1 bg-white/60 rounded-full"></span>
// //                     <span className="bg-white/10 px-3 py-1 rounded-full">
// //                       {selectedMedia.type === "video" ? "Vídeo" : "Fotografia"}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="absolute inset-0 -z-10 cursor-pointer" onClick={closeLightbox}></div>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   )
// // }

// // export default GallerySection




// "use client"

// import { useState, useEffect } from "react"

// const GallerySection = () => {
//   const [filter, setFilter] = useState("all")
//   const [selectedMedia, setSelectedMedia] = useState(null)
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const galleryItems = [
//     {
//       id: 1,
//       type: "image",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.04_449acbff.jpg-ZDO5DKydMBq4igjGukdK6AZBgpOnKd.jpeg",
//       alt: "Eduardo operando mesa de som durante show",
//       category: "trabalho",
//     },
//     {
//       id: 2,
//       type: "image",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.04_e44ef628.jpg-uoVFk5avoBDtdy6st9mZvgwva9zRvY.jpeg",
//       alt: "Eduardo com óculos durante evento",
//       category: "perfil",
//     },
//     {
//       id: 3,
//       type: "video",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2012.51.01_e70dbce4-DVZOOgrSgKzPDJOt1iys5cv5tzWxag.mp4",
//       alt: "Vídeo do evento em ação",
//       category: "eventos",
//     },
//     {
//       id: 4,
//       type: "video",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.30_93c05a82-YZjIocPKKWDNiPezuitWxOqmSra8HY.mp4",
//       alt: "Vídeo do show ao vivo",
//       category: "eventos",
//     },
//     {
//       id: 5,
//       type: "image",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.03_eafe4f42.jpg-vn3d8QrXGKu3k7ekiIYwOkf9BcVU6N.jpeg",
//       alt: "Vista da mesa de som durante grande evento",
//       category: "trabalho",
//     },
//     {
//       id: 6,
//       type: "video",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.31_3c24b97b-SBjzsM5QsyWmLv7cZMyM8t43kQR0Gj.mp4",
//       alt: "Momento do show com público",
//       category: "eventos",
//     },
//     {
//       id: 7,
//       type: "video",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.31_35081426-ilFRGeG9FeiejLPUZLUp6p0WDIT39M.mp4",
//       alt: "Performance ao vivo",
//       category: "eventos",
//     },
//     {
//       id: 8,
//       type: "image",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.04_924cb934.jpg-7RBYIr2I6NUyO1bSoKtJ4GjzX9dbM7.jpeg",
//       alt: "Eduardo no Suzano Fest",
//       category: "trabalho",
//     },
//     {
//       id: 9,
//       type: "image",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J6NLsBSivDQPV8GlXBvUHX2081rO74.png",
//       alt: "Banda Timbalaie no palco",
//       category: "bandas",
//     },
//     {
//       id: 10,
//       type: "image",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.03_99b54b04.jpg-Si3njzPgL9SWaPwagpewDnLr4W9H2b.jpeg",
//       alt: "Eduardo sorrindo com equipamentos",
//       category: "perfil",
//     },
//     {
//       id: 11,
//       type: "video",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.31_782e9cb8-qhV62lWgqBt0udDGkovK3tuopjjJ09.mp4",
//       alt: "Bastidores do evento musical",
//       category: "eventos",
//     },
//     {
//       id: 12,
//       type: "video",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2013.07.17_9d346a0e-qyNwFgplmSP5hOh8ZIY4Rvn8x71Dhd.mp4",
//       alt: "Show ao vivo com iluminação profissional",
//       category: "eventos",
//     },
//     {
//       id: 13,
//       type: "video",
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2012.51.01_041da95a-aB3Q5KQcxANHrByehKw8YdDOvhr6w6.mp4",
//       alt: "Momento especial durante apresentação",
//       category: "eventos",
//     },
//   ]

//   const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

//   const filterButtons = [
//     { key: "all", label: "Todos", icon: "🎵" },
//     { key: "trabalho", label: "Trabalho", icon: "🎚️" },
//     { key: "eventos", label: "Eventos", icon: "🎪" },
//     { key: "bandas", label: "Bandas", icon: "🎸" },
//     { key: "perfil", label: "Perfil", icon: "👨‍💼" },
//   ]

//   const openLightbox = (item) => {
//     setSelectedMedia(item)
//   }

//   const closeLightbox = () => {
//     setSelectedMedia(null)
//   }

//   return (
//     <section
//       id="galeria"
//       className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div
//           className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//         >
//           <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
//             Galeria de Momentos
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             Experiências
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 ml-3">
//               Visuais
//             </span>
//           </h2>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Uma coleção dos melhores momentos, eventos e bastidores do trabalho profissional
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div
//           className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//         >
//           {filterButtons.map((btn) => (
//             <button
//               key={btn.key}
//               onClick={() => setFilter(btn.key)}
//               className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                 filter === btn.key
//                   ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
//                   : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200"
//               }`}
//             >
//               <span className="flex items-center gap-2">
//                 <span className="text-lg">{btn.icon}</span>
//                 {btn.label}
//               </span>
//               {filter === btn.key && (
//                 <div className="absolute inset-0 bg-emerald-600 rounded-full animate-pulse opacity-20"></div>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <div
//           className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//         >
//           {filteredItems.map((item, index) => (
//             <div
//               key={item.id}
//               className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
//               style={{
//                 animationDelay: `${index * 100}ms`,
//               }}
//               onClick={() => openLightbox(item)}
//             >
//               <div className="aspect-square overflow-hidden">
//                 {item.type === "image" ? (
//                   <img
//                     src={item.src || "/placeholder.svg"}
//                     alt={item.alt}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                 ) : (
//                   <div className="relative w-full h-full">
//                     <video
//                       src={item.src}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       muted
//                       loop
//                       onMouseEnter={(e) => e.target.play()}
//                       onMouseLeave={(e) => e.target.pause()}
//                     />
//                     <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
//                         <svg className="w-6 h-6 text-slate-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M8 5v14l11-7z" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <p className="text-white text-sm font-medium truncate">{item.alt}</p>
//                   <div className="flex items-center gap-2 mt-1">
//                     <span className="text-xs text-white/80 capitalize">{item.category}</span>
//                     <span className="w-1 h-1 bg-white/60 rounded-full"></span>
//                     <span className="text-xs text-white/80">{item.type === "video" ? "Vídeo" : "Foto"}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Glass Effect Border */}
//               <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-emerald-400/50 transition-colors duration-300"></div>
//             </div>
//           ))}
//         </div>

//         {/* Lightbox */}
//         {selectedMedia && (
//           <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 animate-in fade-in duration-300">
//             <button
//               onClick={closeLightbox}
//               className="fixed top-4 left-4 md:top-6 md:left-6 bg-black/80 backdrop-blur-md hover:bg-black/90 text-white p-3 md:p-4 rounded-full transition-all duration-200 z-[100000] border-2 border-white/60 shadow-2xl hover:scale-110 active:scale-95 hover:border-white/80"
//               style={{ WebkitTapHighlightColor: "transparent" }}
//             >
//               <svg
//                 className="w-6 h-6 md:w-7 md:h-7"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth={3}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col pt-4">
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 flex flex-col max-h-full">
//                 <div className="flex-1 flex items-center justify-center p-6">
//                   {selectedMedia.type === "image" ? (
//                     <img
//                       src={selectedMedia.src || "/placeholder.svg"}
//                       alt={selectedMedia.alt}
//                       className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
//                     />
//                   ) : (
//                     <video
//                       src={selectedMedia.src}
//                       controls
//                       autoPlay
//                       className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
//                       style={{ width: "auto", height: "auto" }}
//                     />
//                   )}
//                 </div>

//                 <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10 flex-shrink-0">
//                   <h3 className="text-white text-xl font-semibold mb-2 truncate">{selectedMedia.alt}</h3>
//                   <div className="flex items-center gap-3 text-white/80 text-sm">
//                     <span className="capitalize bg-white/10 px-3 py-1 rounded-full">{selectedMedia.category}</span>
//                     <span className="w-1 h-1 bg-white/60 rounded-full"></span>
//                     <span className="bg-white/10 px-3 py-1 rounded-full">
//                       {selectedMedia.type === "video" ? "Vídeo" : "Fotografia"}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute inset-0 -z-10 cursor-pointer" onClick={closeLightbox}></div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default GallerySection
"use client"

import { useState, useEffect } from "react"

const GallerySection = () => {
  const [filter, setFilter] = useState("all")
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.04_449acbff.jpg-ZDO5DKydMBq4igjGukdK6AZBgpOnKd.jpeg",
      alt: "Eduardo operando mesa de som durante show",
      category: "trabalho",
    },
    {
      id: 2,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.04_e44ef628.jpg-uoVFk5avoBDtdy6st9mZvgwva9zRvY.jpeg",
      alt: "Eduardo com óculos durante evento",
      category: "perfil",
    },
    {
      id: 3,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2012.51.01_e70dbce4-DVZOOgrSgKzPDJOt1iys5cv5tzWxag.mp4",
      alt: "Vídeo do evento em ação",
      category: "eventos",
    },
    {
      id: 4,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.30_93c05a82-YZjIocPKKWDNiPezuitWxOqmSra8HY.mp4",
      alt: "Vídeo do show ao vivo",
      category: "eventos",
    },
    {
      id: 5,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.03_eafe4f42.jpg-vn3d8QrXGKu3k7ekiIYwOkf9BcVU6N.jpeg",
      alt: "Vista da mesa de som durante grande evento",
      category: "trabalho",
    },
    {
      id: 6,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.31_3c24b97b-SBjzsM5QsyWmLv7cZMyM8t43kQR0Gj.mp4",
      alt: "Momento do show com público",
      category: "eventos",
    },
    {
      id: 7,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.31_35081426-ilFRGeG9FeiejLPUZLUp6p0WDIT39M.mp4",
      alt: "Performance ao vivo",
      category: "eventos",
    },
    {
      id: 8,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.04_924cb934.jpg-7RBYIr2I6NUyO1bSoKtJ4GjzX9dbM7.jpeg",
      alt: "Eduardo no Suzano Fest",
      category: "trabalho",
    },
    {
      id: 9,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J6NLsBSivDQPV8GlXBvUHX2081rO74.png",
      alt: "Banda Timbalaie no palco",
      category: "bandas",
    },
    {
      id: 10,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.03_99b54b04.jpg-Si3njzPgL9SWaPwagpewDnLr4W9H2b.jpeg",
      alt: "Eduardo sorrindo com equipamentos",
      category: "perfil",
    },
    {
      id: 11,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-11%20%C3%A0%28s%29%2014.44.31_782e9cb8-qhV62lWgqBt0udDGkovK3tuopjjJ09.mp4",
      alt: "Bastidores do evento musical",
      category: "eventos",
    },
    {
      id: 12,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2013.07.17_9d346a0e-qyNwFgplmSP5hOh8ZIY4Rvn8x71Dhd.mp4",
      alt: "Show ao vivo com iluminação profissional",
      category: "eventos",
    },
    {
      id: 13,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V%C3%ADdeo%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2012.51.01_041da95a-aB3Q5KQcxANHrByehKw8YdDOvhr6w6.mp4",
      alt: "Momento especial durante apresentação",
      category: "eventos",
    },
  ]

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  const filterButtons = [
    { key: "all", label: "Todos", icon: "🎵" },
    { key: "trabalho", label: "Trabalho", icon: "🎚️" },
    { key: "eventos", label: "Eventos", icon: "🎪" },
    { key: "bandas", label: "Bandas", icon: "🎸" },
    { key: "perfil", label: "Perfil", icon: "👨‍💼" },
  ]

  const openLightbox = (item) => {
    setSelectedMedia(item)
  }

  const closeLightbox = () => {
    setSelectedMedia(null)
  }

  return (
    <section
      id="galeria"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Galeria de Momentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Experiências
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 ml-3">
              Visuais
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Uma coleção dos melhores momentos, eventos e bastidores do trabalho profissional
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === btn.key
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                  : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{btn.icon}</span>
                {btn.label}
              </span>
              {filter === btn.key && (
                <div className="absolute inset-0 bg-emerald-600 rounded-full animate-pulse opacity-20"></div>
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => openLightbox(item)}
            >
              <div className="aspect-square overflow-hidden">
                {item.type === "image" ? (
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      muted
                      loop
                      preload="metadata"
                      playsInline
                      onMouseEnter={(e) => {
                        e.target.currentTime = 0
                        e.target.play()
                      }}
                      onMouseLeave={(e) => {
                        e.target.pause()
                        e.target.currentTime = 0
                      }}
                      onLoadedMetadata={(e) => {
                        // Garante que o primeiro frame seja mostrado
                        e.target.currentTime = 0.1
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-slate-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium truncate">{item.alt}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-white/80 capitalize">{item.category}</span>
                    <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                    <span className="text-xs text-white/80">{item.type === "video" ? "Vídeo" : "Foto"}</span>
                  </div>
                </div>
              </div>

              {/* Glass Effect Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-emerald-400/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 animate-in fade-in duration-300">
            <button
              onClick={closeLightbox}
              className="fixed top-4 left-4 md:top-6 md:left-6 bg-black/80 backdrop-blur-md hover:bg-black/90 text-white p-3 md:p-4 rounded-full transition-all duration-200 z-[100000] border-2 border-white/60 shadow-2xl hover:scale-110 active:scale-95 hover:border-white/80"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col pt-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 flex flex-col max-h-full">
                <div className="flex-1 flex items-center justify-center p-6">
                  {selectedMedia.type === "image" ? (
                    <img
                      src={selectedMedia.src || "/placeholder.svg"}
                      alt={selectedMedia.alt}
                      className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
                    />
                  ) : (
                    <video
                      src={selectedMedia.src}
                      controls
                      autoPlay
                      className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
                      style={{ width: "auto", height: "auto" }}
                    />
                  )}
                </div>

                <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10 flex-shrink-0">
                  <h3 className="text-white text-xl font-semibold mb-2 truncate">{selectedMedia.alt}</h3>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="capitalize bg-white/10 px-3 py-1 rounded-full">{selectedMedia.category}</span>
                    <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      {selectedMedia.type === "video" ? "Vídeo" : "Fotografia"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 -z-10 cursor-pointer" onClick={closeLightbox}></div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GallerySection
