import axios from 'axios';

class TodoDataService {

    retrieveAllTodos(username) {
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    getTodoById(username, id) {
        return axios.get(`http://localhost:8080/users/${username}/todos/${id}`)
    }

    deleteTodo(username, id) {
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
    }

}

export default new TodoDataService();