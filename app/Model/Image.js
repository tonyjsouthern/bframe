'use strict'

const Lucid = use('Lucid')

class Image extends Lucid {

user () {
  return this.belongsTo('App/Model/User')
}

}

module.exports = Image
