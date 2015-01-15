'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Component = React.createClass({
	contextTypes: {
		msg: React.PropTypes.string.isRequired
	},
	render: function () {
		return (
			<html>
				<head>
					<title>{this.context.msg}</title>
					<link rel="stylesheet" href="/css/main.css" />
				</head>
				<body>
					<nav>
						<Link to="home">Home</Link> &nbsp;
						<Link to="about">About</Link>
					</nav>

					<main>
						<RouteHandler />
					</main>

					<script src="/js/build.js"></script>
				</body>
			</html>
		);
	}
});

module.exports = Component;
