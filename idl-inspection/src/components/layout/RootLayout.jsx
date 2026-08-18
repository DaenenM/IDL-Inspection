import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import { PageTitle } from './PageTitle'
import { Spinner } from '@/components/ui'

function PageFallback() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center">
      <Spinner />
    </div>
  )
}

/**
 * Shared page chrome. Router renders the active page into <Outlet />, so the
 * header and footer never unmount between navigations.
 *
 * Suspense sits inside the layout rather than around the whole router: at the
 * top level its fallback would replace the header, footer, and ScrollToTop
 * itself while a lazy page chunk loads, remounting them on every first visit
 * to a route.
 */
export function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-base-200">
      <PageTitle />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
