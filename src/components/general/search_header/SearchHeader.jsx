import { useState } from 'react'
import './SearchHeader.css'
import { FiSearch, FiChevronDown } from 'react-icons/fi'
import Button from '../button/Button'
import AdvancedSearchModal from '../advanced_search_modal/AdvancedSearchModal'

const SearchHeader = () => {
  const [activeTab, setActiveTab] = useState('comprar')
  const [propertyType, setPropertyType] = useState('')
  const [location, setLocation] = useState('')
  const [isAdvancedModalOpen, setIsAdvancedModalOpen] = useState(false)

  const tabs = [
    { id: 'comprar', label: 'Comprar' },
    { id: 'alquilar', label: 'Alquilar' },
    { id: 'temporario', label: 'Temporario' },
    { id: 'emprendimientos', label: 'Emprendimientos' }
  ]

  const propertyTypes = [
    'Departamento',
    'Casa',
    'PH',
    'Local Comercial',
    'Oficina',
    'Terreno',
    'Cochera'
  ]

  const neighborhoods = [
    'Caballito',
    'San Cristóbal', 
    'Monserrat',
    'San Telmo',
    'Barracas',
    'Constitución',
    'Balvanera',
    'Almagro',
    'Villa Crespo',
    'Palermo',
    'Recoleta',
    'Puerto Madero'
  ]

  const handleSearch = () => {
    console.log({
      type: activeTab,
      propertyType,
      location
    })
  }

  const openAdvancedSearch = () => {
    setIsAdvancedModalOpen(true)
  }

  const closeAdvancedSearch = () => {
    setIsAdvancedModalOpen(false)
  }

  return (
    <div className="search-header">
      <div className="search-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`search-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="search-form">
        <div className="search-fields">
          <div className="search-field">
            <label>PROPIEDAD</label>
            <div className="select-wrapper">
              <select 
                value={propertyType} 
                onChange={(e) => setPropertyType(e.target.value)}
                className="search-select"
              >
                <option value="">- Seleccionar tipo de propiedad -</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <FiChevronDown className="select-icon" />
            </div>
          </div>

          <div className="search-field">
            <label>UBICACIÓN</label>
            <div className="select-wrapper">
              <select 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="search-select"
              >
                <option value="">- Seleccionar barrios -</option>
                {neighborhoods.map((neighborhood) => (
                  <option key={neighborhood} value={neighborhood}>{neighborhood}</option>
                ))}
              </select>
              <FiChevronDown className="select-icon" />
            </div>
          </div>

          <div className="search-actions">
            <button 
              className="advanced-search-btn"
              onClick={openAdvancedSearch}
            >
              <FiSearch className="search-icon" />
              Búsqueda Avanzada
            </button>
            
            <Button 
              variant="primary" 
              size="large"
              icon={<FiSearch />}
              onClick={handleSearch}
              className="search-btn"
            >
              BUSCAR
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de búsqueda avanzada */}
      <AdvancedSearchModal 
        isOpen={isAdvancedModalOpen}
        onClose={closeAdvancedSearch}
        activeTab={activeTab}
      />
    </div>
  )
}

export default SearchHeader
