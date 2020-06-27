
exports.up = async function(knex) {
    await knex.schema
        .createTable("project_table", (table) => {
            table.increments("id")
            table.text("name").notNull()
            table.text("description")
            table.boolean("completed").notNull().defaultTo(false)
        })
        .createTable("resource_table", (table) => {
            table.increments("id")
            table.text("name").notNull()
            table.text("description")
        })
        .createTable("project_resource", (table) => {
            table.integer("project_id")
                .unsigned()
                .notNull()
                .references("id")
                .inTable("project_table")
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.integer("resource_id")
                .unsigned()
                .notNull()
                .references("id")
                .inTable("resource_table")
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
        .createTable("task_table", (table) => {
            table.increments("id")
            table.text("description").notNull()
            table.text("notes")
            table.boolean("completed").notNull().defaultTo(false)
            table.integer("project_id")
                .unsigned()
                .notNull()
                .references("id")
                .inTable("project_table")
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists("task_table")
    .dropTableIfExists("project_resource")
    .dropTableIfExists("resource_table")
    .dropTableIfExists("project_table")
};
