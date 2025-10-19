import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mariñas Sound 2025 - Festival de Música Urbana en Galicia',
    short_name: 'Mariñas Sound',
    description: 'Festival Mariñas Sound 2025 con Alvama Ice y los mejores artistas de música urbana en Betanzos y Hermo, Galicia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#0066cc',
    icons: [
      {
        src: '/images/design-mode/LOGO%20MARIN%CC%83AS%20SOUND%20SIN%20FONDO.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['music', 'entertainment'],
    lang: 'es',
    orientation: 'portrait',
  }
}
