'use strict'

const Schema = use('Schema')

class ImagesSchema extends Schema {

  up () {
    this.create('images', (table) => {
      table.increments()
      table.integer('user_id');
      table.string('url') 
      table.timestamps()

    })
  }

  down () {
    this.drop('images')
  }

}

module.exports = ImagesSchema
