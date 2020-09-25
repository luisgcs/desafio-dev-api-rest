'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with transactions
 */
const Transaction = use("App/Models/Transaction")
const Account = use("App/Models/Account")

class TransactionController {
  /**
   * Show a list of all transactions.
   * GET transactions
   *
   */
  async index () {
    const transactions = await Transaction.all();
    return transactions;
  }

  /**
   * Create/save a new transaction.
   * POST transactions
   *
   * @param {object} ctx
   * @param {Request} ctx.request 
   */
  async store ({ request }) {
    const data = request.only(['idConta', 'valor', 'dataTransacao']);
    const transaction = await Transaction.create({...data});

    return transaction;
  }

  /**
   * Display a single transaction.
   * GET transactions/:id
   *
   * @param {object} ctx 
   */
  async show ({ params }) {
    const transaction = await Transaction.findOrFail(params.id);
    return transaction;
  }

  /**
   * Update transaction details.
   * PUT or PATCH transactions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
    const transaction = await Transaction.findOrFail(params.id);
    const data = request.only(['idConta', 'valor', 'dataTransacao']);
    
    transaction.merge(data);
    await transaction.save();
    
    return transaction
  }

  /**
   * Delete a transaction with id.
   * DELETE transactions/:id
   *
   * @param {object} ctx 
   */
  async destroy ({ params }) {
    const transaction = await Transaction.findOrFail(params.id);
    await transaction.delete();
  }
}

module.exports = TransactionController
