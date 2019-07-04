module.exports = function(app) {
  var RestaurantList = require('../controller/RestaurantListController');

  // RestaurantList Routes
  app.route('/restaurants')
    .get(RestaurantList.list_all_restaurants)
    .post(RestaurantList.create_a_restaurant);

   app.route('/restaurants/:restaurantId')
    .get(RestaurantList.read_a_restaurant)
    .put(RestaurantList.update_a_restaurant)
    .delete(RestaurantList.delete_a_restaurant);

    app.route('/restaurants/statistics?latitude=x&longitude=y&radius=z')
     .get(RestaurantList.read_a_restaurant)
  };
