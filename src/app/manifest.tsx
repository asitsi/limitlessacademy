import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Limitless cricket Academy',
    short_name: 'Limitless cricket Academy',
    description: 'LimitsLess Cricket Academy in Pune nurtures future cricket stars with expert coaching and top facilities. From beginners to pros, our tailored programs help all players excel. Unleash your potential and elevate your cricket game today!',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}