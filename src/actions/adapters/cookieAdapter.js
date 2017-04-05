const decodeCookie = str => {
  let token = str.slice(str.indexOf("jwt=") + 4)
  return token.indexOf(";") > 0 ? token.slice(0, token.indexOf(";")) : token
}

export { decodeCookie }
