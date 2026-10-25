export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section id="hero" className="px-6 py-24 max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-cyan-400 mb-4">
          Portafolio · TSC
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Jonathan Felipe Aguilera Tapia
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
          Desarrollador Fullstack con especialización en Backend y Bases de Datos.
          Construyo aplicaciones web completas con React, Angular, TypeScript,
          Node.js y PostgreSQL.
        </p>
      </section>

      {/* Sobre mí */}
      <section id="about" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-6">Sobre mí</h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl">
          En un año de práctica intensiva he construido aplicaciones web completas,
          incluyendo coordinación técnica en una plataforma educativa de 10 personas.
          Mi experiencia previa en gestión de datos y entornos de alta presión me dio
          la base para resolver problemas con criterio y trabajar con autonomía.
        </p>
      </section>

      {/* Proyectos */}
      <section id="projects" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="p-6 rounded-lg bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-semibold">ReducAr</h3>
            <p className="mt-2 text-sm text-slate-400">
              Plataforma educativa que reúne ofertas de estudios gratuitos en IT.
              MVP con pasarela de pagos, chatbot y control de acceso por políticas.
            </p>
          </article>
          <article className="p-6 rounded-lg bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-semibold">CodeCraft</h3>
            <p className="mt-2 text-sm text-slate-400">
              Bolsa IT con curva de aprendizaje adaptativa al usuario. Beta
              lanzada y en evolución continua.
            </p>
          </article>
        </div>
      </section>

      {/* Formación */}
      <section id="education" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-6">Formación</h2>
        <ul className="space-y-4 text-slate-300">
          <li>
            <strong className="text-slate-100">IPLACEX</strong> — Técnico en Desarrollo
            de Aplicaciones Multiplataforma (egresado 2023)
          </li>
          <li>
            <strong className="text-slate-100">Fundación Pescar · JP Morgan · Finnegans · Educación IT</strong>{" "}
            — Desarrollo Web Full Stack (en curso)
          </li>
          <li>
            <strong className="text-slate-100">Santander Open Academy</strong> —
            Fundamentos de Ciberseguridad, Ciencia de Datos (en curso)
          </li>
        </ul>
      </section>

      {/* Habilidades */}
      <section id="skills" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-6">Habilidades técnicas</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
          <p><strong className="text-slate-100">Backend:</strong> Node.js · Express · APIs REST</p>
          <p><strong className="text-slate-100">Bases de datos:</strong> PostgreSQL · Supabase · Firebase</p>
          <p><strong className="text-slate-100">Frontend:</strong> React · Angular · TypeScript · Tailwind CSS</p>
          <p><strong className="text-slate-100">Herramientas:</strong> Git · GitHub · Vite · ESLint</p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-6">Contacto</h2>
        <p className="text-slate-300">
          Disponible para oportunidades profesionales. Podés encontrarme en{" "}
          <a className="text-cyan-400 hover:underline" href="https://github.com/Jonathan-Aguilera">
            GitHub
          </a>{" "}
          o vía LinkedIn.
        </p>
      </section>
    </main>
  )
}