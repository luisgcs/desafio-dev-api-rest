'use strict'

const User = use("App/Models/User")

class UserController {
    /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
    async index() {
        const users = await User.all();
        return users;
    }

    /**
     * Create/save a new user.
     * POST users
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request }) {
        const data = request.only(['nome', 'cpf', 'dataNascimento']);
        const user = await User.create({ ...data });

        return user;
    }

    /**
     * Display a single user.
     * GET users/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params }) {
        const user = await User.findOrFail(params.id);
        return user;
    }

    /**
     * Update user details.
     * PUT or PATCH users/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request }) {
        const user = await User.findOrFail(params.id);
        const data = request.only(['nome', 'cpf', 'dataNascimento']);

        user.merge(data);
        await user.save();

        return user
    }

    /**
     * Delete a user with id.
     * DELETE users/:id
     *
     * @param {object} ctx
     */
    async destroy({ params }) {
        const user = await User.findOrFail(params.id);
        await user.delete();
    }
}

module.exports = UserController
