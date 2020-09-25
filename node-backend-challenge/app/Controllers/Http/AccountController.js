'use strict'


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Database = use("Database")
const Account = use("App/Models/Account")
const Transaction = use("App/Models/Transaction")

/**
 * Resourceful controller for interacting with accounts
 */
class AccountController {
  /**
   * Show a list of all accounts.
   * GET accounts
   */
  async index() {
    // const transactions = await Database.from('transactions').where("idConta", params.id)
    const accounts = await Database.from('accounts').where("flagAtivo", 1);
    return accounts;
  }

  /**
   * Create/save a new account.
   * POST accounts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async store({ request }) {
    const data = request.only(['idPessoa', 'saldo', 'limiteSaqueDiario', 'flagAtivo', 'tipoConta']);
    const account = await Account.create({...data});

    return account; 
  }

  /**
   * Display a single account.
   * GET accounts/:id
   *
   * @param {object} ctx
   */
  async show({ params }) {
    const account = await Account.findOrFail(params.id);
    return account;
  }

  /**
   * Update account details.
   * PUT or PATCH accounts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update({ params, request }) {
    const account = await Account.findOrFail(params.id);
    const data = request.only(['idPessoa', 'saldo', 'limiteSaqueDiario', 'flagAtivo', 'tipoConta']);
    
    account.merge(data);
    await account.save();
    
    return account
  }

  /**
   * Delete a account with id.
   * DELETE accounts/:id
   *
   * @param {object} ctx
   */
  async destroy({ params }) {
    const account = await Account.findOrFail(params.id);
    await account.delete();
  }
}

module.exports = AccountController
