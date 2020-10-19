'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up() {
    this.create('posts',(table) => {
      table.increments()
      table.text('title',80);
      table.text('description');
      table.text('image_url');
      table.boolean('active').defaultTo(true);
      table.timestamps()
    })
  }

  down() {
    this.drop('posts');
  }
}

module.exports = PostSchema;
