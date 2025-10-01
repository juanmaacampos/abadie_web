import './InfoAbadie.css'
import { FiAward, FiUsers, FiMapPin, FiTrendingUp, FiHeart, FiShield, FiHome, FiStar } from 'react-icons/fi'
import Button from '../../general/button/Button'
import { useState, useEffect, useRef } from 'react'

const InfoAbadie = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    years: 0,
    families: 0,
    zones: 0,
    success: 0
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  const animateCounters = () => {
    const duration = 1200
    const steps = 50
    const stepDuration = duration / steps

    const targets = {
      years: 43,
      families: 1000,
      zones: 15,
      success: 95
    }

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        years: Math.floor(targets.years * progress),
        families: Math.floor(targets.families * progress),
        zones: Math.floor(targets.zones * progress),
        success: Math.floor(targets.success * progress)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounters(targets)
      }
    }, stepDuration)
  }

  return (
    <section id="nosotros" className="info-abadie" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="info-title">
            Desde <span className="title-accent">1982</span> liderando el mercado inmobiliario
          </h2>

          {/* Feature Icons Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FiShield />
              </div>
              <h3>Confianza</h3>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FiUsers />
              </div>
              <h3>Asesoramiento</h3>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FiTrendingUp />
              </div>
              <h3>Inversión</h3>
            </div>
          </div>
        </div>
        
        <div className="info-content">
          {/* Timeline Section */}
          <div className={`timeline-section ${isVisible ? 'slide-in-left' : ''}`}>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">1982</div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <FiStar />
                  </div>
                  <h3>Nacimiento de Abadie</h3>
                  <p>Fundada por Alfredo Abadie, Martillero Público y Corredor Inmobiliario, con amplio conocimiento de la zona norte. Inicio de una trayectoria marcada por el crecimiento constante.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">1990s</div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <FiHome />
                  </div>
                  <h3>Casas Blancas Mediterráneas</h3>
                  <p>Desarrollo de Casas Blancas Mediterráneas I y II en Campana, III en Zárate y IV en San Miguel. Soluciones habitacionales innovadoras que marcaron la diferencia en la región.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2000s</div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <FiAward />
                  </div>
                  <h3>Centro Gallego</h3>
                  <p>Construcción del reconocido edificio Centro Gallego en Campana. Un proyecto emblemático que consolidó nuestra posición como líderes en desarrollo inmobiliario.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">Hoy</div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <FiTrendingUp />
                  </div>
                  <h3>Parc d'Escobar</h3>
                  <p>Comercialización del exclusivo Parc d'Escobar, un hito en desarrollos de alta gama en la zona norte. Más de 40 años transformando sueños en realidad.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location Section */}
          <div className={`info-location ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="map-container">
              <div className="location-header">
                <div className="location-icon">
                  <FiMapPin />
                </div>
                <h3>Visitanos</h3>
                <p>Te esperamos en nuestra oficina para asesorarte personalmente</p>
              </div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13205.370303126521!2d-58.962605999999994!3d-34.163157999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb7235bd0b0757%3A0xdf3508eaffc4b72e!2sINMOBILIARIA%20ABADIE%20PROPIEDADES!5e0!3m2!1ses-419!2sar!4v1759341953022!5m2!1ses-419!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Inmobiliaria Abadie Propiedades"
              />
            </div>
            
            <div className="info-cta">
              <h3>¿Listo para encontrar tu hogar ideal?</h3>
              <p>Comenzá tu búsqueda con nosotros</p>
              <Button variant="primary" size="medium">
                Contactar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoAbadie
