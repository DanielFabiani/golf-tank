'use client';

import { useState } from 'react';
import { FORM_FIELDS, type FormFieldId } from '@/config/event';
import ArrowRight from '@/components/icons/ArrowRight';
import CheckIcon  from '@/components/icons/CheckIcon';

type FormState = Record<FormFieldId, string>;
type Status    = 'idle' | 'loading' | 'success' | 'error';

export default function RegistrationForm() {
  const [form, setForm] = useState<FormState>(
    Object.fromEntries(FORM_FIELDS.map((f) => [f.id, ''])) as FormState
  );
  const [hasPartner,   setHasPartner]   = useState(false);
  const [partnerName,  setPartnerName]  = useState('');
  const [status,       setStatus]       = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (id: FormFieldId, value: string) =>
    setForm((prev) => ({ ...prev, [id]: value }));

  const handleSubmit = async () => {
    setErrorMessage('');

    // Validación
    const missing = FORM_FIELDS.filter((f) => f.required && !form[f.id].trim());
    if (missing.length > 0) {
      setErrorMessage(`Por favor completá: ${missing.map((f) => f.label).join(', ')}`);
      return;
    }

    setStatus('loading');

    const payload = {
      ...form,
      tiene_pareja: hasPartner,
      pareja:       hasPartner ? partnerName : '',
      timestamp:    new Date().toISOString(),
    };

    try {
      const res = await fetch('/api/register', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Hubo un problema al enviar. Intentá de nuevo o escribinos directamente.');
    }
  };

  // ── Estado de éxito ─────────────────────────────────────────
  if (status === 'success') {
    return (
      <section className="reg-section" id="inscripcion">
        <div className="reg-inner">
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'rgba(165,210,157,0.15)',
              border: '1px solid rgba(165,210,157,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <CheckIcon />
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>
              ¡Inscripción recibida!
            </h3>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              Te confirmamos tu participación por WhatsApp<br />
              en los próximos días. ¡Nos vemos en el campo!
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ── Formulario ──────────────────────────────────────────────
  return (
    <section className="reg-section" id="inscripcion">
      <div className="reg-inner">

        {/* Header */}
        <div className="reg-header">
          <p className="section-label">Inscripción</p>
          <h2 className="section-heading">Reservá tu lugar</h2>
          <p>
            Completá tus datos. Te confirmamos tu participación
            por WhatsApp antes del evento.
          </p>
        </div>

        {/* Campos */}
        <div className="form-grid">
          {FORM_FIELDS.map((field) => (
            <div
              key={field.id}
              className={`field${field.col === 2 ? ' form-col-2' : ''}`}
            >
              <label htmlFor={field.id}>
                {field.label}
                {field.required && <span className="required">*</span>}
              </label>
              <input
                id={field.id}
                type={field.type}
                value={form[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                autoComplete={field.autocomplete}
                required={field.required}
              />
            </div>
          ))}

          {/* Checkbox pareja */}
          <div className="form-col-2">
            <label className="checkbox-row" htmlFor="con-pareja">
              <input
                type="checkbox"
                id="con-pareja"
                checked={hasPartner}
                onChange={(e) => setHasPartner(e.target.checked)}
              />
              <div className="checkbox-text">
                <strong>Vengo con pareja de juego</strong>
                <p>
                  Si ya tenés a alguien con quien venir, registralo acá.
                  Si no, te asignamos en el armado de equipos.
                </p>
              </div>
            </label>

            {hasPartner && (
              <div className="field" style={{ marginTop: 16 }}>
                <label htmlFor="pareja">Nombre de tu pareja</label>
                <input
                  id="pareja"
                  type="text"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  placeholder="Nombre y apellido"
                />
              </div>
            )}
          </div>
        </div>

        {/* Submit */}
        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <button
            className="btn-submit"
            onClick={handleSubmit}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Enviando…' : 'Confirmar inscripción'}
            {status !== 'loading' && <ArrowRight />}
          </button>

          {errorMessage && (
            <p style={{ color: '#f87171', fontSize: 13, margin: 0 }}>
              {errorMessage}
            </p>
          )}

          <p style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.3)',
            lineHeight: 1.55,
            maxWidth: 440,
            margin: 0,
          }}>
            Tus datos quedan únicamente en manos de la organización del torneo
            y se usan exclusivamente para coordinar el evento.
          </p>
        </div>
      </div>
    </section>
  );
}
