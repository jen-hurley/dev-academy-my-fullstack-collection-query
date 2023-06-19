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
  todo.it(`should return a list of all the wishlist items`)
})
