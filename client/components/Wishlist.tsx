import { useQuery } from '@tanstack/react-query'
import { getAllItems } from '../apis/item'
import AddItemForm from './AddItemForm'
import WishlistItem from './WishlistItem'

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
      {/* <ul>
        {wishListItems.map((item) => (
          <li key={item.id}>
            item: {item.item} | priority: {item.priority} | category:{' '}
            {item.category} | price: {item.price} |
          </li>
        ))}
      </ul> */}
      <table>
        <tr>
          <th>Priority: </th>
          <th>Category:</th>
          <th>Item:</th>
          <th>Price:</th>
        </tr>
        {wishListItems.map((item) => (
          <>
            <tr>
              <td>{item.priority}</td>
              <td>{item.category}</td>
              <td>{item.item}</td>
              <td>$ {item.price}</td>
            </tr>
          </>
        ))}
      </table>
      {/* <ul>
        {wishListItems.map((item) => (
          <WishlistItem
            key={item.id}
            id={item.id}
            item={item.item}
            category={item.category}
            priority={item.priority}
            price={item.price}
          />
        ))}
      </ul> */}

      <br />
    </div>
  )
}
