var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
var NodeGeocoder = require("node-geocoder");

var options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

//mapbox
let geo = require('mapbox-geocoding');

geo.setAccessToken(process.env.MAPBOX_GEOCODING_API_KEY);

//INDEX - show all campgrounds
router.get("/", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
          res.render("campgrounds/index",{campgrounds: allCampgrounds, page: 'campgrounds'});
       }
    });
});


//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var price = req.body.price;
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	
	geo.geocode('mapbox.places', req.body.location, function(err, geoData) {
        if (err) {
            console.log(req.body.location, geoData);
            req.flash('error', err.message);
            return res.redirect('back');
        }
        var foundLocation = geoData.features[0];
        var lat = foundLocation.geometry.coordinates[0];
        var lng = foundLocation.geometry.coordinates[1];
        var location = foundLocation.place_name;
        var newCampground = { name: name, price: price, image: image, description: desc, author: author, location: location, lat: lat, lng: lng };

	
	
	//Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err) {
			console.log(err);
		}
		else {	
			//redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	});
});
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res){
	res.render("campgrounds/new");
});

//SHOW - shows more info about one campgoround
router.get("/:id", function(req, res){
	//find the campground with provided ID
	Campground.findById(req.params.id).populate("comments").exec( function(err, foundCampground){
		if(err) {
			console.log(err);
		}
		else {
			console.log(foundCampground);
			//render show template with that campground
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
});

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
	//is user logged in?
	Campground.findById(req.params.id, function(err, foundCampground){
		res.render("campgrounds/edit", {campground: foundCampground});
	});
});

// Update campground route
router.put("/:id", middleware.checkCampgroundOwnership, (req, res) => {

    geo.geocode('mapbox.places', req.body.campground.location, function(err, geoData) {
        if (err) {
            console.log(req.body.campground.location, geoData);
            req.flash('error', err.message);
            return res.redirect('back');
        }
        var foundLocation = geoData.features[0];
        var lat = foundLocation.geometry.coordinates[0];
        var lng = foundLocation.geometry.coordinates[1];
        var location = foundLocation.place_name;
        
        var campground = req.body.campground;
        var newData = { name: campground.name, price: campground.price, image: campground.image, description: campground.description, location: location, lat: lat, lng: lng };
        console.log(newData);
        Campground.findByIdAndUpdate(req.params.id, { $set: newData }, function(err, campground) {
            if (err) {
                req.flash("error", err.message);
                res.redirect("back");
            }
            else {
                req.flash("success", "Successfully Updated!");
                res.redirect("/campgrounds/" + campground._id);
            }
        });
    });
});

//DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err){
		if(err) {
			res.redirect("/campgrounds");
		}
		else {
			res.redirect("/campgrounds");
		}
	})
});

module.exports = router;