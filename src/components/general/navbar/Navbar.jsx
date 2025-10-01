import { useState } from 'react'
import './Navbar.css'
import logo from '../../../assets/images/logo_abadie.webp'
import { FiHome, FiInfo, FiCheckCircle, FiMail } from 'react-icons/fi'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Propiedades', href: '#propiedades', icon: <FiHome /> },
    { name: 'Nosotros', href: '#nosotros', icon: <FiInfo /> },
    { name: 'Servicios', href: '#servicios', icon: <FiCheckCircle /> },
    { name: 'Contacto', href: '#contacto', icon: <FiMail />, isButton: true }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToHome = (event) => {
    event.preventDefault();
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMobileMenu(); // Close mobile menu if open
  };


  return (
    <nav className="navbar navbar-scrolled">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <a href="#home" onClick={scrollToHome} className="navbar-logo-link">
              <img 
                src={logo} 
                alt="Abadie Inmobiliaria Logo"
                className="navbar-logo"
              />
            </a>
          </div>
          
          <ul className="navbar-menu desktop-menu">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isButton ? (
                  <a 
                    href={item.href} 
                    className="btn-outline navbar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.substring(1);
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="nav-icon-desktop">{item.icon}</span>
                    {item.name}
                  </a>
                ) : (
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.substring(1);
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="nav-icon-desktop">{item.icon}</span>
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                onClick={(e) => {
                  // Keep existing smooth scroll for nav items if they also target IDs
                  const targetId = item.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                  closeMobileMenu();
                }}
                className={item.isButton ? 'nav-contact-btn' : ''}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar