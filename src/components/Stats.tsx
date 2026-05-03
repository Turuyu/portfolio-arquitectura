import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'
import ScrollReveal from './ScrollReveal'

const stats = [
  { value: 150, suffix: '+', label: 'Proyectos completados' },
  { value: 10, suffix: '', label: 'Años de experiencia' },
  { value: 98, suffix: '%', label: 'Clientes satisfechos' },
  { value: 12, suffix: '', label: 'Premios de diseño' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          let start = 0
          const duration = 2000
          const increment = target / (duration / 16)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.grid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.number}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
                <p className={styles.label}>{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
