'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Component = React.createClass({
	click: function (e) {
		e.preventDefault();
		alert('it works!');
	},
	render: function () {
		return (
			<div>
				<h1>About</h1>
				<p>
					This <a href="#" onClick={this.click}>click</a> has been wired on the client
				</p>
				<p>
					<input />
				</p>
				<p>
					<Link to="aboutTab1">Tab 1</Link> | <Link to="aboutTab2">Tab 2</Link>
				</p>
				<RouteHandler />
			</div>
		);
	}
});

module.exports = Component;