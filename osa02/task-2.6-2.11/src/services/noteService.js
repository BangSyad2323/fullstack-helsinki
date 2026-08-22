const baseUrl = "http://localhost:3001/persons"
import axios from "axios"

const getAll = () => {
  const request = axios.get(baseUrl)
  
  return request.then(response => response.data)
}

const create = data => {
  const request = axios.post(baseUrl, data)
 
  return request.then(response => response.data)
}

const deletePhone = id => {
  const request = axios.delete(`${baseUrl}/${id}`)

  return request.then(response => response.data)
}

const changePhone = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)

  return request.then(response => response.data)
}

export default {
  getAll,
  create,
  deletePhone,
  changePhone
}