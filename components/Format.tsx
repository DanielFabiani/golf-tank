import { EVENT } from '@/config/event';

export default function Format() {
  return (
    <section className="format-section" id="formato">
      <p className="section-label">Formato</p>
      <h2 className="section-heading">Modalidad de juego</h2>

      <div className="format-grid">
        {EVENT.format.map((item, i) => (
          <div
            key={i}
            className={item.highlight ? 'format-card-highlight' : 'format-card'}
          >
            <span className="format-card-label">{item.label}</span>
            <span className="format-card-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
