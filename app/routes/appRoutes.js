module.exports = function(app) {
  var HotelList = require('../controller/HotelListController');

  // HotelList Routes
  app.route('/hotels')
    .get(HotelList.list_all_hotels)
    .post(HotelList.create_a_hotel);

   app.route('/hotels/:hotelId')
    .get(HotelList.read_a_hotel)
    .put(HotelList.update_a_hotel)
    .delete(HotelList.delete_a_hotel);
    };
