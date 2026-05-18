import Image from 'next/image';
import { EVENT } from '@/config/event';
import ArrowRight from '@/components/icons/ArrowRight';

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <Image
        className="hero-img"
        src={EVENT.heroImage}
        alt="Vista aérea del campo de golf"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* Badge de edición */}
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <span>{EVENT.badgeText}</span>
        </div>

        {/* Título principal */}
        <h1 className="hero-title">{EVENT.name}</h1>

        {/* Fecha */}
        <p className="hero-date">
          {EVENT.date.display.replace('\\n', ' ')} · {EVENT.date.year}
        </p>

        {/* CTA */}
        <div className="hero-cta">
          <a className="btn-primary" href="#inscripcion">
            Reservá tu lugar
            <ArrowRight />
          </a>
        </div>
      </div>
    </header>
  );
}
