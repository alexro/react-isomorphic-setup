'use strict';

var React = require('react');

var Component = React.createClass({
	contextTypes: {
		msg: React.PropTypes.string.isRequired
	},
	render: function () {
		return (
			<div>
				<h1>Home</h1>
				<h2>{this.context.msg}</h2>
			</div>
		);
	}
});

module.exports = Component;