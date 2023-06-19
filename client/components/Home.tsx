import AddItemForm from './AddItemForm'
import Wishlist from './Wishlist'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Wishlist />
      <div className="edit-link">
        <Link to={`/edit`}>Edit and Delete Items</Link>
      </div>
      <br />
      <br />
      <h2> Add a new item: </h2>
      <div>
        <AddItemForm />
      </div>
    </>
  )
}
