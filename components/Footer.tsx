import { EVENT } from '@/config/event';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">{EVENT.name}</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
        <span style={{ fontSize: 12, color: 'var(--outline)', letterSpacing: '0.04em' }}>
          {EVENT.edition}
        </span>
        <span style={{ fontSize: 12, color: 'var(--outline)', letterSpacing: '0.04em' }}>
          {EVENT.venue.name} · {EVENT.venue.location}
        </span>
      </div>
    </footer>
  );
}
