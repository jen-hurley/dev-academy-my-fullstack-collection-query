import request from 'superagent'

import type { Item, AddItem } from '../../models/item'

export async function getAllItems() {
  const response = await request.get('/api/v1/wishlist')

  return response.body as Item[]
}

export async function addItem({
  category,
  item,
  priority,
  price,
}: AddItem): Promise<void> {
  await request
    .post('/api/v1/wishlist')
    .send({ category, item, priority, price })
}

export async function updateItem(
  id: Item['id'],
  updatedCategory: Item['category'],
  updatedItem: Item['item'],
  updatedPriority: Item['priority'],
  updatedPrice: Item['price']
): Promise<void> {
  await request
    .patch(`/api/v1/wishlist/${id}`)
    .send({
      category: updatedCategory,
      item: updatedItem,
      priority: updatedPriority,
      price: updatedPrice,
    })
}
