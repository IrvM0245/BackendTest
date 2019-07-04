var sql = require('./db.js');

//Restaurant object constructor
var Restaurant = function(restaurant){
    this.id = restaurant.id;
    this.rating = restaurant.rating;
    this.name = restaurant.name;
    this.site = restaurant.site;
    this.email = restaurant.email;
    this.phone = restaurant.phone;
    this.street = restaurant.street;
    this.city = restaurant.city;
    this.state = restaurant.state;
    this.lat = restaurant.lat;
    this.lng = restaurant.lng;
};

Restaurant.createRestaurant = function (newRestaurant, result) {
        sql.query(`Call Restaurant_CRUD_C('${newRestaurant.id}','${newRestaurant.rating}','${newRestaurant.name}','${newRestaurant.site}','${newRestaurant.email}','${newRestaurant.phone}','${newRestaurant.street}','${newRestaurant.city}','${newRestaurant.state}','${newRestaurant.lat}','${newRestaurant.lng}')`, newRestaurant, function (err, res) {

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

Restaurant.getRestaurantById = function (restaurantId, result) {
        sql.query(`Call Restaurant_CRUD_R_ID('${restaurantId}')`, restaurantId, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
};

Restaurant.getAllRestaurant = function (result) {
        sql.query("Call Restaurant_CRUD_R_ALL", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Restaurants : ', res);
                 result(null, res);
                }
            });
};

Restaurant.updateById = function(id, restaurant, result){
  sql.query(`Call Restaurant_CRUD_U('${id}','${restaurant.id}','${restaurant.rating}','${restaurant.name}','${restaurant.site}','${restaurant.email}','${restaurant.phone}','${restaurant.street}','${restaurant.city}','${restaurant.state}','${restaurant.lat}','${restaurant.lng}')`, [restaurant, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};

Restaurant.remove = function(id, result){
     sql.query(`Call Restaurant_CRUD_D('${id}')`, id, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};

module.exports= Restaurant;
