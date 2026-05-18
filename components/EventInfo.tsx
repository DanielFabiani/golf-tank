import { EVENT } from '@/config/event';

export default function EventInfo() {
  return (
    <div className="info-strip">
      {/* Fecha */}
      <div className="info-col">
        <p className="info-label">Fecha</p>
        <p className="info-value">{EVENT.date.display.replace('\\n', '\n')}</p>
        <p className="info-sub">{EVENT.date.year}</p>
      </div>

      {/* Divisor vertical */}
      <div className="info-divider" />

      {/* Lugar */}
      <div className="info-col">
        <p className="info-label">Lugar</p>
        <p className="info-value">{EVENT.venue.name.replace(' ', '\n')}</p>
        <p className="info-sub">{EVENT.venue.location}</p>
      </div>
    </div>
  );
}
