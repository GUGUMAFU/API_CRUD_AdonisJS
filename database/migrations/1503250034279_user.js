'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nome', 80).notNullable().unique()
      table.string('CRM', 254).notNullable().unique()
      table.string('fixFone', 60).notNullable()
      table.string('fone', 60).notNullable()
      table.string('cep', 60).notNullable()
      table.string('numero', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
