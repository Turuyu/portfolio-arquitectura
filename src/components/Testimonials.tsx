import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'María González',
    role: 'Propietaria, Casa del Lago',
    quote: 'El equipo superó todas nuestras expectativas. El diseño no solo es hermoso, sino que cada rincón tiene un propósito claro.',
  },
  {
    name: 'Carlos Ruiz',
    role: 'CEO, Torre Central',
    quote: 'Profesionalismo de primer nivel. Entendieron nuestra visión desde el primer día y la ejecutaron impecablemente.',
  },
  {
    name: 'Laura Méndez',
    role: 'Propietaria, Loft Urbano',
    quote: 'Transformaron un espacio viejo en algo increíble. La atención al detalle y la comunicación fueron excepcionales.',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Lo que dicen nuestros clientes</h2>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className={styles.card}>
              <blockquote className={styles.quote}>
                "{testimonial.quote}"
              </blockquote>
              <div className={styles.author}>
                <strong className={styles.name}>{testimonial.name}</strong>
                <span className={styles.role}>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
