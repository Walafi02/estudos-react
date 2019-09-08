import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const chargeDescription = (event) => ({
    type: "DESCRIPTION_CHARGED",
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)

    return {
        type: 'TODO_SEARCHD',
        payload: request
    }
}

export const add = description => {
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch({type: 'TODO_ADDED', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        exios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            ,then(resp => dispatch({typw: 'TODO_MARKED_AS_DONE', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}