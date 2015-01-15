'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Html = require('./html.jsx');
var Home = require('./views/home.jsx');
var About = require('./views/about.jsx');
var AboutTab1 = require('./views/about-tab1.jsx');
var AboutTab2 = require('./views/about-tab2.jsx');
var NotFound = require('./404.jsx');

var routes = (
	<Route name="html" path="/" handler={Html}>
		<Route name="home" path="/" handler={Home}/>
		<Route name="about" path="/about" handler={About}>
			<Route name="aboutTab1" path="/about/tab1" handler={AboutTab1}/>
			<Route name="aboutTab2" path="/about/tab2" handler={AboutTab2}/>
			<DefaultRoute handler={AboutTab1}/>
		</Route>
		<Route name="tos" path="/tos" handler={NotFound}/>
		<NotFoundRoute handler={NotFound}/>
	</Route>
);

module.exports = routes;