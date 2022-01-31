import React from 'react';
import { connect } from 'react-redux';
import Logout from '../../components/logout/Logout';
import Task from '../../components/task/Task';
import TaskCreator from '../../components/taskCreator/TaskCreator';
import { fetchTasks } from '../../redux/actions/tasks/tasksActions';

const TasksPage = (props) => {

  React.useEffect(() => { // после первой отрисовки вызывается функция fetchTasks и мы делаем запрос на сервер, чтобы получить задачи текущего пользователя
    props.fetchTasks()
  }, []) // так как массив зависимостей пуст, эта функция будет вызвана всего лишь 1 раз

  return <div>
      <Logout/> {/** кнопка разлогина */}
      <TaskCreator/> {/** компонент создания таски */}
      {props.tasks.map(task => { // отображение всех тасок пользователя
        return <Task key={task.id} task={task}/>
      })}
  </div>;
}

const mapStateToProps = (state) => { //аналог useSelector, только для обертки connect. Указываем данные со стора, которые нужны внутри компонента
  return {
    tasks: state.tasks.tasks
  }
}

const mapDispatchToProps = { //аналог useDispatch, только для обертки connect.
  fetchTasks: fetchTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage); //connect - HOC (higher order component), который вернет функцию, в которую мы кладем компонент для прокидивания в пропсы mapStateToProps и mapDispatchToProps
