
/**
 * user
 * id_number = varchar
 * name = varchar
 * last_name = varchar
 * email = varchar
 * date_entry = date
 * logo = varchar
 * departure = int
 * free_system = int
 */


export default class User {
  constructor() {}

  /*
    constructor(id, name, middleName, lastName, email){
        this.id = id
        this.name = name
        this.middleName = middleName
        this.lastName = lastName
        this.email = email
    }
        */

  setUser(id, name, lastName, email, date_entry, logo, departure, free_system) {
    this.id = id
    this.name = name
    this.lastName = lastName
    this.email = email
    this.date_entry = date_entry
    this.logo = logo
    this.departure = departure
    this.free_system = free_system
  }

  clearUser() {
    this.id = null
    this.name = null
    this.lastName = null
    this.email = null
    this.date_entry = null
    this.logo = null
    this.departure = null
    this.free_system = null
  }
}
