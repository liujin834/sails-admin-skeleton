/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  fetch : function (req, res){

    var sql = {};

    var query = User.find(sql).limit(10);

    query.exec(function(err,users){

      if(err){
        console.log(err);
        res.send(500, "error in sql");
      }

      res.send({
        model : users
      });

    });

  },

  statistics : function(req,res){

    var sql = "select " +
              " DATE_FORMAT(time_create,'%Y%m%d') as ts," +
              "count(id) as count , " +
              "DATE_FORMAT(time_create,'%Y') as year," +
              "DATE_FORMAT(time_create,'%m') as month, " +
              "DATE_FORMAT(time_create,'%d') as day " +
              " from user group by ts ORDER BY ts ASC";

    //promisify
    User.query(sql, function(err, results) {
      if(err){
        console.log(err);
        res.send(500, "error in sql");
      }

      res.send({
        model : results
      });

    });

  }

};

