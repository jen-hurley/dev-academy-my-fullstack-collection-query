import { useQuery } from '@tanstack/react-query'
import { getAllItems } from '../apis/item'
import AddItemForm from './AddItemForm'

export default function Wishlist() {
  const {
    data: wishListItems,
    isError,
    isLoading,
  } = useQuery(['wishlist'], getAllItems)

  if (isError) {
    return (
      <div>
        Sorry! There was an error while trying to list the Wishlist items!
      </div>
    )
  }

  if (isLoading) {
    return <div> Loading items...</div>
  }

  return (
    <div>
      <ul>
        {wishListItems.map((item) => (
          <li key={item.id}>
            item: {item.item} | priority: {item.priority} | category:{' '}
            {item.category} | price: {item.price} |
          </li>
        ))}
      </ul>
      <br />
      <AddItemForm />
    </div>
  )
}
