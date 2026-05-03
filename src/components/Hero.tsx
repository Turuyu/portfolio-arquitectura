import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.subtitle}>Estudio de Arquitectura</p>
        <h1 className={styles.title}>
          Diseñamos espacios<br />
          que <span className={styles.accent}>inspiran</span>
        </h1>
        <p className={styles.description}>
          Transformamos ideas en proyectos arquitectónicos únicos, 
          combinando funcionalidad, estética y sustentabilidad.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#contacto" className={styles.ctaPrimary}>
            Consultá tu proyecto
          </a>
          <a href="#proyectos" className={styles.ctaSecondary}>
            Ver trabajos
          </a>
        </div>
      </div>
    </section>
  )
}
