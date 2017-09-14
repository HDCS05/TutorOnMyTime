var db = require("../models");

// var express = require("express");
// var router = express.Router();

module.exports = function(app) {

	var results;

	app.post("/student", function(req, res){
		
		console.log('works')

		db.Tutors.findAll({
			where: {
				day: req.body.days,
				subject: req.body.subject

			}
		}).then(function(results){
			 // return results[0].name;
			 console.log(results[0].email);
			 console.log(results);

			var name1 = results[0].name;

			var email1 = results[0].email;

			var name2 = results[1].name;

			var email2 = results[1].email;

			var name3 = results[2].name;

			var email3 = results[2].email;

			res.render("student2", {name1: name1, email1: email1, name2: name2, email2: email2, name3: name3, email3: email3})

			});

		
	
	

			db.students.create({
				
				name: req.body.name,

				email: req.body.email,

				subject: req.body.subject

			}).then(function(dbStudents){
				
				// res.redirect("/");

			}).then(function(dbStudents){
				res.json(dbStudents);

			})
			.catch(function(err){
				res.json(err);

			});
		
		})			

	}

