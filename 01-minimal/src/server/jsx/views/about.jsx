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
				<Link to="aboutInner">Link to AboutInner</Link>
				<RouteHandler />
			</div>
		);
	}
});

module.exports = Component;