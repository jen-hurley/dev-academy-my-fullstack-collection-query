import { Item } from '../../models/item'

import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteItem, updateItem } from '../apis/item'

interface Props {
  id: number
  category: string
  item: string
  priority: number
  price: number
}

export default function WishlistItem({
  id,
  category,
  item,
  priority,
  price,
}: Props) {
  const [updating, setUpdating] = useState(false)
  const [itemText, setItemText] = useState(item)
  const [categoryText, setCategoryText] = useState(category)
  const [priorityText, setPriorityText] = useState(priority)
  const [priceText, setPriceText] = useState(price)

  const queryClient = useQueryClient()

  const deleteItemMutation = useMutation(deleteItem, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['wishlist'])
    },
  })

  const updateItemMutation = useMutation(updateItem, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['wishlist'])
    },
  })

  const handleDeleteClick = () => {
    deleteItemMutation.mutate({ id })
  }

  const handleUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateItemMutation.mutate({
      id,
      updatedCategory: categoryText,
      updatedItem: itemText,
      updatedPriority: priorityText,
      updatedPrice: priceText,
    })

    setUpdating(false)
  }

  const handleStopUpdatingClick = () => {
    setUpdating(false)
    setItemText(item)
    setCategoryText(category)
    setPriorityText(priority)
    setPriceText(price)
  }

  const handleStartUpdatingClick = () => {
    setUpdating(true)
  }

  return (
    <div>
      {updating ? (
        <form onSubmit={handleUpdateSubmit}>
          <input
            type="text"
            value={itemText}
            onChange={(e) => setItemText(e.target.value)}
          />
          <input
            type="text"
            value={categoryText}
            onChange={(e) => setCategoryText(e.target.value)}
          />

          <input
            type="text"
            value={priorityText}
            onChange={(e) => setPriorityText(Number(e.target.value))}
          />

          <input
            type="text"
            value={priceText}
            onChange={(e) => setPriceText(Number(e.target.value))}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleStopUpdatingClick}></button>
        </form>
      ) : (
        <>
          <div>
            {item} -- {category} -- {priority} -- $ {price}
            <button onClick={handleStartUpdatingClick}>Update Item</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        </>
      )}
    </div>
  )
}
