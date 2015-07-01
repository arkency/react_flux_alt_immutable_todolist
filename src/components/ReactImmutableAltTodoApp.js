'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('bootstrap/less/bootstrap.less');

var imageURL = require('../images/yeoman.png');

var ReactImmutableAltTodoApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<ReactImmutableAltTodoApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactImmutableAltTodoApp;
