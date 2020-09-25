'use strict'

const Account = require('../../Models/Account');
const Database = use("Database")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class OperationController {

    /**
   * Display a balance of a specific account.
   * GET balance
   *
   * @param {object} ctx
   */
    async balance({ params }) {
        const account = await Account.findOrFail(params.id);
        return {
            saldo: account.saldo
        };
    }

    /**
   * Make a deposit to a specific account.
   * POST deposit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
    async deposit({ request }) {
        const data = request.only(['idConta', 'valor', 'dataTransacao']);
        const transaction = await Transaction.create({ ...data });

        const account = await Account.findOrFail(transaction.idConta);

        account.merge({
            saldo: account.saldo + transaction.valor
        })

        await account.save();

        return transaction;
    }

    /**
     * Make a withdraw to a specific account.
     * POST withdraw
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     */
    async withdraw({ request }) {
        const data = request.only(['idConta', 'valor', 'dataTransacao']);
        const transaction = await Transaction.create({ ...data });

        const account = await Account.findOrFail(transaction.idConta);

        account.merge({
            saldo: account.saldo - transaction.valor
        })

        await account.save();

        return transaction;
    }

    /**
     * Suspend a specific account.
     * GET suspend
     *
     * @param {object} ctx
     */
    async suspend({ params }) {
        const account = await Account.findOrFail(params.id);
        account.merge({
            flagAtivo: false
        })
        await account.save()

        return account
    }

    /**
     * Get transactions for a specific account.
     * GET transactions
     *
     * @param {object} ctx
     */
    async transactions({ params }) {
        const transactions = await Database.from('transactions').where("idConta", params.id)
        return transactions;
    }
}

module.exports = OperationController
