var Greeter = React.createClass({
	getDefaultProps: function() {
	    return {
	    	name: 'You',
	    	message: 'Welcome to React.'
	    };
	},

  getInitialState: function() {
    return {
      name: this.props.name
    };
  },

  onButtonClick: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    this.refs.name.value = '';
    this.setState({
      name: name
    });
  },

	render: function() {
    var name = this.state.name;
    var message = this.props.message;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
			</div>
		);
	}
});

var name = 'Quentin';
var message = 'Welcome to React, the best JS library.';

ReactDOM.render(
  <Greeter name={name} message={message}/>,
  document.getElementById('app')
);