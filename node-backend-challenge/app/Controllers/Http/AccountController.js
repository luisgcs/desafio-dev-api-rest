'use strict'

const Account = require('../../Models/Account');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const account = use('App/Models/Account');

/**
 * Resourceful controller for interacting with accounts
 */
class AccountController {
  /**
   * Show a list of all accounts.
   * GET accounts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const accounts = await Account.all();
    return accounts;
  }

  /**
   * Create/save a new account.
   * POST accounts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(['idPessoa', 'saldo', 'limiteSaqueDiario', 'flagAtivo', 'tipoConta']);
    const account = await Account.create({...data});

    return account; 
  }

  /**
   * Display a single account.
   * GET accounts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const account = await Account.findOrFail(params.id);
    return account;
  }

  /**
   * Update account details.
   * PUT or PATCH accounts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
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
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const account = await Account.findOrFail(params.id);
    await account.delete();
  }
}

module.exports = AccountController
