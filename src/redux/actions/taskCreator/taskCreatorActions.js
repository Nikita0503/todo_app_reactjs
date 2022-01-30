import axiosInstance from "../../../api/axios";
import { fetchTasks, addTaskSync } from "../tasks/tasksActions";

export const SET_TASK_TITLE = "TASK_CREATOR::SET_TASK_TITLE";

export const setTaskTitle = (title) => {
    return {
        type: SET_TASK_TITLE,
        payload: title
    }
}

export const createTask = () => async (dispatch, getState) => {
    try{
        const taskTitle = getState().taskCreator.taskTitle;
        const result = await axiosInstance.post('tasks', {
            title: taskTitle
        })
        //dispatch(fetchTasks())
        dispatch(addTaskSync(result.data))
    }catch(e){
        console.log("createTask error", e)
    }
}
