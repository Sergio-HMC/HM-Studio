import Image from 'next/image';

const services = [
  {
    title: 'Cocinas Integradas',
    eyebrow: 'The Heart of the Home',
    text: 'Eliminamos muros de servicio para crear áreas sociales conectadas con islas de cuarzo y herrajes europeos.',
  },
  {
    title: 'Renovación de Zonas Húmedas',
    eyebrow: 'Baños modernos y eficientes',
    text: 'Baños modernos con soluciones de eficiencia hídrica, duchas a ras de suelo y revestimientos de gran formato.',
  },
  {
    title: 'Actualización Técnica de Departamentos',
    eyebrow: 'Seguridad y rendimiento',
    text: 'Renovación completa de tableros eléctricos (TE1), redes de agua y climatización en edificios de conservación histórica o clásicos.',
  },
  {
    title: 'Interiorismo y Terminaciones',
    eyebrow: 'Curatoría Home Market',
    text: 'El toque final con la curatoría de productos Home Market: pisos fotolaminados de alto tráfico y sistemas de iluminación LED indirecta.',
  },
];

const process = [
  {
    step: '01',
    title: 'Diagnóstico Técnico',
    text: 'Visita a terreno para evaluar factibilidad estructural, distinguiendo muros de carga y tabiquería.',
  },
  {
    step: '02',
    title: 'Propuesta 3D',
    text: 'Visualiza tu cocina integrada y nuevos ambientes antes de mover el primer ladrillo.',
  },
  {
    step: '03',
    title: 'Construcción y Gestión',
    text: 'Gestionamos permisos de copropiedad, ruidos molestos y retiro de escombros para que no te preocupes de nada.',
  },
  {
    step: '04',
    title: 'Entrega Llave en Mano',
    text: 'Tu departamento queda limpio, modernizado y listo para habitar o rentabilizar.',
  },
];

const concept = [
  'Diseñamos tu nueva distribución (Open Concept).',
  'Suministramos materiales exclusivos desde nuestra tienda Home Market.',
  'Ejecutamos la obra con personal propio bajo normativa SEC y municipal.',
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#inicio" className="brand" aria-label="Ir al inicio">
            <Image
              src="/logo-hm-studio.jpeg"
              alt="Logo de Home Market Studio"
              width={88}
              height={88}
              className="brand-logo"
              priority
            />
            <div>
              <span className="brand-name">Home Market Studio</span>
              <span className="brand-subtitle">Design & Build en Santiago</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#proceso">Proceso</a>
            <a href="#contacto" className="nav-cta">
              Cotizar proyecto
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Arquitectura, obra y terminaciones en un solo lugar</p>
            <h1>Rediseñamos el alma de tu departamento antiguo en Santiago.</h1>
            <p className="hero-text">
              De plantas compartimentadas a conceptos abiertos y modernos. En Home Market Studio
              fusionamos arquitectura de vanguardia con la exclusividad de nuestra propia línea de
              productos.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                Iniciar mi Transformación
              </a>
              <a href="#proyectos" className="btn btn-secondary">
                Ver Proyectos Realizados
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>Home Market Studio</span>
              <span>Santiago · Chile</span>
            </div>
            <div className="hero-visual">
              <div className="visual-block visual-one" />
              <div className="visual-block visual-two" />
              <div className="visual-block visual-three" />
            </div>
            <div className="hero-metrics">
              <div>
                <strong>Open Concept</strong>
                <span>Redistribución inteligente</span>
              </div>
              <div>
                <strong>Design & Build</strong>
                <span>Proyecto integral</span>
              </div>
              <div>
                <strong>Home Market</strong>
                <span>Materiales exclusivos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section concept-section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Nuestra diferencia</p>
            <h2>Un solo interlocutor, un resultado impecable.</h2>
          </div>
          <div>
            <p className="section-text">
              A diferencia de las constructoras tradicionales, en Home Market Studio cerramos el
              círculo.
            </p>
            <div className="concept-list">
              {concept.map((item) => (
                <div key={item} className="concept-item">
                  <span className="concept-dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="benefit-box">
              <span>Beneficio clave</span>
              <p>Ahorro de tiempo, coherencia estética y garantía integral.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Servicios especializados</p>
            <h2>Intervenciones pensadas para elevar el valor de tu propiedad.</h2>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <p className="card-eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="section alt-section">
        <div className="container about-grid">
          <div className="about-panel">
            <p className="eyebrow">El puente España - Chile</p>
            <h2>Experiencia Europea con Ejecución Local.</h2>
            <p>
              Home Market Studio nace de la evolución de Home Market Consulting (España) y nuestra
              consolidada tienda de productos en Santiago. Combinamos la visión estética europea en
              optimización de espacios con el conocimiento profundo constructivo de la realidad
              chilena. No solo reformamos casas; creamos activos inmobiliarios de alto valor.
            </p>
          </div>
          <div className="quote-panel">
            <span className="quote-mark">HM</span>
            <p>
              Arquitectura contemporánea, materiales curados y ejecución controlada en una sola
              experiencia.
            </p>
          </div>
        </div>
      </section>

      <section id="proceso" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Un proceso claro para transformar sin fricciones.</h2>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <article key={item.step} className="process-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="section showcase-section">
        <div className="container showcase-grid">
          <div>
            <p className="eyebrow">Proyectos realizados</p>
            <h2>Espacios antiguos, convertidos en departamentos contemporáneos.</h2>
            <p className="section-text">
              Esta sección quedó preparada para que luego agregues fotografías reales, renders,
              metros cuadrados intervenidos y testimonios de clientes.
            </p>
          </div>
          <div className="showcase-placeholder">
            <div />
            <div />
            <div />
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contacto / Cotización</p>
            <h2>¿Listo para modernizar tu propiedad?</h2>
            <p className="section-text">
              Completa el formulario y agenda una evaluación inicial de tu proyecto en Santiago.
            </p>
          </div>
          <form className="contact-form">
            <label>
              Nombre y Apellido
              <input type="text" name="nombre" placeholder="Tu nombre completo" />
            </label>

            <label>
              Comuna del proyecto
              <select name="comuna" defaultValue="">
                <option value="" disabled>
                  Selecciona una comuna
                </option>
                <option>Santiago</option>
                <option>Providencia</option>
                <option>Ñuñoa</option>
                <option>Las Condes</option>
                <option>Vitacura</option>
              </select>
            </label>

            <label>
              Tipo de reforma
              <select name="reforma" defaultValue="">
                <option value="" disabled>
                  Selecciona un servicio
                </option>
                <option>Cocina integrada</option>
                <option>Baños</option>
                <option>Remodelación Integral</option>
              </select>
            </label>

            <label>
              Presupuesto estimado
              <select name="presupuesto" defaultValue="">
                <option value="" disabled>
                  Selecciona un rango
                </option>
                <option>$10M - $20M CLP</option>
                <option>$20M - $40M CLP</option>
                <option>+$40M CLP</option>
              </select>
            </label>

            <button type="submit" className="btn btn-primary form-button">
              Solicitar evaluación
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">Home Market Studio</p>
            <p>Una empresa del grupo Home Market.</p>
          </div>
          <div>
            <p className="footer-title">Atención</p>
            <p>Atención en Terreno · Santiago, Chile</p>
          </div>
          <div>
            <p className="footer-title">RRSS</p>
            <div className="footer-links">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
