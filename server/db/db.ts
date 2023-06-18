import connection from './connection'

import { Item, ItemData, UpdatedItem } from '../../models/item'

export async function getAllItems(db = connection): Promise<Item[]> {
  const allItems = await db('wishlist').select()

  return allItems
}

export async function addItem(item: ItemData, db = connection): Promise<Item> {
  const [newItem] = await db('wishlist').insert(item).returning('*')

  return newItem
}

export async function updateItem(
  id: number,
  item: UpdatedItem,
  db = connection
): Promise<Item[]> {
  const updatedItem = await db('wishlist')
    .update(item)
    .where({ id })
    .returning('*')

  return updatedItem
}

export async function deleteItem(id: number, db = connection): Promise<void> {
  await db('wishlist').delete().where({ id })
}
