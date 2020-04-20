var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://images.unsplash.com/photo-1490452322586-70484206da38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "blahd buibiud"
	},
	
	{
		name: "Desert Mesa",
		image: "https://images.unsplash.com/photo-1527931548997-178c464df936?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "Very nice park! Easy to navigate and beautifully landscaped. Staff was amazing and we were there for the first month of the COVID 19 event. Laundry is .75 to wash and .75 to dry; very nicely maintained. The park is so nice and we had big plans for surrounding hiking trails but the ones we scouted out were closed. The park is treated by True green for weeds and they sprayed everywhere, even right around our motorhome. I am highly allergic and we both started having symptoms the next morning. I felt bad for all the pets. Plus the base CO closed access for retirees to the main base which included mail, gym, car wash, auto hobby shop, commissary, and exchange. We had to pay for a post office box to get USPS mail for prescriptions yet could not get our mail without forwarding off base to general delivery. We left early. UPS and FEDEX deliver right to the site so that was nice. We also got on a waiting list for the older larger sites and got to move after only seven days. The newer sites are pretty close together but still very nice. We camped at Desert Eagle RV Park (Military FamCamp) in a Motorhome."
	},
	
	{
		name: "Canyon Floor",
		image: "https://images.unsplash.com/photo-1544239649-4238bf7bd7d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
		description: "blahd buibiud"
	}
];

function seeDB(){
	//remove all campgrounds
	Campground.deleteMany({}, function(err){
		// if(err){
		// 	console.log(err);	
		// }
		// console.log("removed campgrounds!");
		// //add a few campgrounds
		// data.forEach(function (seed){
		// 	Campground.create(seed, function(err, campground){
		// 		if(err) {
		// 			console.log(err);
		// 		}
		// 		else {
		// 			console.log("added a campground");
		// 			//Create a comment
		// 			Comment.create(
		// 				{
		// 					text: "This place is great, but I wish there was internet",
		// 					author: "Homer"
		// 				}, function(err, comment){
		// 					if(err) {
		// 						console.log(err);
		// 					}
		// 					else {
		// 						campground.comments.push(comment);
		// 						campground.save();
		// 						console.log("Created a new comment!")
		// 					}
		// 				});
					
		// 		}
		// 	});
		// });
		
		
		
		
	});
	
	//add a few comments
}

module.exports = seeDB;