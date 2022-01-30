import axiosInstance from "../../../api/axios";

export const SET_TASKS = "TASKS::SET_TASKS";
export const ADD_TASK = "TASK::ADD_TASK";
export const DELETE_TASK = "TASK::DELETE_TASK";

export const setTasks = (tasks) => {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export const addTaskSync = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const deleteTaskSync = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const fetchTasks = () => async (dispatch, getState) => {
    try{
        const result = await axiosInstance.get('tasks');
        dispatch(setTasks(result.data))
    }catch(e){
        console.log("fetchTasks error", e)
    }
}

export const deleteTask = (id) => async (dispatch, getState) => {
    try{
        const result = await axiosInstance.delete(`tasks/${id}`);
        //dispatch(fetchTasks())
        dispatch(deleteTaskSync(id))
    }catch(e){
        console.log("fetchTasks error", e)
    }
}