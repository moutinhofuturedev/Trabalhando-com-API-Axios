import axios from 'axios'

const url = 'http://localhost:5100/api'

// GET com Axios
function getUserData() {
  const getData = axios.get(url)
  const response = getData.then(res => dataApi.textContent = JSON.stringify(res.data))

  return response
}

// POST com Axios
// no método post não há necessidade de colocar id
function addUser(newUser) {
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

getUserParams().catch(error => console.log(error.message))
addUser(newUser).catch(error => console.log(error.message))
getUserData().catch(error => console.log(error.message))