import './Footer.css'
import logo from '../../../assets/images/logo_abadie.webp'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="Abadie Inmobiliaria Logo" className="footer-logo" />
            <p className="footer-tagline">
              Más de 20 años construyendo sueños inmobiliarios
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#propiedades">Venta de Propiedades</a></li>
                <li><a href="#propiedades">Alquiler de Propiedades</a></li>
                <li><a href="#servicios">Tasaciones</a></li>
                <li><a href="#servicios">Asesoramiento Legal</a></li>
                <li><a href="#servicios">Financiación</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contacto</h4>
              <ul>
                <li>
                  <a href="tel:+5491123456789">
                    <FiPhone className="contact-icon" />
                    +54 9 11 2345-6789
                  </a>
                </li>
                <li>
                  <a href="mailto:info@abadieinmobiliaria.com">
                    <FiMail className="contact-icon" />
                    info@abadieinmobiliaria.com
                  </a>
                </li>
                <li>
                  <a href="#ubicacion">
                    <FiMapPin className="contact-icon" />
                    Av. Corrientes 1234, CABA
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Zonas de Cobertura</h4>
              <ul>
                <li><a href="#caballito">Caballito</a></li>
                <li><a href="#san-cristobal">San Cristóbal</a></li>
                <li><a href="#monserrat">Monserrat</a></li>
                <li><a href="#san-telmo">San Telmo</a></li>
                <li><a href="#barracas">Barracas</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#facebook" className="social-link" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#instagram" className="social-link" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#linkedin" className="social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
          
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} Abadie Inmobiliaria. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer