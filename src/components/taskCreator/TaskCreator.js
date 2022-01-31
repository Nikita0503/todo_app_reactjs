import React from 'react';
import './TaskCreator.css'
import { connect } from 'react-redux';
import { setTaskTitle, createTask } from '../../redux/actions/taskCreator/taskCreatorActions';

const TaskCreator = (props) => { // Компонент для создания задачи

  return <div className='task_creator'>
      <input value={props.taskTitle} onChange={(event) => props.setTaskTitle(event.target.value)}/> {/** Сохраняем в сторе то что вводит пользователь. Диспатчим экшн setTaskTitle, который пойдет в нужный редьюсер и заменит старое значение title на новое  */}
      <button onClick={() => {props.createTask()}}>create task</button> {/** Создание таски. Диспатчим экшн createTask и внутри него тянем taskTitle с хранилища, идем в rest API и делаем запрос на создание задачи */}
  </div>;
}

const mapStateToProps = (state) => { //аналог useSelector, только для обертки connect. Указываем данные со стора, которые нужны внутри компонента
  return {
      taskTitle: state.taskCreator.taskTitle // создаем обычный обьект. 'название по которому будет лежать в props': state.'имя редьюсера'.'имя поля'
  }
}

const mapDispatchToProps = { //аналог useDispatch, только для обертки connect. Вместо dispatch(setTaskTitle()), можем просто вызывать props.setTaskTitle(). Диспатч посдтавится сам, благодаря connect.
    setTaskTitle: setTaskTitle, //указываем action-creators, с файлов 'что-то'Actions.js
    createTask: createTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator); //connect - HOC (higher order component), который вернет функцию, в которую мы кладем компонент TaskCreator (из-за этого конструкция с двумя скобочками ()() ).
// Она прокинет в props все что в mapStateToProps и mapDispatchToProps. Можете воспринимать connect как просто функцию, если не до конца ясно что такое HOC 
// HOC (higher order component) - компонент высшего порядка. Компонент, который содержит внутри себя другой компонент, но дает ему дополнительный функционал