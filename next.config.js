/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/cart',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/contact-us',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/en/for-families',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/learn-genomics',
        destination: '/learning-center',
        permanent: true,
      },
      {
        source: '/en/projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/seqfirstddi',
        destination: '/seqfirstddi',
        permanent: true,
      },
      {
        source: '/en/seqfirstneo',
        destination: '/seqfirstnewborns',
        permanent: true,
      },
      {
        source: '/es/comunquese',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/es/diferencias-de-desarrollo',
        destination: '/seqfirstddi',
        permanent: true,
      },
      {
        source: '/es/learn-genomics',
        destination: '/learning-center',
        permanent: true,
      },
      {
        source: '/es/para-las-familias',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/proyectos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/recien-nacidos',
        destination: '/seqfirstnewborns',
        permanent: true,
      },
      {
        source: '/es/seqfirst-equipo',
        destination: '/our-team',
        permanent: true,
      },
      {
        source: '/our-team-copy',
        destination: '/our-team',
        permanent: true,
      },
      {
        source: '/s/SeqFirst-DDi_consent_SAMPLE.pdf',
        destination: '/',
        permanent: true,
      },
      {
        source: '/s/SeqFisrt-Neo_consent_SAMPLE.pdf',
        destination: '/',
        permanent: true,
      },
      // For location-specific enroll flow tracking
      {
        source: '/sch-neo',
        destination: '/enroll?location=sch-neo',
        permanent: true
      },
      // For location-specific enroll flow tracking
      {
        source: '/sch-ddi',
        destination: '/enroll?location=sch-ddi',
        permanent: true
      },
      // For location-specific enroll flow tracking
      {
        source: '/uw-neo',
        destination: '/enroll?location=uw-neo',
        permanent: true
      },
      // For location-specific enroll flow tracking
      {
        source: '/uw-ddi',
        destination: '/enroll?location=uw-ddi',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
