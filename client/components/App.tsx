import { Outlet } from 'react-router-dom'
import Wishlist from './Wishlist'

function App() {
  return (
    <>
      <header className="header">
        <h1>WishList</h1>
      </header>
      <section className="main">
        <Outlet />
      </section>
    </>
  )
}

export default App
