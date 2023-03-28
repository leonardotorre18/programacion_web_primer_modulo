// document.cookie = 'name=Leonardo; expire= Fri, 31 mar 2023 8:00:00 UTC';
// console.log(document.cookie)

const setCookie = (key, value) => {
  document.cookie = `${key}=${value}`
}

const getCookie = (key) => {
  
  let cookies = document.cookie.split('; ')
  cookies = cookies.map(element => {
    const newElement = element.split('=')
    return { key: newElement[0], value: newElement[1] }
  })
  return cookies.find( element => element.key == key)

}

setCookie('adress', 'Valencia Estado Carabobo')
console.log(getCookie('adress'))

