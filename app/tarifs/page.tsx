import type { Metadata } from "next";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import { WHATSAPP, PHONE_TEL } from "@/lib/social-config";

const SITE_URL = "https://www.tymamakeupartist.com";
const PAGE_URL = `${SITE_URL}/tarifs`;

export const metadata: Metadata = {
  title: "Tarifs Maquillage Mariée & Événement",
  description:
    "Tarifs des prestations de Tyma, makeup artist professionnelle au Maroc : maquillage mariée, essai, soirée, shooting photo et formations. Devis personnalisé selon vos besoins.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Tarifs Maquillage Mariée & Événement | Tyma Makeup Artist",
    description: "Tarifs des prestations de Tyma : maquillage mariée, essai, soirée, shooting photo et formations.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Tyma — Tarifs maquillage" }],
  },
};

const SERVICES = [
  { name: "Maquillage Mariée", detail: "Essai inclus, jour J, longue tenue garantie 12-16h" },
  { name: "Essai Maquillage", detail: "Séance dédiée avant le jour J (~2h)" },
  { name: "Maquillage Soirée / Invitée", detail: "Gala, fiançailles, cérémonie" },
  { name: "Shooting Photo", detail: "Maquillage photogénique studio ou extérieur" },
  { name: "Formation Maquillage", detail: "Individuelle ou en groupe, tous niveaux" },
  { name: "Retouche / Urgence", detail: "Intervention le jour J, déplacement possible" },
];

export default function TarifsPage() {
  return (
    <>
      <LandingHeader />

      <main>
        <section className="pt-40 pb-16" style={{ background: "var(--s0)" }}>
          <div className="max-w-4xl mx-auto px-5">
            <p className="type-label mb-4" style={{ color: "var(--gold)" }}>Tarifs</p>
            <h1 className="type-section mb-6" style={{ color: "var(--t0)" }}>
              Tarifs sur mesure<br />
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>selon votre prestation</span>
            </h1>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--t1)" }}>
              Chaque tarif dépend du type de prestation, du lieu et de la complexité du look souhaité.
              Contactez Tyma sur WhatsApp pour recevoir un devis personnalisé et gratuit.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "var(--s1)" }}>
          <div className="max-w-4xl mx-auto px-5">
            <div className="flex flex-col gap-4">
              {SERVICES.map((s) => (
                <div key={s.name} className="service-card !p-6 !rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: "var(--t0)", fontFamily: "var(--font-display)" }}>{s.name}</h3>
                    <p className="text-sm" style={{ color: "var(--t1)" }}>{s.detail}</p>
                  </div>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline !py-2 !px-4 !text-xs whitespace-nowrap">
                    Sur devis
                  </a>
                </div>
              ))}
            </div>

            <p className="text-xs mt-8" style={{ color: "var(--t2)" }}>
              Des frais de déplacement peuvent s&apos;appliquer selon la distance (Casablanca et environs, Rabat, Marrakech et autres villes du Maroc).
            </p>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--s0)" }}>
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="type-section mb-4" style={{ color: "var(--t0)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Recevez votre devis
            </h2>
            <p className="text-sm mb-8" style={{ color: "var(--t2)" }}>
              Décrivez votre événement (date, lieu, type de prestation) sur WhatsApp pour recevoir un tarif précis.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">WhatsApp</a>
              <a href={PHONE_TEL} className="btn-outline">Appeler</a>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />

      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.118 1.528 5.849L.073 23.927l6.235-1.435A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.656-.497-5.19-1.367l-.372-.216-3.7.852.878-3.592-.24-.384A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </>
  );
}
