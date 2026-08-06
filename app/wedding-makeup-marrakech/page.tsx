import type { Metadata } from "next";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import { WHATSAPP, PHONE_TEL } from "@/lib/social-config";

const SITE_URL = "https://www.tymamakeupartist.com";
const PAGE_URL = `${SITE_URL}/wedding-makeup-marrakech`;

export const metadata: Metadata = {
  title: "Wedding Makeup Artist Marrakech — Destination Wedding",
  description:
    "Tyma, professional makeup artist available in Marrakech for destination weddings. Moroccan bridal makeup (keswa, takchita) and modern glam, 10+ years experience, 500+ brides, 4.8/5 on Google.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Wedding Makeup Artist Marrakech — Destination Wedding | Tyma",
    description: "Professional bridal makeup artist for destination weddings in Marrakech, Morocco. Trial included, long-lasting results built for the full wedding day.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Tyma — Wedding Makeup Artist Marrakech" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bridal Makeup in Marrakech",
  "serviceType": "Wedding makeup",
  "areaServed": { "@type": "City", "name": "Marrakech" },
  "provider": { "@type": "LocalBusiness", "name": "Tyma Makeup Artist", "url": SITE_URL },
  "url": PAGE_URL,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Wedding Makeup Marrakech", "item": PAGE_URL },
  ],
};

export default function MarrakechPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <LandingHeader homeLabel="Home" />

      <main>
        <section className="pt-40 pb-20" style={{ background: "var(--s0)" }}>
          <div className="max-w-4xl mx-auto px-5">
            <p className="type-label mb-4" style={{ color: "var(--gold)" }}>Marrakech</p>
            <h1 className="type-section mb-6" style={{ color: "var(--t0)" }}>
              Wedding Makeup Artist<br />
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>in Marrakech</span>
            </h1>
            <p className="text-base leading-relaxed max-w-2xl mb-8" style={{ color: "var(--t1)" }}>
              Tyma is a professional makeup artist with 10+ years of experience, available in Marrakech
              for destination weddings. Over 500 brides styled, rated 4.8/5 on Google (41 reviews).
              Trial session included, long-lasting makeup built to withstand heat and long celebration
              hours — from morning to the last dance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">WhatsApp</a>
              <a href={PHONE_TEL} className="btn-outline">Call</a>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--s1)" }}>
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="type-section mb-8" style={{ color: "var(--t0)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Why brides choose Tyma in Marrakech
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Built for Marrakech heat", text: "Long-lasting, waterproof, HD products designed to hold through heat, dancing and long wedding days — 12 to 16 hours of wear." },
                { title: "Moroccan bridal expertise", text: "Full mastery of traditional Moroccan bridal codes — keswa, takchita, multiple outfit changes throughout the night." },
                { title: "Modern glam or traditional", text: "From soft natural glam to rich oriental glamour — a look tailored to your style, available for riad and hotel weddings." },
                { title: "Trial before the big day", text: "A trial session (~2h) to perfect the look under different lighting before your wedding day." },
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
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="type-section mb-4" style={{ color: "var(--t0)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Book your Marrakech wedding date
            </h2>
            <p className="text-sm mb-8" style={{ color: "var(--t2)" }}>
              Wedding dates are booked months in advance. Get in touch as soon as your date is confirmed.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">Contact on WhatsApp</a>
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
