import styles from './Projects.module.css'

const projects = [
  {
    title: 'Casa del Lago',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    year: '2024',
  },
  {
    title: 'Torre Central',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    year: '2023',
  },
  {
    title: 'Loft Urbano',
    category: 'Remodelación',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    year: '2024',
  },
  {
    title: 'Villa Serena',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    year: '2023',
  },
  {
    title: 'Espacio Cowork',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    year: '2024',
  },
  {
    title: 'Casa Minimal',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    year: '2023',
  },
]

export default function Projects() {
  return (
    <section className={styles.projects} id="proyectos">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
        <p className={styles.sectionSubtitle}>
          Cada diseño cuenta una historia única
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className={styles.imageOverlay}>
                  <span className={styles.category}>{project.category}</span>
                </div>
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <span className={styles.year}>{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
