/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
        .createTable("user", table => {
            table.uuid("id").primary()
            table.string("first_name").notNullable()
            table.string("last_name").notNullable()
            table.string("user_name").notNullable().unique()
            table.string("email").notNullable().unique()
            table.string("phone").unique()
            table.float("wallet").defaultTo(0.00)
            table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("user")
}
