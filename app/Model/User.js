'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get hidden () {
    return ['password']
  }

  images () {
    return this.hasMany('App/Model/Image')
  }
  
  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

}
module.exports = User
