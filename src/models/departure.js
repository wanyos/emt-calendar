
/**
 * id = int
 * name = varchar
 * place = varchar
 * description = varchar
 */

export default class Departure {

    constructor() {}

    setDeparture(id, name, place, description) {
        this.id = id
        this.name = name
        this.place = place
        this.description = description
    }

}