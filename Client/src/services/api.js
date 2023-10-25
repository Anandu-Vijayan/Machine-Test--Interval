import axios from 'axios'
const API_URL = 'http://localhost:5000/'

export const GET_ALL_TASKS = () => {
    return  axios.get(API_URL + 'getAll_tasks').then((response) =>
        response.data
    )
}

export const CREATE_TASK = (values) => {
    return axios.post(API_URL + "create_task",values).then((response) =>
        response.statusText
    )
}

export const DELETE_TASK = (id) => {
    return axios.delete(API_URL + `delete_task/${id}`).then((response) =>
        response
    )
}

export const GET_SINGLE_TASKS = (id) => {
    return  axios.get(API_URL + 'single_task',id).then((response) =>
        response
    )
}

export const UPDATE_TASK = (values) => {
    return axios.post(API_URL + "update_task",values).then((response) =>
        response.statusText
    )
}

