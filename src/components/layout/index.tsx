import Loading from 'components/Loading'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'

import styles from './layout.module.scss'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<div>error</div>}>
            <main>
              <Outlet />
            </main>
          </ErrorBoundary>
        </Suspense>
        <Navbar />
      </div>
    </div>
  )
}

export default Layout
