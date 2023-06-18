/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('wishlist').del()
  await knex('wishlist').insert([
    { id: 1, category: 'clothes', item: 'jumper', priority: 1, price: 20 },
    { id: 2, category: 'tech', item: 'iPad', priority: 2, price: 1000 },
    { id: 3, category: 'fun', item: 'gig tickets', priority: 3, price: 30 },
  ])
}
