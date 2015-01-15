'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;
var Html = require('./html.jsx');
var Home = require('./views/home.jsx');
var About = require('./views/about.jsx');
var AboutInner = require('./views/about-inner.jsx');
var NotFound = require('./404.jsx');

var routes = (
	<Route name="html" path="/" handler={Html}>
		<Route name="home" path="/" handler={Home}/>
		<Route name="about" path="/about" handler={About}>
			<Route name="aboutInner" path="/about/inner" handler={AboutInner}/>
		</Route>
		<Route name="tos" path="/tos" handler={NotFound}/>
		<NotFoundRoute handler={NotFound}/>
	</Route>
);

module.exports = routes;