import './InfoAbadie.css'
import { FiAward, FiUsers, FiMapPin, FiTrendingUp, FiHeart, FiShield } from 'react-icons/fi'
import Button from '../../general/button/Button'

const InfoAbadie = () => {
  return (
    <section className="info-abadie">
      <div className="container">
        <div className="info-content">
          <div className="info-text">
            <div className="section-badge">
              <FiHeart className="badge-icon" />
              <span>Sobre Nosotros</span>
            </div>
            
            <h2 className="info-title">
              Más de <span className="title-accent">20 años</span> construyendo sueños inmobiliarios
            </h2>
            
            <p className="info-description">
              En Abadie Inmobiliaria, no solo vendemos propiedades, creamos hogares. 
              Nuestra experiencia y compromiso nos han convertido en líderes del mercado 
              inmobiliario, ayudando a miles de familias a encontrar su lugar perfecto.
            </p>
            
            <div className="info-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <FiShield />
                </div>
                <div className="feature-content">
                  <h3>Confianza y Seguridad</h3>
                  <p>Transacciones transparentes con el respaldo legal completo</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FiUsers />
                </div>
                <div className="feature-content">
                  <h3>Asesoramiento Personalizado</h3>
                  <p>Equipo experto dedicado a encontrar la propiedad ideal para ti</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FiTrendingUp />
                </div>
                <div className="feature-content">
                  <h3>Inversión Inteligente</h3>
                  <p>Análisis de mercado para maximizar tu inversión inmobiliaria</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="info-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <FiAward />
                </div>
                <div className="stat-info">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Años de Experiencia</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <FiUsers />
                </div>
                <div className="stat-info">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Familias Satisfechas</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <FiMapPin />
                </div>
                <div className="stat-info">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Zonas de Cobertura</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <FiTrendingUp />
                </div>
                <div className="stat-info">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Tasa de Éxito</span>
                </div>
              </div>
            </div>
            
            <div className="info-cta">
              <h3>¿Listo para encontrar tu hogar ideal?</h3>
              <p>Contactanos hoy y comencemos a hacer realidad tus sueños inmobiliarios</p>
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
