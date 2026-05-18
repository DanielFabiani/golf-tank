import { EVENT } from '@/config/event';

export default function Agenda() {
  return (
    <section className="agenda-section" id="agenda">
      <div className="agenda-intro">
        <p className="section-label">Agenda del día</p>
        <h2 className="section-heading">Cómo va a ser la jornada</h2>
        <p>
          Recepción temprana, salida simultánea, cocktail de cierre
          con palabras de los directivos y entrega de premios.
        </p>
      </div>

      <div className="timeline">
        {EVENT.agenda.map((item, i) => {
          const isLast = i === EVENT.agenda.length - 1;
          return (
            <div key={i} className="tl-item">
              {/* Tiempo */}
              <div className={`tl-time${item.highlight ? ' active' : ''}`}>
                {item.time}
              </div>

              {/* Línea vertical + dot */}
              <div className="tl-line-wrap">
                <div className={`tl-dot${item.highlight ? ' active' : ''}`} />
                {!isLast && <div className="tl-connector" />}
              </div>

              {/* Descripción */}
              <div className="tl-body">
                <p className={`tl-title${item.highlight ? ' active' : ''}`}>
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
