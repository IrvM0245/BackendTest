var sql = require('./db.js');

//Hotel object constructor
var Hotel = function(hotel){
    this.id = hotel.id;
    this.rating = hotel.rating;
    this.name = hotel.name;
    this.site = hotel.site;
    this.email = hotel.email;
    this.phone = hotel.phone;
    this.street = hotel.street;
    this.city = hotel.city;
    this.state = hotel.state;
    this.lat = hotel.lat;
    this.lng = hotel.lng;
};

Hotel.createHotel = function (newHotel, result) {
        sql.query(`Call Hotel_CRUD_C('${newHotel.id}','${newHotel.rating}','${newHotel.name}','${newHotel.site}','${newHotel.email}','${newHotel.phone}','${newHotel.street}','${newHotel.city}','${newHotel.state}','${newHotel.lat}','${newHotel.lng}')`, newHotel, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
};

Hotel.getHotelById = function (hotelId, result) {
        sql.query(`Call Hotel_CRUD_R_ID('${hotelId}')`, hotelId, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

Hotel.getAllHotel = function (result) {
        sql.query("Call Hotel_CRUD_R_ALL", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Hotels : ', res);
                 result(null, res);
                }
            });
};

Hotel.updateById = function(id, hotel, result){
  sql.query(`Call Hotel_CRUD_U('${id}','${hotel.id}','${hotel.rating}','${hotel.name}','${hotel.site}','${hotel.email}','${hotel.phone}','${hotel.street}','${hotel.city}','${hotel.state}','${hotel.lat}','${hotel.lng}')`, [hotel, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};

Hotel.remove = function(id, result){
     sql.query(`Call Hotel_CRUD_D('${id}')`, id, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};

module.exports= Hotel;
