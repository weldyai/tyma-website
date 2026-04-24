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

const SITE_URL = "https://tyma-makeup.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tyma Makeup Artist | Maquilleuse Professionnelle au Maroc",
    template: "%s | Tyma Makeup Artist",
  },
  description:
    "Tyma est la maquilleuse professionnelle de référence au Maroc. Spécialisée en maquillage mariée, soirée, shooting photo et cours privés à Casablanca, Rabat, Marrakech. 11 ans d'expérience, 500+ clientes satisfaites, note 5 étoiles.",
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
      "Maquilleuse professionnelle au Maroc. Mariages, soirées, shootings, cours privés. 11 ans d'expérience, 500+ clientes satisfaites, note 5★ Google.",
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
      "description": "Tyma est une maquilleuse professionnelle au Maroc avec 11 ans d'expérience, spécialisée en maquillage mariée, soirée, shooting photo et cours privés. Elle intervient à Casablanca, Rabat, Marrakech, Fès, Tanger et partout au Maroc.",
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
      "alternateName": ["Tyma Makeup Artist", "Tyma Makeup"],
      "description": "Tyma est une maquilleuse professionnelle au Maroc avec plus de 11 ans d'expérience. Elle est spécialisée en maquillage de mariée avec essai inclus, maquillage de soirée et gala, maquillage pour shooting photo, et cours de maquillage privés. Elle a maquillé plus de 500 clientes satisfaites et dispose d'une note de 5 étoiles. Tyma se déplace à domicile ou reçoit en studio au Maroc.",
      "url": SITE_URL,
      "telephone": "+212694863646",
      "priceRange": "$$",
      "currenciesAccepted": "MAD",
      "paymentAccepted": "Cash, Virement bancaire",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MA",
        "addressRegion": "Maroc",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5731",
        "longitude": "-7.5898",
        "addressCountry": "MA",
      },
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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00",
        },
      ],
      "sameAs": [
        "https://www.instagram.com/tymabeauty/",
        "https://www.facebook.com/beautytyma/",
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
        "ratingValue": "4.7",
        "reviewCount": "30",
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
      "description": "Tyma est une maquilleuse professionnelle marocaine avec plus de 11 ans d'expérience dans le maquillage de mariée, soirée et shooting photo. Elle a maquillé plus de 500 clientes au Maroc.",
      "worksFor": { "@id": `${SITE_URL}/#business` },
      "sameAs": [
        "https://www.instagram.com/tymabeauty/",
        "https://www.facebook.com/beautytyma/",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quels types de maquillage propose Tyma Makeup Artist ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tyma propose quatre services principaux : maquillage de mariée (avec essai inclus), maquillage de soirée et gala, maquillage pour shooting photo en studio ou en extérieur, et cours de maquillage privés au Maroc.",
          },
        },
        {
          "@type": "Question",
          "name": "Comment réserver Tyma Makeup Artist ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vous pouvez réserver Tyma via WhatsApp ou Instagram. Elle répond rapidement et propose un devis personnalisé gratuit. Elle est disponible pour des déplacements à domicile ou reçoit en studio au Maroc.",
          },
        },
        {
          "@type": "Question",
          "name": "Combien d'années d'expérience a Tyma en maquillage professionnel ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tyma a plus de 11 ans d'expérience en maquillage professionnel et a maquillé plus de 500 clientes au Maroc. Elle est notée 5 étoiles par ses clientes.",
          },
        },
        {
          "@type": "Question",
          "name": "Tyma se déplace-t-elle à domicile au Maroc ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, Tyma se déplace à domicile partout au Maroc pour les mariages, soirées et shootings photo. Elle intervient à Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir et dans d'autres villes selon les disponibilités.",
          },
        },
        {
          "@type": "Question",
          "name": "Combien coûte un maquillage de mariée au Maroc ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les tarifs du maquillage de mariée varient selon la prestation, le déplacement et les détails du look souhaité. Contactez Tyma directement via WhatsApp ou Instagram pour obtenir un devis personnalisé gratuit.",
          },
        },
        {
          "@type": "Question",
          "name": "Quels produits utilise Tyma pour le maquillage professionnel ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tyma utilise exclusivement des produits de maquillage haut de gamme et professionnels pour garantir un résultat durable, sublimant et respectueux de la peau. Les produits sont adaptés à chaque type de peau.",
          },
        },
        {
          "@type": "Question",
          "name": "Combien de temps dure une séance de maquillage avec Tyma ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une séance de maquillage professionnel dure généralement entre 1h et 2h selon la complexité du look. Le maquillage de mariée avec essai peut nécessiter plus de temps pour peaufiner chaque détail.",
          },
        },
        {
          "@type": "Question",
          "name": "Tyma propose-t-elle des cours de maquillage pour débutantes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, Tyma propose des cours de maquillage privés adaptés à tous les niveaux, des débutantes aux personnes souhaitant perfectionner leurs techniques. Chaque cours est personnalisé selon vos besoins et vos objectifs.",
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
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
