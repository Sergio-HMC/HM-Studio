import ImageSlot from "@/components/ImageSlot";

const residential = [
  "Remodelaciones integrales de departamentos",
  "Cocinas integradas y conceptos abiertos",
  "Renovación de baños y zonas húmedas",
  "Actualización eléctrica, sanitaria y climatización",
  "Interiorismo y terminaciones llave en mano",
];

const commercial = [
  "Mantención preventiva y correctiva",
  "Electricidad, iluminación y redes sanitarias",
  "Pintura, revestimientos y reparación de terminaciones",
  "Habilitación y deshabilitación de locales",
  "Trabajos nocturnos y coordinación con administración",
  "Informes técnicos y registro fotográfico",
];

const process = [
  ["01", "Diagnóstico técnico", "Visitamos el espacio, levantamos necesidades y evaluamos factibilidad, riesgos y prioridades."],
  ["02", "Propuesta y presupuesto", "Entregamos alcance, plazos, partidas y una propuesta transparente para decidir con claridad."],
  ["03", "Ejecución coordinada", "Gestionamos equipo, materiales, accesos, permisos internos, escombros y control de avance."],
  ["04", "Entrega y seguimiento", "Cerramos con revisión final, registro del trabajo y acompañamiento posterior."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="HM Studio, volver al inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-hm-studio.jpeg" alt="Logo HM Studio" />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#comercial">Mantención comercial</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#nosotros">Nosotros</a>
        </nav>
        <a className="button button--small" href="#contacto">Solicitar visita</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero__content">
          <p className="eyebrow">REMODELACIÓN · HABILITACIÓN · MANTENCIÓN</p>
          <h1>Espacios que se transforman. Operaciones que no se detienen.</h1>
          <p className="hero__lead">
            Soluciones integrales para departamentos, locales comerciales y shopping centers en Santiago.
            Diseño, construcción y mantenimiento con un solo equipo responsable.
          </p>
          <div className="button-row">
            <a className="button" href="#contacto">Cotizar un proyecto</a>
            <a className="button button--secondary" href="#servicios">Conocer servicios</a>
          </div>
          <div className="hero__proof">
            <span>Atención en terreno</span><span>Personal coordinado</span><span>Entrega documentada</span>
          </div>
        </div>
        <ImageSlot filename="hero-principal.jpg" label="IMAGEN 1 — HERO" alt="Proyecto de remodelación y mantención HM Studio" className="hero__image" />
      </section>

      <section className="choice section" id="servicios">
        <div className="section-heading">
          <p className="eyebrow">DOS LÍNEAS, UN MISMO ESTÁNDAR</p>
          <h2>¿Qué espacio necesitas mejorar?</h2>
          <p>HM Studio integra capacidades de diseño, construcción y mantención para clientes residenciales y corporativos.</p>
        </div>
        <div className="choice-grid">
          <article className="choice-card">
            <ImageSlot filename="remodelacion-residencial.jpg" label="IMAGEN 2 — RESIDENCIAL" alt="Remodelación residencial HM Studio" />
            <div className="choice-card__body">
              <p className="card-number">01</p><h3>HM Studio Residencial</h3>
              <p>Rediseñamos departamentos antiguos para convertirlos en espacios abiertos, actuales y de mayor valor.</p>
              <ul>{residential.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href="#contacto" className="text-link">Cotizar remodelación →</a>
            </div>
          </article>
          <article className="choice-card" id="comercial">
            <ImageSlot filename="mantencion-comercial.jpg" label="IMAGEN 3 — COMERCIAL" alt="Mantención de local comercial" />
            <div className="choice-card__body">
              <p className="card-number">02</p><h3>HM Studio Comercial</h3>
              <p>Mantenemos locales y activos comerciales operativos, seguros y en condiciones de representar tu marca.</p>
              <ul>{commercial.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href="#contacto" className="text-link">Solicitar mantención →</a>
            </div>
          </article>
        </div>
      </section>

      <section className="commercial-feature section section--dark">
        <div>
          <p className="eyebrow eyebrow--light">SHOPPING CENTERS Y RETAIL</p>
          <h2>Un proveedor técnico para todas las necesidades de tu local.</h2>
          <p>Coordinamos accesos, horarios de trabajo, protocolos internos, retiro de residuos y entrega de informes para reducir interrupciones y simplificar la gestión.</p>
          <div className="feature-points">
            <div><strong>Preventiva</strong><span>Planes periódicos para anticipar fallas.</span></div>
            <div><strong>Correctiva</strong><span>Resolución coordinada de incidencias.</span></div>
            <div><strong>Habilitación</strong><span>Aperturas, cambios y cierres de locales.</span></div>
            <div><strong>Multitécnica</strong><span>Un contacto para distintas especialidades.</span></div>
          </div>
          <a className="button" href="#contacto">Hablar sobre mantención</a>
        </div>
        <ImageSlot filename="equipo-mantencion-retail.jpg" label="IMAGEN 4 — EQUIPO RETAIL" alt="Equipo técnico realizando mantención comercial" />
      </section>

      <section className="projects section">
        <div className="section-heading section-heading--row">
          <div><p className="eyebrow">TIPOS DE PROYECTO</p><h2>Capacidad técnica aplicada a cada espacio.</h2></div>
          <p>Estas imágenes son marcadores. Solo debes guardar tus fotos con los nombres indicados dentro de <code>public/images</code>.</p>
        </div>
        <div className="project-grid">
          <article><ImageSlot filename="proyecto-cocina.jpg" label="IMAGEN 5" alt="Proyecto de cocina integrada" /><h3>Cocinas integradas</h3><p>Apertura de espacios, islas, iluminación y terminaciones.</p></article>
          <article><ImageSlot filename="proyecto-bano.jpg" label="IMAGEN 6" alt="Proyecto de renovación de baño" /><h3>Baños y zonas húmedas</h3><p>Soluciones actuales, eficientes y fáciles de mantener.</p></article>
          <article><ImageSlot filename="proyecto-local-comercial.jpg" label="IMAGEN 7" alt="Proyecto de local comercial" /><h3>Locales comerciales</h3><p>Habilitación, reparaciones y actualización de imagen.</p></article>
          <article><ImageSlot filename="proyecto-mantencion.jpg" label="IMAGEN 8" alt="Trabajo de mantención técnica" /><h3>Mantención técnica</h3><p>Intervenciones preventivas y correctivas documentadas.</p></article>
        </div>
      </section>

      <section className="about section" id="nosotros">
        <ImageSlot filename="nosotros-hm-studio.jpg" label="IMAGEN 9 — NOSOTROS" alt="Equipo y experiencia de HM Studio" />
        <div>
          <p className="eyebrow">ESPAÑA + CHILE</p>
          <h2>Experiencia europea con ejecución local.</h2>
          <p>HM Studio nace de la evolución de Home Market Consulting en España y de nuestra experiencia con productos y proyectos en Santiago.</p>
          <p>Combinamos visión estética, optimización de espacios y conocimiento constructivo de la realidad chilena para crear propiedades de mayor valor y espacios comerciales mejor mantenidos.</p>
          <blockquote>“No solo intervenimos espacios: ayudamos a proteger su funcionamiento, imagen y valor.”</blockquote>
        </div>
      </section>

      <section className="process section" id="proceso">
        <div className="section-heading"><p className="eyebrow">CÓMO TRABAJAMOS</p><h2>Un proceso claro de principio a fin.</h2></div>
        <div className="process-grid">
          {process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="contact section" id="contacto">
        <div className="contact__intro">
          <p className="eyebrow eyebrow--light">HABLEMOS DE TU ESPACIO</p>
          <h2>¿Necesitas remodelar, habilitar o mantener una propiedad?</h2>
          <p>Completa los datos y prepara tu correo con la información básica. Antes de publicar, reemplaza el correo de destino en <code>app/page.tsx</code>.</p>
          <div className="contact-details"><span>Atención en terreno · Santiago</span><span>Instagram: @hmstudio.cl</span><span>LinkedIn: HM Studio</span></div>
        </div>
        <form action="mailto:contacto@hmstudio.cl" method="post" encType="text/plain" className="contact-form">
          <label>Nombre y apellido<input name="nombre" required placeholder="Tu nombre" /></label>
          <label>Empresa <span>(opcional)</span><input name="empresa" placeholder="Nombre de la empresa" /></label>
          <label>Tipo de solicitud<select name="tipo" required defaultValue=""><option value="" disabled>Seleccionar</option><option>Remodelación residencial</option><option>Mantención de local comercial</option><option>Habilitación de local</option><option>Emergencia técnica</option><option>Contrato de mantenimiento</option></select></label>
          <label>Comuna o shopping center<input name="ubicacion" required placeholder="Ej. Providencia / Costanera Center" /></label>
          <label>Presupuesto estimado<select name="presupuesto" defaultValue=""><option value="">Por definir</option><option>$10M–$20M CLP</option><option>$20M–$40M CLP</option><option>+$40M CLP</option><option>Presupuesto de mantención recurrente</option></select></label>
          <label>Teléfono o correo<input name="contacto" required placeholder="Cómo podemos contactarte" /></label>
          <label className="full">Cuéntanos qué necesitas<textarea name="mensaje" rows={5} required placeholder="Describe el espacio, la incidencia o el alcance del proyecto" /></label>
          <button className="button full" type="submit">Preparar solicitud</button>
        </form>
      </section>

      <footer>
        <div className="footer-brand"><img src="/logo-hm-studio.jpeg" alt="HM Studio" /><p>Una empresa del grupo Home Market.</p></div>
        <div><strong>Servicios</strong><a href="#servicios">Remodelación residencial</a><a href="#comercial">Mantención comercial</a><a href="#comercial">Habilitación de locales</a></div>
        <div><strong>Contacto</strong><span>Atención en terreno · Santiago</span><a href="#contacto">Solicitar cotización</a><span>© {new Date().getFullYear()} HM Studio</span></div>
      </footer>
    </main>
  );
}
