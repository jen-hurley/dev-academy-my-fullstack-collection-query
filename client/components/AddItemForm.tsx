import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useState, ChangeEvent } from 'react'
import { NewItem } from '../../models/item'

import { addItem } from '../apis/item'

const initialFormData = {
  category: '',
  item: '',
  priority: 1,
  price: 0,
}

export default function AddItemForm() {
  const [form, setForm] = useState<NewItem>(initialFormData)

  const queryClient = useQueryClient()

  const addItemMutation = useMutation(addItem, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['wishlist'])
    },
  })

  if (addItemMutation.isError) {
    return <div> Sorry! There was an error trying to add your item! </div>
  }

  if (addItemMutation.isLoading) {
    return <div> Adding your item to the list! </div>
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = e.target
    const newList = { ...form, [name]: value }
    setForm(newList)
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    addItemMutation.mutate(form)
    setForm(initialFormData)
  }

  return (
    <>
      <form
        className="add-form"
        onSubmit={handleSubmit}
        aria-label="Add Wishlist Item Form"
      >
        <label htmlFor="item">Item: </label>
        <br />
        <input
          id="item"
          onChange={handleChange}
          value={form.item}
          name="item"
          required
        />
        <br />
        <label htmlFor="category">Category: </label>
        <br />
        <input
          id="category"
          onChange={handleChange}
          value={form.category}
          name="category"
          required
        />
        <br />

        <label htmlFor="priority">Priority: </label>
        <br />
        <select
          name="priority"
          value={form.priority}
          id="priority"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <br />
        <label htmlFor="price">Price: </label>
        <br />
        <input
          id="price"
          onChange={handleChange}
          value={form.price}
          name="price"
          required
        />
        <br />
        <button className="add-button"> Add an item! </button>
      </form>
    </>
  )
}
