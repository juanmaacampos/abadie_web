import { useState, useEffect, useRef } from 'react'
import './CategoryChooser.css'
import { FiHome, FiGrid, FiPackage, FiMapPin, FiShoppingBag } from 'react-icons/fi'

const CategoryChooser = () => {
  const [isVisible, setIsVisible] = useState(true) // Cambiar a true por defecto
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const categories = [
    {
      id: 'departamento',
      title: 'Departamento',
      icon: FiGrid,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    },
    {
      id: 'casa',
      title: 'Casa',
      icon: FiHome,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop'
    },
    {
      id: 'oficina',
      title: 'Oficina',
      icon: FiPackage,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    },
    {
      id: 'ph',
      title: 'PH',
      icon: FiMapPin,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
    },
    {
      id: 'fondo-comercio',
      title: 'Fondo de comercio',
      icon: FiShoppingBag,
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop'
    }
  ]

  return (
    <section id="propiedades" className="category-chooser" ref={sectionRef}>
      <div className={`chooser-header ${isVisible ? 'fade-in' : ''}`}>
        <h2 className="chooser-title">
          El lugar que buscabas, <span className="title-accent">está más cerca</span>
        </h2>
        <p className="chooser-subtitle">
          Buscá por categoría, la manera más fácil de comparar y encontrar más oportunidades.
        </p>
      </div>
      <div className={`categories-grid-container ${isVisible ? 'slide-in-up' : ''}`}>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="category-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-image">
                <img 
                  src={category.image} 
                  alt={category.title}
                  loading="lazy"
                />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <category.icon className="category-icon" />
                <h3 className="category-title">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryChooser
