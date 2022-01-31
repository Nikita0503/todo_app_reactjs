import React from 'react';
import './Task.css'
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/tasks/tasksActions';

const Task = (props) => { // компонент отображающий задачу

    const dispatch = useDispatch(); // useDispatch - хук, который возвращает функцию dispatch. Dispatch дает возможность изменить что-то в store (хранилище данных), путем прокидывания какого-то action в dispatch. Пример ниже

    return <div className='task' onClick={() => dispatch(deleteTask(props.task.id))}> {/** По клику диспатчим экшн deleteTask, в который прокидываем id задачи. В итоге, задача удалится */}
        <span>{props.task.title}</span> {/** С пропсов берем обьект task, а с него поле title */}
    </div>
}

export default Task;