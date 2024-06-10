export default class User {

    constructor(){}

    constructor(id, name, middleName, lastName, email){
        this.id = id
        this.name = name
        this.middleName = middleName
        this.lastName = lastName
        this.email = email
    }

    setUser(id, name, middleName, lastName, email){
        this.id = id
        this.name = name
        this.middleName = middleName
        this.lastName = lastName
        this.email = email
    }

    clearUser() {
        this.id = null
        this.name = null
        this.middleName = null
        this.lastName = null
        this.email = null
      }
}