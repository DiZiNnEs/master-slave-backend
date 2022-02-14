import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    knex.schema.createTable('user', (table) => {
        table.increments('id')
        table.string('email', 256)
        table.string('first_name', 128)
        table.string('last_name', 128)
        table.string('phone', 64)
        table.string('city_of_residence', 128)
        table.date('date_of_birth')
        table.string('gender', 64)
        table.string('citizenship', 128)
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('user')
}

