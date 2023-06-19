import WishlistItem from './WishlistItem'
import { useQuery } from '@tanstack/react-query'
import { getAllItems } from '../apis/item'
import { Link } from 'react-router-dom'

export default function WishListEdit() {
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
    <>
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

      <Link to="/">Back to Wishlist</Link>
    </>
  )
}
