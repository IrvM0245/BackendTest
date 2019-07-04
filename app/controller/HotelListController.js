var Hotel = require('../model/appModel.js');

exports.list_all_hotels = function(req, res) {
  Hotel.getAllHotel(function(err, hotel) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', hotel);
    res.send(hotel);
  });
};

exports.create_a_hotel = function(req, res) {
  var new_hotel = new Hotel(req.body);

  //handles null error
   if( !new_hotel.id || !new_hotel.rating || !new_hotel.name || !new_hotel.site || !new_hotel.email
       || !new_hotel.phone || !new_hotel.street || !new_hotel.city || !new_hotel.state || !new_hotel.lat || !new_hotel.lng){

            res.status(400).send({ error:true, message: 'Please provide hotel data' });

        }
else{

  Hotel.createHotel(new_hotel, function(err, hotel) {

    if (err)
      res.send(err);
    res.json(hotel);
  });
}
};


exports.read_a_hotel = function(req, res) {
  Hotel.getHotelById(req.params.hotelId, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};


exports.update_a_hotel = function(req, res) {
  Hotel.updateById(req.params.hotelId, new Hotel(req.body), function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};


exports.delete_a_hotel = function(req, res) {
  Hotel.remove( req.params.hotelId, function(err, hotel) {
    if (err)
      res.send(err);
    res.json({ message: 'Hotel successfully deleted' });
  });
};
