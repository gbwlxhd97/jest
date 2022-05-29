class UserClient {
  login(id,password) {
    return fetch('http~~~')
      .then((response) => response.json())
  }
}

module.exports = UserClient;