import { NextResponse, NextRequest } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.includes('icon') || req.nextUrl.pathname.includes('chrome')) {
    return NextResponse.next()
  }

  let lng: string | undefined | null = req.cookies.get(cookieName)?.value || acceptLanguage.get(req.headers.get('Accept-Language')) || fallbackLng

  const pathSegments = req.nextUrl.pathname.split('/').filter(Boolean)

  // استخراج مسیر بعد از زبان
  let subPath = ''
  if (pathSegments.length > 1 && languages.includes(pathSegments[0])) {
    subPath = `/${pathSegments.slice(1).join('/')}`
  }

  const response = NextResponse.next()
  response.headers.set('x-sub-path', subPath)

  if (!languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  return response
}



// import { NextResponse, NextRequest } from 'next/server'
// import acceptLanguage from 'accept-language'
// import { fallbackLng, languages, cookieName } from './app/i18n/settings'

// acceptLanguage.languages(languages)

// export const config = {
//   // matcher: '/:lng*'
//   matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
// }

// export function middleware(req: NextRequest) {
//   if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
//   let lng: string | undefined | null
//   if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
//   if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
//   if (!lng) lng = fallbackLng

//   // Redirect if lng in path is not supported
//   if (
//     !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
//     !req.nextUrl.pathname.startsWith('/_next')
//   ) {
//     return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
//   }

//   if (req.headers.has('referer')) {
//     const refererUrl = new URL(req.headers.get('referer') || '')
//     const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
//     const response = NextResponse.next()
//     if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
//     return response
//   }

//   let pathSegments = req.nextUrl.pathname.split('/').filter(Boolean)
//   console.log('Path Segments:', pathSegments)

//   return NextResponse.next()
// }
