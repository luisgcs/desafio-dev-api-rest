'use strict'

/*
|--------------------------------------------------------------------------
| AccountSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const AccountModel = use('App/Models/Account')

class AccountSeeder {
  async run () {
    await AccountModel.create({
      idPessoa: 1,
      saldo: 100.00,
      limiteSaqueDiario: 500.00,
      flagAtivo: true,
      tipoConta: 1
    })
  }
}

module.exports = AccountSeeder
