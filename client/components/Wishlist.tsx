import { useQuery } from '@tanstack/react-query'
import { getAllItems } from '../apis/item'

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
      {wishListItems.map((item) => (
        <li key={item.id}>
          item: {item.item}
          <br />
          priority: {item.priority}
          <br />
          category: {item.category}
          <br />
          price: {item.price}
        </li>
      ))}
    </div>
  )
}
