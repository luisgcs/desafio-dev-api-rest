'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.integer('idPessoa').unsigned().references('id').inTable('users')
      table.float('saldo').notNullable()
      table.float('limiteSaqueDiario').notNullable()
      table.boolean('flagAtivo').notNullable()
      table.integer('tipoConta').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
