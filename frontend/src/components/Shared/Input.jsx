var React = require('react');
var createReactClass = require('create-react-class');

var Input = createReactClass({
	getInitialState: function() {
		return {
			isFocused: false
		};
	},

	onFocus: function() {
		this.setState({
			isFocused: true
		});
	},

	onBlur: function() {
		this.setState({
			isFocused: false
		});
	},

	render: function() {
		var classes = [];

		if (this.state.isFocused) {
			classes.push('input--focused');
		}

		return (
			<div className={classes.join(' ')}>
				<input type="text" onFocus={this.onFocus} onBlur={this.onBlur} />
			</div>
		);
	}
});

export default Input;
