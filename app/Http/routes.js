'use strict'

// const Lucid = use('Lucid')
//
// // class User extends Lucid {
// //
// //   static get hidden () {
// //     return ['password']
// //   }
// //
// //   apiTokens () {
// //     return this.hasMany('App/Model/Token')
// //   }
// //
// // }
// module.exports = User

const Route = use('Route')

Route.on('/').render('welcome')

// Registration and Login
Route.post('/register', 'UserController.store')
Route.post('/login', 'UserController.login')
Route.get('/profile', 'UserController.show').middleware('auth')
