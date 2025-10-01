import { useState, useEffect } from 'react'
import './Header.css'
import { FiSearch, FiMapPin, FiHome } from 'react-icons/fi'
import Button from '../../general/button/Button'
import SearchHeader from '../../general/search_header/SearchHeader'
import iconTitulo from '../../../assets/images/icon_titulo.svg'

// Custom hook para animar contadores
const useCounter = (end, duration = 1200, start = 0) => {
  const [count, setCount] = useState(start)
  const [hasStarted, setHasStarted] = useState(false)

  const startCounter = () => {
    if (hasStarted) return
    setHasStarted(true)

    const steps = 50
    const stepDuration = duration / steps
    const increment = (end - start) / steps
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const newValue = start + (increment * currentStep)
      
      setCount(Math.floor(newValue))

      if (currentStep >= steps) {
        clearInterval(interval)
        setCount(end)
      }
    }, stepDuration)
  }

  return [count, startCounter]
}

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  
  // Contadores para las estadísticas
  const [titleYears, startTitleCounter] = useCounter(40, 1200)
  const [properties, startPropertiesCounter] = useCounter(500, 1200)
  const [zones, startZonesCounter] = useCounter(15, 1200)
  const [clients, startClientsCounter] = useCounter(1000, 1200)
  
  const words = ['confianza', 'transparencia', 'calidad', 'seriedad', 'trayectoria']

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Iniciar contadores después de que la animación de fade-in comience
      setTimeout(() => {
        startTitleCounter()
        startPropertiesCounter()
        startZonesCounter()
        startClientsCounter()
      }, 300)
    }, 100)
    return () => clearTimeout(timer)
  }, [startTitleCounter, startPropertiesCounter, startZonesCounter, startClientsCounter])
  
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
            <div className={`title-container ${isVisible ? 'fade-in' : ''}`}>
              <h1 className="main-title">
                <span className="title-number">+{titleYears}</span>
                <span className="title-years">años de</span>
                <span className="title-word">
                  {currentText}
                  <span className="cursor">|</span>
                  <img 
                    src={iconTitulo} 
                    alt="" 
                    className="title-icon"
                  />
                </span>
              </h1>
            </div>
            
            <div className={`search-container ${isVisible ? 'slide-in-up' : ''}`}>
              <SearchHeader />
            </div>
            
            <div className={`header-stats ${isVisible ? 'fade-in-delayed' : ''}`}>
              <div className="stat-item">
                <FiHome className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">{properties}+</span>
                  <span className="stat-label">Propiedades</span>
                </div>
              </div>
              <div className="stat-item">
                <FiMapPin className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">{zones}</span>
                  <span className="stat-label">Zonas</span>
                </div>
              </div>
              <div className="stat-item">
                <FiSearch className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-number">{clients}+</span>
                  <span className="stat-label">Clientes Satisfechos</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`header-actions ${isVisible ? 'slide-in-up-delayed' : ''}`}>
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
