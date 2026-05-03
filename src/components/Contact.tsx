import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Simulación de envío
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.sectionTitle}>Hablemos de tu proyecto</h2>
            <p className={styles.description}>
              Contanos tu idea y te ayudamos a hacerla realidad. 
              La primera consulta es sin cargo.
            </p>
            <div className={styles.details}>
              <div className={styles.detail}>
                <strong>Email</strong>
                <span>info@estudioarquitectura.com</span>
              </div>
              <div className={styles.detail}>
                <strong>Teléfono</strong>
                <span>+54 11 1234-5678</span>
              </div>
              <div className={styles.detail}>
                <strong>Dirección</strong>
                <span>Av. Córdoba 1234, CABA</span>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            {submitted && (
              <div className={styles.successMessage}>
                ¡Gracias! Te contactaremos pronto.
              </div>
            )}
            <div className={styles.field}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+54 11 ..."
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Contanos sobre tu proyecto..."
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
