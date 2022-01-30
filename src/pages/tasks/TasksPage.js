import React from 'react';
import { connect } from 'react-redux';
import Logout from '../../components/logout/Logout';
import Task from '../../components/task/Task';
import TaskCreator from '../../components/taskCreator/TaskCreator';
import { fetchTasks } from '../../redux/actions/tasks/tasksActions';

const TasksPage = (props) => {

  React.useEffect(() => {
    props.fetchTasks()
  }, [])

  return <div>
      <Logout/>
      <TaskCreator/>
      {props.tasks.map(task => {
        return <Task key={task.id} task={task}/>
      })}
  </div>;
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks
  }
}

const mapDispatchToProps = {
  fetchTasks: fetchTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
