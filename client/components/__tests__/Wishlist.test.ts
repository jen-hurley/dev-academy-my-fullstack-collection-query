// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import {
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { renderRoute } from '../../test-utils'
import nock from 'nock'

describe('<Wishlist>', () => {
  it('should render a table of wishlist items', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/wishlist')
      .reply(200, [
        { id: 1, category: 'clothes', item: 'jumper', priority: 1, price: 20 },
        { id: 2, category: 'tech', item: 'iPad', priority: 2, price: 1000 },
        { id: 3, category: 'fun', item: 'gig tickets', priority: 3, price: 30 },
      ])

    renderRoute('/')

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))

    const table = screen.getByRole('table')
    const tableData = within(table)
      .getAllByRole('cell')
      .map((td) => td.textContent)

    expect(tableData).toMatchInlineSnapshot(`
      [
        "1",
        "clothes",
        "jumper",
        "$ 20",
        "2",
        "tech",
        "iPad",
        "$ 1000",
        "3",
        "fun",
        "gig tickets",
        "$ 30",
      ]
    `)

    expect(scope.isDone()).toBe(true)
  })
  it('it should render a loading indicator', async () => {
    nock('http://localhost')
      .get('/api/v1/wishlist')
      .reply(200, [
        { id: 1, category: 'clothes', item: 'jumper', priority: 1, price: 20 },
        { id: 2, category: 'tech', item: 'iPad', priority: 2, price: 1000 },
        { id: 3, category: 'fun', item: 'gig tickets', priority: 3, price: 30 },
      ])

    renderRoute('/')

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
  it('should render an error message when something goes wrong', async () => {
    const scope = nock('http://localhost').get('/api/v1/wishlist').reply(500)

    renderRoute('/')

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))

    expect(screen.getByText(/error/i)).toBeInTheDocument()
    expect(scope.isDone()).toBe(true)
  })
})
