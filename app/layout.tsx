import type { Metadata } from "next";
import { Raleway, DM_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const SITE_URL = "https://www.tymamakeupartist.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tyma Makeup Artist | Maquilleuse Professionnelle au Maroc",
    template: "%s | Tyma Makeup Artist",
  },
  description:
    "Tyma est la maquilleuse professionnelle de référence au Maroc. Spécialisée en maquillage mariée, soirée, shooting photo et cours privés à Casablanca, Rabat, Marrakech. 10+ ans d'expérience, 500+ clientes satisfaites, note 5 étoiles.",
  keywords: [
    "maquilleuse professionnelle Maroc",
    "makeup artist Maroc",
    "maquillage mariée Maroc",
    "maquillage mariée Casablanca",
    "maquillage mariée Rabat",
    "maquillage mariée Marrakech",
    "maquillage soirée Maroc",
    "maquillage shooting photo Maroc",
    "cours maquillage professionnel Maroc",
    "maquilleuse domicile Maroc",
    "Tyma Makeup Artist",
    "Tyma Makeup Artist Maroc",
    "meilleure maquilleuse Maroc",
    "maquillage événement Maroc",
    "maquilleuse mariage Casablanca",
    "maquilleuse mariage Rabat",
    "beauty artist Maroc",
    "maquillage haut de gamme Maroc",
    "maquillage luxe Maroc",
    "maquilleuse mariée marocaine",
    "négafa Casablanca",
    "wedding planner Maroc maquillage",
    "styliste mariage Maroc",
    "mariage marocain international",
    "maquilleuse mariée marocaine étranger",
    "maquillage keswa takchita",
    "maquilleuse diaspora marocaine",
  ],
  authors: [{ name: "Tyma Makeup Artist" }],
  creator: "Tyma Makeup Artist",
  publisher: "Tyma Makeup Artist",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "fr-MA": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: SITE_URL,
    siteName: "Tyma Makeup Artist",
    title: "Tyma Makeup Artist | Maquilleuse Professionnelle au Maroc",
    description:
      "Maquilleuse professionnelle au Maroc. Mariages, soirées, shootings, cours privés. 10+ ans d'expérience, 500+ clientes satisfaites, note 5★ Google.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tyma Makeup Artist – Maquilleuse professionnelle de luxe au Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyma Makeup Artist | Maquilleuse Professionnelle au Maroc",
    description:
      "Maquilleuse professionnelle au Maroc. Mariages, soirées, shootings, cours privés. 500+ clientes satisfaites.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "MA",
    "geo.placename": "Maroc",
    "geo.country": "Morocco",
    "geo.position": "33.5731;-7.5898",
    "ICBM": "33.5731, -7.5898",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      "url": SITE_URL,
      "name": "Tyma Makeup Artist | Maquilleuse Professionnelle au Maroc",
      "description": "Tyma est une maquilleuse professionnelle au Maroc avec 10+ ans d'expérience, spécialisée en maquillage mariée, soirée, shooting photo et cours privés. Elle intervient à Casablanca, Rabat, Marrakech, Fès, Tanger et partout au Maroc.",
      "inLanguage": "fr",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": `${SITE_URL}/#business` },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "#a-propos p", "#faq h3"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Tyma Makeup Artist",
      "inLanguage": "fr",
      "publisher": { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": ["BeautyBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      "name": "Tyma Makeup Artist",
      "alternateName": ["Tyma Makeup Artist Casablanca", "Tyma Beauty", "Tyma Makeup"],
      "description": "Tyma est une maquilleuse professionnelle au Maroc avec plus de 10 ans d'expérience. Elle est spécialisée en maquillage de mariée avec essai inclus, maquillage de soirée et gala, maquillage pour shooting photo, et cours de maquillage privés. Elle a maquillé plus de 500 clientes satisfaites et dispose d'une note de 5 étoiles. Tyma se déplace à domicile ou reçoit en studio au Maroc.",
      "url": SITE_URL,
      "telephone": "+212694863646",
      "priceRange": "$$",
      "currenciesAccepted": "MAD",
      "paymentAccepted": "Cash, Virement bancaire",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Casablanca",
        "addressRegion": "Grand Casablanca",
        "addressCountry": "MA",
        "description": "Quartier Maarif, Casablanca",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5270151",
        "longitude": "-7.6495311",
      },
      "hasMap": "https://maps.app.goo.gl/zGSM3uYb2D1Eqwiq8",
      "areaServed": [
        { "@type": "City", "name": "Casablanca", "addressCountry": "MA" },
        { "@type": "City", "name": "Rabat", "addressCountry": "MA" },
        { "@type": "City", "name": "Marrakech", "addressCountry": "MA" },
        { "@type": "City", "name": "Fès", "addressCountry": "MA" },
        { "@type": "City", "name": "Tanger", "addressCountry": "MA" },
        { "@type": "City", "name": "Agadir", "addressCountry": "MA" },
        { "@type": "City", "name": "Meknès", "addressCountry": "MA" },
        { "@type": "Country", "name": "Maroc" },
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "description": "Sur rendez-vous uniquement — 7j/7 selon disponibilités",
        },
      ],
      "sameAs": [
        "https://www.instagram.com/tymabeauty/",
        "https://web.facebook.com/tymamakeupartist/",
        "https://www.tiktok.com/@tyma.beauty",
        "https://www.youtube.com/@TymaBeauty",
        "https://maps.app.goo.gl/zGSM3uYb2D1Eqwiq8",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de maquillage professionnel au Maroc",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Maquillage Mariée",
              "description": "Look sur-mesure pour le jour J. Essai inclus, longue tenue garantie, produits haut de gamme. Disponible à Casablanca, Rabat, Marrakech et partout au Maroc.",
              "provider": { "@id": `${SITE_URL}/#business` },
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Maquillage Shooting Photo",
              "description": "Maquillage conçu pour sublimer sous tous les objectifs, toutes lumières. Studio et extérieur.",
              "provider": { "@id": `${SITE_URL}/#business` },
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Maquillage Événements",
              "description": "Gala, soirée, anniversaire, remise de diplôme. Présence et éclat assurés pour chaque occasion.",
              "provider": { "@id": `${SITE_URL}/#business` },
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cours de Maquillage Privés",
              "description": "Formation individuelle aux techniques professionnelles de maquillage. Séance personnalisée adaptée à votre niveau.",
              "provider": { "@id": `${SITE_URL}/#business` },
            },
          },
        ],
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "41",
        "bestRating": "5",
        "worstRating": "1",
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sara B." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Tyma a transformé mon look le jour de mon mariage. Tous mes invités étaient époustouflés. Je recommande à 1000 %.",
          "datePublished": "2024-06-15",
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Imane K." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Professionnelle, créative, à l'écoute. Mon shooting photo était parfait grâce à elle.",
          "datePublished": "2024-09-03",
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Nadia R." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Après mon cours particulier avec Tyma, je me maquille comme une vraie pro. Ses techniques sont incroyables.",
          "datePublished": "2025-01-20",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": "Tyma",
      "jobTitle": "Maquilleuse professionnelle",
      "description": "Tyma est une maquilleuse professionnelle marocaine avec plus de 10 ans d'expérience dans le maquillage de mariée, soirée et shooting photo. Elle a maquillé plus de 500 clientes au Maroc.",
      "worksFor": { "@id": `${SITE_URL}/#business` },
      "sameAs": [
        "https://www.instagram.com/tymabeauty/",
        "https://www.facebook.com/tymamakeupartist/",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien de temps dure une séance maquillage mariage avec Tyma ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une séance mariée avec Tyma Makeup Artist dure entre 2h30 et 3h30 selon la complexité du look et les essais réalisés en amont. Un essai préalable est recommandé pour affiner le résultat final.",
          },
        },
        {
          "@type": "Question",
          "name": "Tyma Makeup Artist se déplace-t-elle à domicile à Casablanca ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, Tyma se déplace à domicile ou sur le lieu de l'événement à Casablanca et ses environs. Elle intervient également dans d'autres villes du Maroc (Rabat, Marrakech, Fès, Tanger) selon les disponibilités. Des frais de déplacement peuvent s'appliquer selon la distance.",
          },
        },
        {
          "@type": "Question",
          "name": "Faut-il réserver à l'avance pour un maquillage de mariage ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolument. Tyma Makeup Artist travaille exclusivement sur rendez-vous. Les dates de mariage se réservent 3 à 6 mois à l'avance. Pour la saison 2026, l'agenda est presque complet. Contactez Tyma dès que votre date est fixée via WhatsApp.",
          },
        },
        {
          "@type": "Question",
          "name": "Les produits utilisés par Tyma sont-ils adaptés aux peaux sensibles ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, Tyma Makeup Artist utilise exclusivement des marques professionnelles hypoallergéniques. Un test cutané est systématiquement réalisé lors de l'essai pour éviter toute réaction allergique.",
          },
        },
        {
          "@type": "Question",
          "name": "Tyma propose-t-elle des formations maquillage pour débutantes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, Tyma propose des formations individuelles et en groupe pour tous niveaux, du maquillage quotidien aux techniques professionnelles avancées. Chaque formation est personnalisée selon votre niveau et vos objectifs.",
          },
        },
        {
          "@type": "Question",
          "name": "Comment se déroule l'essai maquillage mariage chez Tyma ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'essai maquillage se déroule dans le studio de Tyma Makeup Artist à Casablanca ou à domicile. Durée : environ 2h. On teste le look complet, on prend des photos sous différentes lumières et on ajuste selon vos retours.",
          },
        },
        {
          "@type": "Question",
          "name": "Quelle est la durée de tenue du maquillage de Tyma ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Avec les produits fixateurs professionnels utilisés par Tyma Makeup Artist, le maquillage tient entre 12h et 16h selon les conditions. Idéal pour les longues journées de mariage.",
          },
        },
        {
          "@type": "Question",
          "name": "Quels types de maquillage propose Tyma Makeup Artist à Casablanca ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tyma Makeup Artist propose : maquillage de mariée (essai inclus, longue tenue garantie), maquillage soirée et gala, maquillage pour shooting photo et vidéo, soins du visage, et cours de maquillage privés. Elle est basée à Casablanca, quartier Maarif, et se déplace dans tout le Maroc.",
          },
        },
        {
          "@type": "Question",
          "name": "Comment contacter Tyma Makeup Artist pour un rendez-vous ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vous pouvez contacter Tyma Makeup Artist directement via WhatsApp au +212 6 94 86 36 46, ou via Instagram @tymabeauty. Elle répond sous 24h et propose un devis gratuit.",
          },
        },
        {
          "@type": "Question",
          "name": "Quels produits et matériel utilise Tyma Makeup Artist ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tyma Makeup Artist travaille exclusivement avec des marques professionnelles haut de gamme : fonds de teint longue tenue et waterproof, produits HD conçus pour résister aux flashs et à la lumière des caméras, fixateurs professionnels, et produits vegan/hypoallergéniques adaptés aux peaux sensibles. Le matériel (pinceaux, éponges, applicateurs) est désinfecté et renouvelé après chaque prestation.",
          },
        },
        {
          "@type": "Question",
          "name": "Tyma Makeup Artist travaille-t-elle avec des wedding planners, stylistes et négafas ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, Tyma Makeup Artist collabore régulièrement avec les meilleurs wedding planners, stylistes et négafas du Maroc pour coordonner parfaitement le maquillage avec chaque tenue de la mariée (keswa, takchita, caftan, robe occidentale) tout au long des différentes étapes du mariage marocain traditionnel.",
          },
        },
        {
          "@type": "Question",
          "name": "Tyma Makeup Artist propose-t-elle ses services pour les mariages marocains à l'international ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, Tyma Makeup Artist se spécialise dans le maquillage de mariée marocaine, aussi bien pour les mariages traditionnels célébrés au Maroc que pour les mariages de la diaspora marocaine à l'étranger (Europe, Golfe, Amérique du Nord). Elle maîtrise les codes spécifiques de la mariée marocaine : plusieurs tenues et changements de look dans la même soirée, teint qui résiste à de longues heures de fête, et rendu impeccable sur toutes les photos et vidéos.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${raleway.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MY55780SP1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MY55780SP1');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
