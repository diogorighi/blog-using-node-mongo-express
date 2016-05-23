Landing Page with a blog
=========================

A blog example using NodeJS (EJS template engine), MongoDB and Express.

The page is divided into two parts

* A landing page with static information about a company.
* A Blog where visitors can read posts added by the web admin.  

Blog 
-----

* Admin dashboard for manager the blog can be accessed in: *http://yourserver/dashboard* 

>Note: The authentication page is not implemented yet

Configuration
-------------

In the application main file, *app.js*, you can view a variable called 'settings'.
First you need to change the 'url' parameter for your server location and then change the title of your WebSite.

`
app.set('settings', { 
				title: '[ Meu Site ]',
				url: 'http://localhost:3000',
});
`


Configure your database address by changing the code below in *app.js*

`mongoose.connect('mongodb://localhost:27017/blog'); // connect to database`


Create new modules
------------------

This project can be used as a template to create new modules for a dashboard.

For a new module it is necessary to add some files into those folders:
- models: This folder has the Schemes of your collections. You need create one file per collection.
- routes/admin: Here you can add router files for you dashboard. Note that *routes/web* is designed for a public website.  
- views/admin: Views that is used *only* in the dashboard area. 


Furthermore, remember to add your custom routers on *app.js*
