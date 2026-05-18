import { EVENT } from "@/config/event";

export default function Footer() {
  return (
    <footer className="px-5 py-10 md:px-16 md:py-12 border-t-[0.5px] border-outline-variant flex flex-col items-center gap-8 md:flex-row md:justify-between">
      {/* Izquierda: Logo */}
      <div className="flex items-center md:w-1/3 md:justify-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/golf tank.svg"
          alt="Golf Tank"
          className="h-24 w-auto"
        />
      </div>

      {/* Centro: Links (Web e Instagram) */}
      <div className="flex flex-col items-center justify-center gap-3 md:w-1/3">
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/golftank"
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/golftank"
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <a
          href="https://golftank.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-outline hover:text-primary transition-colors"
        >
          golftank.com
        </a>
      </div>

      {/* Derecha: Info del evento */}
      <div className="flex flex-col items-center md:items-end md:w-1/3 gap-1">
        <span className="text-xs text-outline tracking-[0.04em]">
          {EVENT.edition}
        </span>
        <span className="text-xs text-outline tracking-[0.04em]">
          {EVENT.venue.name} · {EVENT.venue.location}
        </span>
      </div>
    </footer>
  );
}
