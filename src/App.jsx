import './App.css'
import Navbar from './components/general/navbar/Navbar'
import Header from './components/landing/header/Header'
import InfoAbadie from './components/landing/info_abadie/InfoAbadie'
import FeaturedSlider from './components/landing/featured_slider/FeaturedSlider'
import Footer from './components/general/footer/Footer'
import TopButton from './components/general/topbutton/TopButton'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <InfoAbadie />
      <FeaturedSlider />
      <Footer />
      <TopButton />
    </>
  )
}

export default App
