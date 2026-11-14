import type { Metadata } from "next";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import { WHATSAPP, PHONE_TEL } from "@/lib/social-config";

const SITE_URL = "https://www.tymamakeupartist.com";
const PAGE_URL = `${SITE_URL}/formation-maquillage-casablanca`;

export const metadata: Metadata = {
  title: "Formation Maquillage Casablanca — Cours Makeup Artist",
  description:
    "Formation maquillage à Casablanca avec Tyma, makeup artist professionnelle : cours individuels ou en groupe, tous niveaux. 100+ maquilleuses formées, note 4,8/5 sur Google.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Formation Maquillage Casablanca — Cours Makeup Artist | Tyma",
    description: "Cours de maquillage à Casablanca, individuels ou en groupe, tous niveaux, avec une makeup artist professionnelle.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Tyma — Formation maquillage Casablanca" }],
  },
};

const faq = [
  {
    q: "La formation maquillage est-elle accessible aux débutantes ?",
    a: "Oui. Les formations s'adressent à tous les niveaux, des débutantes aux maquilleuses qui souhaitent se perfectionner.",
  },
  {
    q: "Peut-on suivre la formation en individuel ou en groupe ?",
    a: "Les deux formats existent : formation individuelle ou en groupe. Contactez Tyma sur WhatsApp pour choisir celui qui vous convient.",
  },
  {
    q: "Comment obtenir le tarif de la formation ?",
    a: "Les tarifs sont communiqués sur devis via WhatsApp, selon le format et vos objectifs.",
  },
];

const courseLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Formation maquillage à Casablanca",
  "description":
    "Formation maquillage à Casablanca avec Tyma, makeup artist professionnelle : cours individuels ou en groupe, pour tous les niveaux.",
  "provider": { "@id": `${SITE_URL}/#business` },
  "courseMode": "onsite",
  "url": PAGE_URL,
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Formation Maquillage Casablanca", "item": PAGE_URL },
  ],
};

export default function FormationMaquillageCasablancaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <LandingHeader />

      <main>
        <section className="pt-40 pb-20" style={{ background: "var(--s0)" }}>
          <div className="max-w-4xl mx-auto px-5">
            <p className="type-label mb-4" style={{ color: "var(--gold)" }}>Casablanca</p>
            <h1 className="type-section mb-6" style={{ color: "var(--t0)" }}>
              Formation maquillage<br />
              <span style={{ color: "var(--gold)" }}>à Casablanca</span>
            </h1>
            <p className="text-base leading-relaxed max-w-2xl mb-8" style={{ color: "var(--t1)" }}>
              Apprenez le maquillage avec Tyma, makeup artist professionnelle à Casablanca depuis plus de 10 ans.
              Plus de 100 maquilleuses formées, formation individuelle ou en groupe, tous niveaux.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">WhatsApp</a>
              <a href={PHONE_TEL} className="btn-outline">Appeler</a>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--s1)" }}>
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="type-section mb-8" style={{ color: "var(--t0)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Pour qui
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: "Débutantes", text: "Vous partez de zéro et souhaitez apprendre les bases du maquillage pas à pas." },
                { title: "Passionnées", text: "Vous aimez le maquillage et voulez affiner votre technique et votre regard." },
                { title: "Futures professionnelles", text: "Vous visez le métier de makeup artist et cherchez un accompagnement par une professionnelle." },
              ].map((f) => (
                <div key={f.title} className="service-card !p-6 !rounded-2xl">
                  <h3 className="text-base font-semibold mb-2" style={{ color: "var(--t0)", fontFamily: "var(--font-display)" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--t1)" }}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--s0)" }}>
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="type-section mb-6" style={{ color: "var(--t0)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Formats
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--t1)" }}>
              Individuelle ou en groupe, tous niveaux. Contactez Tyma pour choisir le format adapté à votre projet.
            </p>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--s1)" }}>
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="type-section mb-8" style={{ color: "var(--t0)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Pourquoi Tyma
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "10+ ans d'expérience", text: "Plus de dix ans de pratique professionnelle du maquillage à Casablanca." },
                { title: "100+ maquilleuses formées", text: "Une expérience concrète de la transmission, auprès de profils variés." },
                { title: "Global Beauty Academy", text: "Tyma est propriétaire de Global Beauty Academy, centre de formation maquillage et coiffure à Casablanca." },
                { title: "500+ mariées", text: "Un savoir-faire éprouvé sur le terrain, que vous retrouvez dans l'enseignement." },
                { title: "4,8/5 sur 44 avis Google", text: "Une réputation confirmée par les avis de ses clientes." },
              ].map((f) => (
                <div key={f.title} className="service-card !p-6 !rounded-2xl">
                  <h3 className="text-base font-semibold mb-2" style={{ color: "var(--t0)", fontFamily: "var(--font-display)" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--t1)" }}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--s0)" }}>
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="type-section mb-6" style={{ color: "var(--t0)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Tarifs
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--t1)" }}>
              Les formations sont proposées sur devis via WhatsApp. Retrouvez l&apos;ensemble des prestations sur la{" "}
              <a href="/tarifs" style={{ color: "var(--gold)", textDecoration: "underline" }}>page tarifs</a>.
            </p>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--s1)" }}>
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="type-section mb-8" style={{ color: "var(--t0)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {faq.map((f) => (
                <div key={f.q}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "var(--t0)", fontFamily: "var(--font-display)" }}>{f.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--t1)" }}>{f.a}</p>
                </div>
              ))}
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
