import { EVENT } from '@/config/event';
import ClockIcon from '@/components/icons/ClockIcon';
import StarIcon  from '@/components/icons/StarIcon';

const NOTE_ICONS = [ClockIcon, StarIcon];

export default function Location() {
  return (
    <section className="location-section" id="como-llegar">
      <p className="section-label">Venue</p>
      <h2 className="section-heading">Cómo llegar</h2>

      <div className="location-inner">
        {/* Info lateral */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <p className="location-name">{EVENT.venue.name}</p>
            <p className="location-address">{EVENT.venue.address}</p>
          </div>

          {EVENT.venue.notes.map((note, i) => {
            const Icon = NOTE_ICONS[i] ?? ClockIcon;
            return (
              <div key={i} className="location-note">
                <Icon />
                {note}
              </div>
            );
          })}
        </div>

        {/* Mapa */}
        <div className="map-wrap">
          <iframe
            src={EVENT.venue.mapEmbed}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa ${EVENT.venue.name}`}
          />
        </div>
      </div>
    </section>
  );
}
