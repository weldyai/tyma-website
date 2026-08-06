import { WHATSAPP, PHONE_TEL, GOOGLE_MAPS, getFooterNetworks } from "@/lib/social-config";
import { SocialIcon } from "@/lib/social-icons";

const PHONE_DISPLAY = "+212 6 94 86 36 46";

export function LandingFooter() {
  const networks = getFooterNetworks();

  return (
    <footer className="py-16" style={{ background: "var(--s1)", borderTop: "1px solid var(--glass-border)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--t0)", fontWeight: 200, letterSpacing: "0.05em" }}>
              Tyma Makeup Artist
            </div>
            <p className="text-sm mt-2" style={{ color: "var(--t2)", maxWidth: 360 }}>
              Makeup artist professionnelle à Casablanca. Maquillage mariée, soirée, shooting et formations — au Maroc et pour la diaspora marocaine.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={PHONE_TEL} className="btn-outline">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">WhatsApp</a>
          </div>
        </div>

        <div className="gold-line my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs" style={{ color: "var(--t2)" }}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="/">Accueil</a>
            <a href="/tarifs">Tarifs</a>
            <a href="/maquillage-mariage-casablanca">Mariage Casablanca</a>
            <a href="/maquillage-mariage-rabat">Mariage Rabat</a>
            <a href="/wedding-makeup-marrakech">Marrakech Wedding</a>
            <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer">Casablanca, Maroc</a>
          </div>
          <div className="flex items-center gap-4">
            {networks.map((n) => (
              <a key={n.id} href={n.url} target="_blank" rel="noopener noreferrer" aria-label={n.name}>
                <SocialIcon icon={n.icon} className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
