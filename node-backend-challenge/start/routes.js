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
Route.post('deposit', 'TransactionController.deposit')
Route.get('balance/:id', 'AccountController.balance')
Route.get('transactions/:id', 'AccountController.transactions')
Route.post('withdraw', 'AccountController.withdraw')
Route.resource('user', 'UserController').apiOnly()