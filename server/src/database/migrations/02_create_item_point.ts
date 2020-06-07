import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('item_point', table => {
        table.increments('id').primary();
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items')
            .onDelete('CASCADE')

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('poinst')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTableIfExists('item_point');
}