import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from 'components/layout'
import Home from './home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
