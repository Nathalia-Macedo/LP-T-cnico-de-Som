import Header from "../Components/Header"
import HeroSection from "../Components/HeroSection"
import AboutSection from "../Components/AboutSection"
import PortfolioSection from "../Components/PortfolioSection"
import GallerySection from "../Components/GallerySection"
import CTASection from "../Components/CTASection"
import Footer from "../Components/Footer"
const App = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection/>
      <GallerySection/>
      <CTASection/>
      <Footer/>

    </div>
  )
}

export default App
