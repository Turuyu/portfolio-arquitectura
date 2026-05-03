import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Estudio Arquitectura</h3>
            <p className={styles.brandTagline}>
              Diseñando espacios que inspiran desde 2015
            </p>
          </div>
          <nav className={styles.nav}>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} Estudio Arquitectura. Todos los derechos reservados.</p>
          <p className={styles.credit}>
            Desarrollado con React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
