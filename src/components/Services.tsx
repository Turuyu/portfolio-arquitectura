import styles from './Services.module.css'

const services = [
  {
    icon: '🏛️',
    title: 'Diseño Arquitectónico',
    description: 'Creamos proyectos residenciales y comerciales desde cero, integrando estética y funcionalidad.',
  },
  {
    icon: '📐',
    title: 'Remodelaciones',
    description: 'Transformamos espacios existentes en ambientes modernos y eficientes.',
  },
  {
    icon: '🌿',
    title: 'Arquitectura Sustentable',
    description: 'Diseños eco-amigables que reducen el impacto ambiental y optimizan recursos.',
  },
  {
    icon: '📋',
    title: 'Dirección de Obra',
    description: 'Supervisamos cada etapa de la construcción para garantizar calidad y plazos.',
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="servicios">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
        <p className={styles.sectionSubtitle}>
          Soluciones integrales para cada etapa de tu proyecto
        </p>
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <span className={styles.icon}>{service.icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
