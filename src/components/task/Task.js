import React from 'react';
import './Task.css'
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/tasks/tasksActions';

const Task = (props) => {

    const dispatch = useDispatch();

    return <div className='task' onClick={() => dispatch(deleteTask(props.task.id))}>
        <span>{props.task.title}</span>
    </div>
}

export default Task;