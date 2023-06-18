/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('wishlist', function (table) {
    table.increments('id').primary()
    table.string('category')
    table.string('item')
    table.integer('priority')
    table.integer('price')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('wishlist')
}
