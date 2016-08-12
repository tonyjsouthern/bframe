'use strict'

const Image = use('App/Model/Image')

class ImageController {

  * index (request, response){
    let images = yield Image.all();
    yield response.json(images.toJSON());
  }

  * show (request, response) {
    let image = yield Image.findBy('id', request.param('id'));
    yield response.json(image.toJSON());
  }

  * store (request, response) {
    console.log(request.authUser)
    let data =  request.only('url');
    data.user_id = request.authUser.attributes.id

    let newImage = yield Image.create(data);
    yield response.json(newImage.toJSON());
  }
}

module.exports = ImageController
