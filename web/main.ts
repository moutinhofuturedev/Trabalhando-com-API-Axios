import axios from 'axios'
const url = 'http://localhost:5100/api'

type APIResponse = {
  name: string
  avatar: string
  city: string
}

// GET com Axios
function getUserData() {
  const getData = axios.get(url)
  const response = getData.then(res => dataApi.textContent = JSON.stringify(res.data))

  return response
}

// POST com Axios (cadastrat novo dado)
// no método post não há necessidade de colocar id
function addUser(newUser: APIResponse) {
  const postUser = axios.post(url, newUser)
  const response = postUser.then(res => appId.textContent = JSON.stringify(res.data))

  return response
}

const newUser = {
  name: "Diego Fernandes",
  avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
  city: "Rio do Sul",
} 

// GET PARAMS com Axios
function getUserParams() {
  const parameter = axios.get(`${url}/3`)
  const response = parameter.then(res => {
    userId.textContent = res.data.id
    userName.textContent = res.data.name
    userCity.textContent = res.data.city
    userAvatar.src = res.data.avatar
  })

  return response
}
 
// // PUT com Axios (editar dado cadastrado)
function updateUser(newUpdate: APIResponse) {
  const getUpdate = axios.put(`${url}/1`, newUpdate)
  const response = getUpdate.then(res => updateId.textContent = JSON.stringify(res.data))
  
  return response
} 

const newUpdate = {
  name: 'Esther Agbaje',
  avatar: 'https://avatars.githubusercontent.com/u/53586167?v=4',
  city: 'Dubai'
} 

// // DELETE com Axios
function deteleUser(id: number) {
  const deleteId = axios.delete(`${url}/${id}`)
  const response = deleteId.then(res => del.textContent = res.data)

  return response
}

getUserData().catch(error => console.log(error.message))
addUser(newUser).catch(error => console.log(error.message))
getUserParams().catch(error => console.log(error.message))
updateUser(newUpdate).catch(error => console.log(error.message))
deteleUser(4)
