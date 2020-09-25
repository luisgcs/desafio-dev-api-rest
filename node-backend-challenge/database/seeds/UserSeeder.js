'use strict'

const User = require('../../app/Models/User')

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const UserModel = use('App/Models/User')

class UserSeeder {
  async run () {
    await UserModel.create({
      nome: "Usuário Teste",
      cpf: "00000000000",
      dataNascimento: "1998-09-08"
    })
    
    await UserModel.create({
      nome: "Segundo Usuário Teste",
      cpf: "00000000001",
      dataNascimento: "1998-09-08"
    })
  }
}

module.exports = UserSeeder
