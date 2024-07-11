import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products', (table: Knex.TableBuilder) => {
    table.increments('id').primary().notNullable().unique();
    table.string('name').notNullable().unique()
    table.text('description').notNullable()
    table.double('price').notNullable()
    table.integer('quantity').notNullable()
    table.integer('user_owner_id').unsigned().references('id').inTable('users');
    table.timestamps(true, true);
  });
}
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products');
}
