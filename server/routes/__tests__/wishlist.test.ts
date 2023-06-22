import { describe, it, expect, vi } from 'vitest'

import server from '../../server'

import request from 'superagent'

import * as db from '../../db/db'

vi.mock('../../db/db')

describe('GET /api/v1/wishlist', () => {
  it('should return an array of wishlist items', async () => {
    vi.mocked(db.getAllItems).mockResolvedValue([
      { id: 1, category: 'clothes', item: 'jumper', priority: 1, price: 20 },
    ])

    const response = await request(server).get('/api/v1/wishlist')

    expect(response.body).toMatchInlineSnapshot()
  })

  it('should show an error message when the db fails', async () => {
    vi.mocked(db.getAllItems).mockRejectedValue(
      new Error('SQLITE ERROR: There was an error')
    )
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const response = (await request(server)).get('/api/v1/wishlist')

    expect(console.error).toHaveBeenCalledWith(
      new Error('SQLITE ERROR: There was an error')
    )

    expect(response.body.error).toBe(
      'There was and error trying to get the items from the database'
    )
  })
})
