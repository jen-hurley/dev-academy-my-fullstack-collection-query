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
      <table>
        <tbody>
          <tr key="table-headers">
            <th>Priority </th>
            <th>Category</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
          {wishListItems.map((item) => (
            <tr key={item.id}>
              <td>{item.priority}</td>
              <td>{item.category}</td>
              <td>{item.item}</td>
              <td>$ {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
    </div>
  )
}
