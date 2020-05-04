# Welcome to my YelpCamp! 

* The website link is as follows:
* https://frozen-crag-62109.herokuapp.com/

## Initial Setup

Add Landing Page
Add Campgrounds Page that lists all campgrounds
Each Campground has:
Name
Image

## Add Mongoose

Install and configure Mongoose
Setup campground model
Use campground model inside of our routes

## Show Page

Review the RESTful routes we've seen so far
Add description to our campground model
Show db.collection.drop()
Add a show route/template

## Add Seeds File

Add a seeds.js file
Run the seeds file every time the server starts

## Add the Comment model

Display comments on campground show page

## Comment New/Create

Discuss nested routes
Add the comment new and create routes
Add the new comment form

## Users + Comments

Associate users and comments
Save author's name to a comment automatically

## Users + Campgrounds

Prevent an unauthenticated user from creating a campground
Save username+id to newly created campground
Editing Campgrounds
Add Method-Override
Add Edit Route for Campgrounds
Add Link to Edit Page
Add Update Route

## Creating New Campgrounds

Setup new campground POST route
Add in body-parser
Setup route to show form
Add basic unstyled form

## Users + Campgrounds

* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

## Editing Campgrounds

* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

## Deleting Campgrounds

* Add Destroy Route
* Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: 	  /campgrounds/:id/comments/:comment_id

## Authorization

* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons
* Refactor Middleware
