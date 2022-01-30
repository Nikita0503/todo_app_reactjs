import React from 'react';
import './TaskCreator.css'
import { connect } from 'react-redux';
import { setTaskTitle, createTask } from '../../redux/actions/taskCreator/taskCreatorActions';

const TaskCreator = (props) => {

  return <div className='task_creator'>
      <input value={props.taskTitle} onChange={(event) => props.setTaskTitle(event.target.value)}/>
      <button onClick={() => {props.createTask()}}>create task</button>
  </div>;
}

const mapStateToProps = (state) => {
  return {
      taskTitle: state.taskCreator.taskTitle
  }
}

const mapDispatchToProps = {
    setTaskTitle: setTaskTitle,
    createTask: createTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);