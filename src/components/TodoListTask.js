import React             from 'react/addons';
import { ListGroupItem } from 'react-bootstrap';

class TodoListTask extends React.Component {
  render() {
    let { task } = this.props;
    return (<ListGroupItem>{task.get('content')}</ListGroupItem>);
  }
}

export default TodoListTask;

