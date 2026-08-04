/**
 * Configuration centrale des réseaux sociaux — Tyma Makeup Artist
 * Pour ajouter un réseau : copier un objet, changer les champs, active: true
 */

export type SocialNetwork = {
  id: string
  name: string
  url: string
  color: string        // couleur de marque officielle
  bgHover: string      // hover background
  active: boolean
  showInFooter: boolean
  showInReels: boolean // afficher dans la section vidéos
  icon: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'whatsapp' | 'snapchat' | 'pinterest' | 'x'
}

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/tymabeauty/',
    color: '#E1306C',
    bgHover: 'rgba(225,48,108,0.1)',
    active: true,
    showInFooter: true,
    showInReels: true,
    icon: 'instagram',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://web.facebook.com/beautytyma/',
    color: '#1877F2',
    bgHover: 'rgba(24,119,242,0.1)',
    active: true,
    showInFooter: true,
    showInReels: false,
    icon: 'facebook',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@tyma.beauty',
    color: '#010101',
    bgHover: 'rgba(255,255,255,0.1)',
    active: false, // mettre à true + URL réelle quand disponible
    showInFooter: true,
    showInReels: true,
    icon: 'tiktok',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@TymaBeauty',
    color: '#FF0000',
    bgHover: 'rgba(255,0,0,0.1)',
    active: true,
    showInFooter: true,
    showInReels: true,
    icon: 'youtube',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/212694863646',
    color: '#25D366',
    bgHover: 'rgba(37,211,102,0.1)',
    active: true,
    showInFooter: false, // géré séparément via le bouton flottant
    showInReels: false,
    icon: 'whatsapp',
  },
  // Ajouter d'autres réseaux ici :
  // {
  //   id: 'snapchat',
  //   name: 'Snapchat',
  //   url: 'https://www.snapchat.com/add/tymabeauty',
  //   color: '#FFFC00',
  //   bgHover: 'rgba(255,252,0,0.1)',
  //   active: false,
  //   showInFooter: false,
  //   showInReels: false,
  //   icon: 'snapchat',
  // },
]

export const getActive = () => SOCIAL_NETWORKS.filter(n => n.active)
export const getFooterNetworks = () => SOCIAL_NETWORKS.filter(n => n.active && n.showInFooter)
export const getReelsNetworks = () => SOCIAL_NETWORKS.filter(n => n.active && n.showInReels)
export const getNetwork = (id: string) => SOCIAL_NETWORKS.find(n => n.id === id)

// URLs directes pour rétrocompatibilité
export const INSTAGRAM = getNetwork('instagram')!.url
export const FACEBOOK = getNetwork('facebook')!.url
export const TIKTOK = getNetwork('tiktok')!.url
export const YOUTUBE = getNetwork('youtube')!.url
export const WHATSAPP = 'https://wa.me/212694863646'
export const GOOGLE_MAPS = 'https://maps.app.goo.gl/zGSM3uYb2D1Eqwiq8'
export const GOOGLE_REVIEWS = 'https://share.google/rV2vUc5ApuF8PzcMI'
export const GOOGLE_RATING = 4.8
export const GOOGLE_REVIEW_COUNT = 41
export const PHONE_TEL = 'tel:+212694863646'
