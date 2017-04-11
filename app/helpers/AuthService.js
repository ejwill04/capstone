import Auth0Lock from 'auth0-lock'
export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {})
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
  }
  _doAuthentication(authResult){
    this.setToken(authResult.idToken)
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the profile', error);
      } else {
        debugger
        this.setProfile(profile)
      }
    })
  }
  login() {
    this.lock.show()
  }
  loggedIn(){
    return !!this.getToken()
  }
  setToken(idToken){
    localStorage.setItem('id_token', idToken)
  }
  getToken(){
    return localStorage.getItem('id_token')
  }
  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
    // this.emit('profile_updated', profile)
  }
  getProfile() {
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  logout() {
    localStorage.removeItem('id_token')
    location.reload()
  }
}
