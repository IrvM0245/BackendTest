var Restaurant = require('../model/appModel.js');

exports.list_all_restaurants = function(req, res) {
  Restaurant.getAllRestaurant(function(err, restaurant) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', restaurant);
    res.send(restaurant);
  });
};

exports.create_a_restaurant = function(req, res) {
  var new_restaurant = new Restaurant(req.body);

  //handles null error
   if( !new_restaurant.id || !new_restaurant.rating || !new_restaurant.name || !new_restaurant.site || !new_restaurant.email
       || !new_restaurant.phone || !new_restaurant.street || !new_restaurant.city || !new_restaurant.state || !new_restaurant.lat || !new_restaurant.lng){

            res.status(400).send({ error:true, message: 'Please provide restaurant data' });

        }
else{

  Restaurant.createRestaurant(new_restaurant, function(err, restaurant) {

    if (err)
      res.send(err);
    res.json(restaurant);
  });
}
};


exports.read_a_restaurant = function(req, res) {
  Restaurant.getRestaurantById(req.params.restaurantId, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};


exports.update_a_restaurant = function(req, res) {
  Restaurant.updateById(req.params.restaurantId, new Restaurant(req.body), function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};


exports.delete_a_restaurant = function(req, res) {
  Restaurant.remove( req.params.restaurantId, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json({ message: 'Restaurant successfully deleted' });
  });
};
