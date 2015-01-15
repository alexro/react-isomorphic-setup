'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

if (process.browser) {
	Router.run(routes, Router.HistoryLocation, function (Handler, state) {
		React.withContext({'msg': 'hello'}, function () {
			React.render(<Handler/>, document);
		});
	});
}
