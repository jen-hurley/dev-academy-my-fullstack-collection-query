import { beforeAll, beforeEach, afterAll, describe, it, expect } from 'vitest'

import connection from './connection'

import * as db from './db'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(() => {
  return connection.destroy()
})

describe('getAllItems', () => {
  it('should return a list of wishlist items', async () => {
    const items = await db.getAllItems()
    expect(items).toMatchInlineSnapshot(`
      [
        {
          "category": "clothes",
          "id": 1,
          "item": "jumper",
          "price": 20,
          "priority": 1,
        },
        {
          "category": "tech",
          "id": 2,
          "item": "iPad",
          "price": 1000,
          "priority": 2,
        },
        {
          "category": "fun",
          "id": 3,
          "item": "gig tickets",
          "price": 30,
          "priority": 3,
        },
      ]
    `)
  })
})
