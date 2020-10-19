'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Post = use('App/Models/Post');

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response, pagination }) {
    const { page, limit } = pagination;
    const post = await Post.query().where('active', true).paginate(page, limit);
    return response.send(post);
  }

  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const { post } = request.all();

      const postQuery = await Post.create(post);

      response.json(postQuery);
    } catch (error) {
      response.send({ message: 'Error ao salvar post', error });
    }
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params: { id }, response }) {
    try {
      const post = await Post.query().where({ id }).fetch();

      return response.send(post);
    } catch (error) {
      return response.send(error);
    }
  }

  async update({ params: { id }, request, response }) {
    try {
      const { post } = request.all();

      const postQuery = await Post.findOrFail(id);

      await postQuery.merge(post);

      await postQuery.save();

      response.json(postQuery);
    } catch (error) {
      response.send({ message: 'Error ao atualizar post', error });
    }
  }

}

module.exports = PostController;
