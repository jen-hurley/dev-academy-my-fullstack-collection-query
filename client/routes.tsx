import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Wishlist from './components/Wishlist'
import WishlistEdit from './components/WishlistEdit'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/edit" element={<WishlistEdit />} />
  </Route>
)

export const router = createBrowserRouter(routes)
