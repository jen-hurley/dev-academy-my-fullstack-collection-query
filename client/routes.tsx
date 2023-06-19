import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Wishlist from './components/Wishlist'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />} />
    <Route path="/wishlist" element={<Wishlist />} />
  </Route>
)
