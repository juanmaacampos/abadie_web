import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './AdvancedSearchModal.css'
import { FiX, FiSearch, FiChevronDown } from 'react-icons/fi'
import Button from '../button/Button'

const AdvancedSearchModal = ({ isOpen, onClose, activeTab }) => {
  const [formData, setFormData] = useState({
    propertyType: '',
    neighborhoods: [],
    rooms: '',
    bedrooms: '',
    bathrooms: '',
    garages: '',
    characteristics: [],
    surfaceTotal: { min: '', max: '' },
    surfaceCovered: { min: '', max: '' },
    priceARS: { min: '', max: '' },
    priceUSD: { min: '', max: '' },
    essentialServices: [],
    view: [],
    security: [],
    heating: [],
    surveillance: [],
    additional: []
  })

  // Cerrar modal con Escape y manejar body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('modal-open')
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
      document.body.classList.remove('modal-open')
    }
  }, [isOpen, onClose])

  const propertyTypes = [
    'Departamento', 'Casa', 'PH', 'Local Comercial', 'Oficina', 'Terreno', 'Cochera'
  ]

  const neighborhoods = [
    'Caballito', 'San Cristóbal', 'Monserrat', 'San Telmo', 'Barracas', 
    'Constitución', 'Balvanera', 'Almagro', 'Villa Crespo', 'Palermo', 
    'Recoleta', 'Puerto Madero', 'Villa Urquiza', 'Colegiales', 'Belgrano'
  ]

  const roomOptions = ['1', '2', '3', '4', '5', '6+']
  const bedroomOptions = ['1', '2', '3', '4', '5+']
  const bathroomOptions = ['1', '2', '3', '4+']
  const garageOptions = ['1', '2', '3', '4+']

  const characteristics = [
    'Balcón', 'Terraza', 'Patio', 'Jardín', 'Pileta', 'Parrilla', 'Amoblado', 
    'Semi-amoblado', 'A estrenar', 'En construcción', 'Apto profesional'
  ]

  const essentialServices = [
    'ABL', 'AYSA', 'Electricidad', 'Gas natural', 'Internet/Wifi', 
    'Línea telefónica', 'TV/Cable'
  ]

  const viewOptions = [
    'Abierta', 'A la calle', 'A jardín', 'A plaza', 'A pulmón de manzana'
  ]

  const securityOptions = [
    'Alarma en la propiedad', 'Grupo electrógeno', 'Puerta blindada'
  ]

  const heatingOptions = [
    'Aire acondicionado', 'Caldera (central)', 'Caldera (individual)', 
    'Calefacción (central)', 'Calefacción (estufa a gas)', 'Calefacción (losa central)',
    'Calefacción (losa individual)', 'Calefacción (placas bajo consumo)',
    'Calefacción (radiadores central)', 'Calefacción (radiadores individuales)',
    'Chimenea', 'Split frío/calor', 'Termotanque/Calefón', 'Ventilador de techo'
  ]

  const surveillanceOptions = [
    'Cámaras de seguridad', 'Encargado', 'Encargado (virtual/pantalla)', 
    'Portero eléctrico', 'Vigilancia (24hs)', 'Vigilancia (diurna)', 
    'Vigilancia (fin de semana)', 'Vigilancia (nocturna)'
  ]

  const additionalOptions = [
    'Amoblado', 'Cancha de paddle', 'Cancha de tenis', 'Centros comerciales cercanos',
    'Cocina (eléctrica)', 'Cocina (gas)', 'Escuelas cercanas', 'Estacionamiento de visitas',
    'Gimnasio', 'Hidromasaje', 'Laundry', 'Microcine', 'Parques cercanos', 'Parrilla',
    'Piscina', 'Placards', 'Sala de juegos', 'Sauna', 'Solarium', 'Spa', 'SUM',
    'Termotanque (eléctrico)', 'Termotanque (gas)'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const handleRangeChange = (field, type, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: { ...prev[field], [type]: value }
    }))
  }

  const handleSearch = () => {
    console.log('Búsqueda avanzada:', formData)
    onClose()
  }

  const clearFilters = () => {
    setFormData({
      propertyType: '',
      neighborhoods: [],
      rooms: '',
      bedrooms: '',
      bathrooms: '',
      garages: '',
      characteristics: [],
      surfaceTotal: { min: '', max: '' },
      surfaceCovered: { min: '', max: '' },
      priceARS: { min: '', max: '' },
      priceUSD: { min: '', max: '' },
      essentialServices: [],
      view: [],
      security: [],
      heating: [],
      surveillance: [],
      additional: []
    })
  }

  if (!isOpen) return null

  const modalContent = (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Búsqueda Avanzada - {activeTab}</h2>
          <button className="modal-close" onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>

        <div className="modal-body">
          {/* Información básica */}
          <div className="form-section">
            <h3>Información Básica</h3>
            <div className="form-row">
              <div className="form-field">
                <label>Tipo de propiedad</label>
                <div className="select-wrapper">
                  <select 
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                  >
                    <option value="">- Seleccionar tipo -</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <FiChevronDown className="select-icon" />
                </div>
              </div>
            </div>

            <div className="form-field">
              <label>Ubicación</label>
              <div className="checkbox-grid">
                {neighborhoods.map(neighborhood => (
                  <label key={neighborhood} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={formData.neighborhoods.includes(neighborhood)}
                      onChange={() => handleArrayChange('neighborhoods', neighborhood)}
                    />
                    <span className="checkbox-custom"></span>
                    {neighborhood}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Ambientes y espacios */}
          <div className="form-section">
            <h3>Ambientes y Espacios</h3>
            <div className="form-row">
              <div className="form-field">
                <label>Ambientes</label>
                <div className="select-wrapper">
                  <select 
                    value={formData.rooms}
                    onChange={(e) => handleInputChange('rooms', e.target.value)}
                  >
                    <option value="">- Seleccionar -</option>
                    {roomOptions.map(room => (
                      <option key={room} value={room}>{room}</option>
                    ))}
                  </select>
                  <FiChevronDown className="select-icon" />
                </div>
              </div>

              <div className="form-field">
                <label>Dormitorios</label>
                <div className="select-wrapper">
                  <select 
                    value={formData.bedrooms}
                    onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                  >
                    <option value="">- Seleccionar -</option>
                    {bedroomOptions.map(bedroom => (
                      <option key={bedroom} value={bedroom}>{bedroom}</option>
                    ))}
                  </select>
                  <FiChevronDown className="select-icon" />
                </div>
              </div>

              <div className="form-field">
                <label>Baños</label>
                <div className="select-wrapper">
                  <select 
                    value={formData.bathrooms}
                    onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                  >
                    <option value="">- Seleccionar -</option>
                    {bathroomOptions.map(bathroom => (
                      <option key={bathroom} value={bathroom}>{bathroom}</option>
                    ))}
                  </select>
                  <FiChevronDown className="select-icon" />
                </div>
              </div>

              <div className="form-field">
                <label>Cocheras</label>
                <div className="select-wrapper">
                  <select 
                    value={formData.garages}
                    onChange={(e) => handleInputChange('garages', e.target.value)}
                  >
                    <option value="">- Seleccionar -</option>
                    {garageOptions.map(garage => (
                      <option key={garage} value={garage}>{garage}</option>
                    ))}
                  </select>
                  <FiChevronDown className="select-icon" />
                </div>
              </div>
            </div>

            <div className="form-field">
              <label>Características</label>
              <div className="checkbox-grid">
                {characteristics.map(characteristic => (
                  <label key={characteristic} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={formData.characteristics.includes(characteristic)}
                      onChange={() => handleArrayChange('characteristics', characteristic)}
                    />
                    <span className="checkbox-custom"></span>
                    {characteristic}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Superficie */}
          <div className="form-section">
            <h3>Superficie (m²)</h3>
            <div className="form-row">
              <div className="form-field">
                <label>Total</label>
                <div className="range-inputs">
                  <input
                    type="number"
                    placeholder="Desde"
                    value={formData.surfaceTotal.min}
                    onChange={(e) => handleRangeChange('surfaceTotal', 'min', e.target.value)}
                  />
                  <span>hasta</span>
                  <input
                    type="number"
                    placeholder="Hasta"
                    value={formData.surfaceTotal.max}
                    onChange={(e) => handleRangeChange('surfaceTotal', 'max', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Cubierta</label>
                <div className="range-inputs">
                  <input
                    type="number"
                    placeholder="Desde"
                    value={formData.surfaceCovered.min}
                    onChange={(e) => handleRangeChange('surfaceCovered', 'min', e.target.value)}
                  />
                  <span>hasta</span>
                  <input
                    type="number"
                    placeholder="Hasta"
                    value={formData.surfaceCovered.max}
                    onChange={(e) => handleRangeChange('surfaceCovered', 'max', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Precio */}
          <div className="form-section">
            <h3>Precio</h3>
            <div className="form-row">
              <div className="form-field">
                <label>ARS</label>
                <div className="range-inputs">
                  <input
                    type="number"
                    placeholder="Desde"
                    value={formData.priceARS.min}
                    onChange={(e) => handleRangeChange('priceARS', 'min', e.target.value)}
                  />
                  <span>hasta</span>
                  <input
                    type="number"
                    placeholder="Hasta"
                    value={formData.priceARS.max}
                    onChange={(e) => handleRangeChange('priceARS', 'max', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>USD</label>
                <div className="range-inputs">
                  <input
                    type="number"
                    placeholder="Desde"
                    value={formData.priceUSD.min}
                    onChange={(e) => handleRangeChange('priceUSD', 'min', e.target.value)}
                  />
                  <span>hasta</span>
                  <input
                    type="number"
                    placeholder="Hasta"
                    value={formData.priceUSD.max}
                    onChange={(e) => handleRangeChange('priceUSD', 'max', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Servicios y características adicionales */}
          <div className="form-section">
            <h3>Servicios Esenciales</h3>
            <div className="checkbox-grid">
              {essentialServices.map(service => (
                <label key={service} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={formData.essentialServices.includes(service)}
                    onChange={() => handleArrayChange('essentialServices', service)}
                  />
                  <span className="checkbox-custom"></span>
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Vista</h3>
            <div className="checkbox-grid">
              {viewOptions.map(view => (
                <label key={view} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={formData.view.includes(view)}
                    onChange={() => handleArrayChange('view', view)}
                  />
                  <span className="checkbox-custom"></span>
                  {view}
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Seguridad</h3>
            <div className="checkbox-grid">
              {securityOptions.map(security => (
                <label key={security} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={formData.security.includes(security)}
                    onChange={() => handleArrayChange('security', security)}
                  />
                  <span className="checkbox-custom"></span>
                  {security}
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Calefacción</h3>
            <div className="checkbox-grid">
              {heatingOptions.map(heating => (
                <label key={heating} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={formData.heating.includes(heating)}
                    onChange={() => handleArrayChange('heating', heating)}
                  />
                  <span className="checkbox-custom"></span>
                  {heating}
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Vigilancia</h3>
            <div className="checkbox-grid">
              {surveillanceOptions.map(surveillance => (
                <label key={surveillance} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={formData.surveillance.includes(surveillance)}
                    onChange={() => handleArrayChange('surveillance', surveillance)}
                  />
                  <span className="checkbox-custom"></span>
                  {surveillance}
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Adicionales</h3>
            <div className="checkbox-grid">
              {additionalOptions.map(additional => (
                <label key={additional} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={formData.additional.includes(additional)}
                    onChange={() => handleArrayChange('additional', additional)}
                  />
                  <span className="checkbox-custom"></span>
                  {additional}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <Button variant="outline" onClick={clearFilters}>
            Limpiar filtros
          </Button>
          <Button variant="primary" icon={<FiSearch />} onClick={handleSearch}>
            Buscar propiedades
          </Button>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

export default AdvancedSearchModal
