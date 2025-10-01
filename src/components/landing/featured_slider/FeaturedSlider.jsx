import { useState } from 'react'
import './FeaturedSlider.css'
import { FiChevronLeft, FiChevronRight, FiHome, FiLayers } from 'react-icons/fi'
import { MdBathtub } from 'react-icons/md'
import Button from '../../general/button/Button'

const FeaturedSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const properties = [
    {
      id: 1,
      image: '/api/placeholder/400/300',
      address: 'AV. RIVADAVIA 4200 2° 17 - CABALLITO',
      type: 'Departamento en venta',
      price: 'U$S 155.000',
      surface: '77.79 M2',
      rooms: '3 AMBIENTES',
      bathrooms: '1 BAÑO',
      status: 'VENTA'
    },
    {
      id: 2,
      image: '/api/placeholder/400/300',
      address: 'CARLOS CALVO 1800 2° A - SAN CRISTOBAL',
      type: 'Departamento en venta',
      price: 'U$S 49.500',
      surface: '29 M2',
      rooms: 'MONOAMBIENTE',
      bathrooms: '1 BAÑO',
      status: 'VENTA'
    },
    {
      id: 3,
      image: '/api/placeholder/400/300',
      address: 'AV PEDRO GOYENA 1400 10° 11 - CABALLITO',
      type: 'Departamento en venta',
      price: 'U$S 550.000',
      surface: '182.11 M2',
      rooms: '5 AMBIENTES',
      bathrooms: '1 BAÑO',
      status: 'VENTA'
    },
    {
      id: 4,
      image: '/api/placeholder/400/300',
      address: 'GUAYAQUIL 950 - MONSERRAT',
      type: 'Departamento en venta',
      price: 'U$S 85.000',
      surface: '168 M2',
      rooms: '4 AMBIENTES',
      bathrooms: '2 BAÑOS',
      status: 'VENTA'
    },
    {
      id: 5,
      image: '/api/placeholder/400/300',
      address: 'SARANDI 1200 - SAN TELMO',
      type: 'Departamento en venta',
      price: 'U$S 120.000',
      surface: '95 M2',
      rooms: '3 AMBIENTES',
      bathrooms: '2 BAÑOS',
      status: 'VENTA'
    }
  ]

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(properties.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentProperties = () => {
    const start = currentSlide * itemsPerSlide
    return properties.slice(start, start + itemsPerSlide)
  }

  return (
    <section className="featured-slider">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            TU NUEVA VIDA <span className="title-accent">COMIENZA ACÁ</span>
          </h2>
          <p className="section-subtitle">
            Las mejores propiedades en los barrios buscados. Te invitamos a visitar nuestras destacadas de hoy
          </p>
        </div>

        <div className="slider-container">
          <button 
            className="slider-nav prev" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <FiChevronLeft />
          </button>

          <div className="properties-grid">
            {getCurrentProperties().map((property) => (
              <div key={property.id} className="property-card">
                <div className="property-image">
                  <img 
                    src={property.image} 
                    alt={`Propiedad en ${property.address}`}
                  />
                  <div className="property-status">
                    {property.status}
                  </div>
                </div>
                
                <div className="property-content">
                  <h3 className="property-address">{property.address}</h3>
                  <p className="property-type">{property.type}</p>
                  <div className="property-price">{property.price}</div>
                  
                  <div className="property-features">
                    <div className="feature">
                      <FiLayers className="feature-icon" />
                      <span>{property.surface}</span>
                    </div>
                    <div className="feature">
                      <FiHome className="feature-icon" />
                      <span>{property.rooms}</span>
                    </div>
                    <div className="feature">
                      <MdBathtub className="feature-icon" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="slider-nav next" 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
          >
            <FiChevronRight />
          </button>
        </div>

        <div className="slider-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="section-cta">
          <Button variant="secondary" size="large">
            Ver Todas las Propiedades
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSlider
