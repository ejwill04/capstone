import Auth0Lock from 'auth0-lock'

export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {})
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
  }
  _doAuthentication(authResult) {
    this.setToken(authResult.idToken)
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the profile', error);
      } else {
        this.setProfile(profile)
        this.postAUser()
      }
    })
  }

  postAUser() {
    let id = JSON.parse(localStorage.profile).identities[0].user_id
    let name = JSON.parse(localStorage.profile).name
    let github_url = JSON.parse(localStorage.profile).html_url
    let github_avatar = JSON.parse(localStorage.profile).picture

    let user = {
      id,
      name,
      github_url,
      github_avatar,
    }

    fetch('/api/v1/users',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(
          user
        ),
      })
    .then((response) => response.json())
  }

  login() {
    this.lock.show()
  }

  loggedIn() {
    return !!this.getToken()
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getProfile() {
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  logout() {
    localStorage.removeItem('profile')
    localStorage.removeItem('id_token')
    document.location.href = '/'
  }
}
