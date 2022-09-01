import Script from 'next/script'

export default {
  titleSuffix: ' – Krinu',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Krinu</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Krinu Documentation" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  // footerEditLink: 'Edit this page on GitHub',
  footerText: <Script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/25562069.js"></Script>,
  unstable_faviconGlyph: '👋',
}
