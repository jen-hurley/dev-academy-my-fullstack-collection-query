export interface Item {
  id: number
  category: string
  item: string
  priority: number
  price: number
}

export interface ItemData {
  category: string
  item: string
  priority: number
  price: number
}

export interface UpdatedItem {
  category?: string
  item?: string
  priority?: number
  price?: number
}

export interface NewItem {
  category: string
  item: string
  priority: number
  price: number
}

export interface EditedItem {
  id: number
  updatedItem: UpdatedItem
}
