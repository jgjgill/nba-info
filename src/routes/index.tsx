import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

import Layout from 'components/layout'
import TeamInfo from 'components/team/TeamInfo'

const Home = lazy(() => import('./home'))
const Subscribe = lazy(() => import('./team'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='team' element={<Subscribe />}>
            <Route path=':teamId' element={<TeamInfo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
