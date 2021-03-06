'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { message: 'Hello world!' }
})

Route.resource('account', 'AccountController').apiOnly()
Route.resource('transaction', 'TransactionController').apiOnly()
Route.get('balance/:id', 'OperationController.balance')
Route.get('transactions/:id', 'OperationController.transactions')
Route.get('suspend/:id', 'OperationController.suspend/:id')
Route.post('deposit', 'OperationController.deposit')
Route.post('withdraw', 'OperationController.withdraw')
Route.resource('user', 'UserController').apiOnly()