import { useState, useEffect } from 'react'
import './Header.css'
import { FiSearch, FiMapPin, FiHome } from 'react-icons/fi'
import { HiOutlineHome, HiOutlineOfficeBuilding } from 'react-icons/hi'
import { BiRuler, BiBuildings } from 'react-icons/bi'
import Button from '../../general/button/Button'
import SearchHeader from '../../general/search_header/SearchHeader'

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const words = ['confianza', 'transparencia', 'calidad', 'seriedad', 'trayectoria']
  
  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    if (isTyping) {
      if (currentText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, 80) // Más rápido el tipeo
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false)
        }, 3000) // Más tiempo mostrando la palabra completa
        return () => clearTimeout(timer)
      }
    } else {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 50) // Más rápido el borrado
        return () => clearTimeout(timer)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsTyping(true)
      }
    }
  }, [currentText, isTyping, currentWordIndex, words])

  return (
    <header id="home" className="header">
      <div className="header-background">
        <div className="header-overlay"></div>
      </div>
      
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <div className="title-container">
              <div className="blueprint-background"></div>
              <div className="title-architectural-horizontal">
                <div className="architectural-lines left">
                  <HiOutlineHome className="arch-icon left-icon" />
                  <div className="measurement-mark">0</div>
                </div>
                <div className="number-section">
                  <span className="main-number">
                    40
                    <div className="number-blueprint-lines">
                      <div className="blueprint-line top"></div>
                      <div className="blueprint-line bottom"></div>
                    </div>
                  </span>
                  <div className="years-badge">
                    <BiRuler className="badge-icon" />
                    <span className="years-text">años de</span>
                    <div className="blueprint-corner"></div>
                  </div>
                </div>
                <div className="architectural-lines right">
                  <BiBuildings className="arch-icon right-icon" />
                  <div className="measurement-mark">40</div>
                </div>
              </div>
              <h1 className="header-title">
                <span className="typewriter-text">
                  {currentText}
                  <span className="cursor">|</span>
                </span>
              </h1>
            </div>
            
            <SearchHeader />
            
            <div className="header-stats">
              <div className="stat-item">
                <FiHome className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Propiedades</span>
                </div>
              </div>
              <div className="stat-item">
                <FiMapPin className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Zonas</span>
                </div>
              </div>
              <div className="stat-item">
                <FiSearch className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Clientes Satisfechos</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="header-actions">
            <Button variant="primary" size="large">
              Ver Propiedades
            </Button>
            <Button variant="white" size="large">
              Contactanos
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
