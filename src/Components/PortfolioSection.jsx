"use client"

import { useState } from "react"

const portfolioData = {
  eventos: [
    {
      id: 1,
      title: "Suzano Fest",
      category: "Festival",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiUXJJoMlrFmStpkzjOXQAXHK5A6YXwF3aQ&s",
      description: "Grande festival de música em Suzano",
    },
    {
      id: 2,
      title: "Virada Cultural São Paulo",
      category: "Evento Cultural",
      image: "https://abcdoabc.com.br/wp-content/uploads/virada-cultural-sp_c1ee8ddf.jpg",
      description: "Maior evento cultural da cidade de São Paulo",
    },
    {
      id: 3,
      title: "Festival Nata Forrozeira",
      category: "Festival",
      image: "https://cdn.articket.com.br/user_content/event_images/event_image-65778fbb83fc08804ce3ea7899aa6bdb.webp",
      description: "Festival dedicado ao forró e cultura nordestina",
    },
    {
      id: 4,
      title: "Show da Virada São Bernardo do Campo 2025",
      category: "Show",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpI_eirAXuQsUuxLJFUEzGk4iSCnB6ESdAg&s",
      description: "Celebração de ano novo em São Bernardo do Campo",
    },
  ],
  bandas: [
    {
      id: 5,
      title: "Timbalaie",
      category: "Axé",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZaubHd-MZ5j3kiL1bsuL4Wr1fI0WMfB4otg&s",
      description: "Banda de axé com energia contagiante",
    },
    {
      id: 6,
      title: "Banda Djavu",
      category: "Tecnomelody",
      image: "https://resources.tidal.com/images/52dd70a5/45ea/47b9/9a76/3ed96b813c95/640x640.jpg",
      description: "Especialistas em tecnomelody paraense",
    },
    {
      id: 7,
      title: "Bonde do Forró",
      category: "Forró",
      image: "https://images.seeklogo.com/logo-png/55/1/bonde-do-forro-logo-png_seeklogo-555199.png",
      description: "Autêntico forró pé de serra",
    },
    {
      id: 8,
      title: "Maicy e Lyan",
      category: "Sertanejo",
      image: "https://i.scdn.co/image/ab67616d0000b273277361049da1046d51a15c59",
      description: "Dupla sertaneja com sucessos nacionais",
    },
  ],
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("todos")
  const [hoveredCard, setHoveredCard] = useState(null)

  const allItems = [...portfolioData.eventos, ...portfolioData.bandas]

  const filteredItems =
    activeFilter === "todos" ? allItems : activeFilter === "eventos" ? portfolioData.eventos : portfolioData.bandas

  const filters = [
    { id: "todos", label: "Todos os Trabalhos", count: allItems.length },
    { id: "eventos", label: "Eventos & Festivais", count: portfolioData.eventos.length },
    { id: "bandas", label: "Bandas", count: portfolioData.bandas.length },
  ]

  return (
    <section  id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Portfólio Profissional
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Eventos & <span className="text-emerald-600">Bandas</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos principais eventos e bandas onde aplico minha expertise em áudio profissional, garantindo
            experiências sonoras memoráveis
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                  : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {filter.label}
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === filter.id
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600"
                  }`}
                >
                  {filter.count}
                </span>
              </span>

              {activeFilter === filter.id && (
                <div className="absolute inset-0 bg-emerald-600 rounded-full animate-pulse opacity-20" />
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Animated Border */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-emerald-400 opacity-0 transition-opacity duration-300 ${
                  hoveredCard === item.id ? "opacity-100" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 shadow-2xl shadow-emerald-600/25">
            <h3 className="text-2xl font-bold text-white mb-4">Pronto para seu próximo evento?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Entre em contato e vamos criar uma experiência sonora inesquecível para seu público
            </p>
            <a
              href="https://wa.me/5511976970388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
