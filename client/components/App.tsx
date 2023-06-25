import { Outlet } from 'react-router-dom'

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
