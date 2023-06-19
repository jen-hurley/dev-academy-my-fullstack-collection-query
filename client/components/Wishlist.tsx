import { useQuery } from '@tanstack/react-query'
import { getAllItems } from '../apis/item'

export default function Wishlist() {
  const {
    data: wishListItemList,
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
      <h2> Task List </h2>
      {wishListItemList.map((item) => (
        <WishlistItem
          key={item.id}
          id={item.id}
          priority={item.priority}
          item={item.item}
          category={item.category}
          price={item.price}
        />
      ))}
    </div>
  )
}
