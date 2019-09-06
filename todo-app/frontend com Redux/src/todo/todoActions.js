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

