import express from 'express'

import { getAllItems, addItem, updateItem, deleteItem } from '../db/db'

import { ItemData } from '../../models/item'

const router = express.Router()

export default router

router.get('/', async (req, res) => {
  try {
    const items = await getAllItems()
    res.json(items)
  } catch (error) {
    res.status(500).json({
      error: 'There was and error trying to get the items from the database',
    })
    console.error(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newItemData = req.body as ItemData
    const newItem = await addItem(newItemData)
    res.json(newItem)
  } catch (error) {
    res.status(500).json({
      error: 'There was an error trying to add a new item to the database',
    })
    console.error(error)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const itemId = parseInt(req.params.id)

    if (isNaN(itemId)) {
      res.status(400).json({
        error: 'Invalid Item ID',
      })
      return
    }

    const updatedItemData = req.body
    const updatedItem = await updateItem(itemId, updatedItemData)
    res.json(updatedItem)
  } catch (error) {
    res.status(500).json({
      error: 'There was an error trying to update the item in the database',
    })
    console.error(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const itemId = parseInt(req.params.id)

    if (isNaN(itemId)) {
      res.status(400).json({ error: 'Invalid Item ID' })
      return
    }
    await deleteItem(itemId)
    res.sendStatus(200)
  } catch (error) {
    res.status(500).json({
      error: 'There was an error trying to delete the item in the database',
    })
  }
})
