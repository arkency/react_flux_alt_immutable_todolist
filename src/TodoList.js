'use strict';

require('bootstrap/less/bootstrap.less');

import React from 'react/addons';
import ReactImmutableAltTodoApp from 'components/ReactImmutableAltTodoApp';

React.render(<ReactImmutableAltTodoApp />, document.getElementById('content')); // jshint ignore:line
