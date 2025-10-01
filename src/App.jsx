import './App.css'
import Navbar from './components/general/navbar/Navbar'
import Header from './components/landing/header/Header'
import InfoAbadie from './components/landing/info_abadie/InfoAbadie'
import CategoryChooser from './components/landing/chooser/CategoryChooser'
import Footer from './components/general/footer/Footer'
import TopButton from './components/general/topbutton/TopButton'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <CategoryChooser />
      <InfoAbadie />
      <Footer />
      <TopButton />
    </>
  )
}

export default App
