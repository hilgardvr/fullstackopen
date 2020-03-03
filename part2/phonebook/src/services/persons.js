import axios from 'axios'

const url = '/api/persons'

const getAll = () => axios.get(url).then(response => response.data)

const create = (person) => axios
        .post(url, person)
        .then(response => response.data)

const deletePerson = (personId) => 
    axios
        .delete(url + "/" + personId)
        .then(response => response.data)


export default {
    getAll,
    create,
    deletePerson
}
