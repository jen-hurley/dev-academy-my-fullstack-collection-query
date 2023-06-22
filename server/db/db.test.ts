import { beforeAll, beforeEach, afterAll, describe, it, expect } from 'vitest'

const connection = require('./connection')

const db = require('./db')

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

afterAll(() => {
  return connection.destroy()
})

describe('getAllItems', () => {
  it('should return a list of wishlist items', async () => {
    const items = await db.getAllItems()
    expect(items).toMatchInlineSnapshot()
  })
})
